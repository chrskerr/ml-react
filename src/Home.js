
import React, { memo, useEffect, useState } from "react";
import PropTypes from "proptypes";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import _ from "lodash";
import gql from "graphql-tag";
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ComposedChart, Line, ReferenceLine } from "recharts";
import { linearRegression, linearRegressionLine, min, max, mean, standardDeviation } from "simple-statistics";

const GET_VERSIONS = gql`
query GetVersions {
    versions { id }
}
`;

const GET_PREDICTIONS = gql`
query GetPredictions ( $version: Int! ) {
    predictions ( where: { prediction: { _is_null: false }, actual: { _is_null: false }, _version: { _eq: $version }}) {
        actual id time
        instrument
        prediction
        _version
    }
}`;

export default function Home () {
	const [ instrument, setInstrument ] = useState( false );
	const [ version, setVersion ] = useState( false );
    
	const { data: versionsData } = useQuery( GET_VERSIONS );
	const [ getPredictions, { data, loading }] = useLazyQuery( GET_PREDICTIONS );
	// eslint-disable-next-line
	useEffect(() => getPredictions({ variables: { version }}), [ version ]);

	const allPredictions = _.get( data, "predictions" );
	const versionsPredictions = _.filter( allPredictions, [ "_version", version ]);

	const versions = _.map( _.get( versionsData, "versions" ), "id" );
	// eslint-disable-next-line
	useEffect(() => { if ( !version ) setVersion( Math.max( versions )); }, [ versions ]);

	const instruments = _.uniq( _.map( versionsPredictions, "instrument" ));
	// eslint-disable-next-line
	useEffect(() => { if ( !instrument ) setInstrument( _.first( instruments ));}, [ instruments ]);
    
	const instrumentsVersionsPredictions = _.filter( versionsPredictions, [ "instrument", instrument ]);

	return (
		<div className="body">
			<div className="header">
				<h1>Visualisation and Stats analysis of my ML model</h1>
				<p>All predictions pulled for my model, visualised and analysed.</p>
			</div>

			<div className="options">
				<div>
					<p>Select Version:</p>
					<select value={ version } onChange={ e => setVersion( e.target.value )}>
						{ !_.isEmpty( versions ) && _.map( versions, version => <option key={ version } value={ version }>{ version }</option> ) }
					</select>
				</div>
				<div>
					<p>Select Instruments:</p>
					<select value={ instrument } onChange={ e => setInstrument( e.target.value )}>
						{ !_.isEmpty( instruments ) && _.map( instruments, instrument => <option key={ instrument } value={ instrument }>{ instrument }</option> ) }
					</select>
				</div>
			</div>

			{ ( loading || !version ) ? 
				<div className="loader">
					<FontAwesomeIcon icon={ faSpinner } spin size="3x" />
				</div>
				:
				<>{ !_.isEmpty( instrumentsVersionsPredictions ) ?
					<div className="chart">
						<hr />
						<div className="stats">
							<Stats data={ instrumentsVersionsPredictions } />
						</div>
						<hr />
						<div className="scatter">
							<DotChart data={ instrumentsVersionsPredictions } />
						</div>
						<hr />
						<div className="distribution">
							<DistributionChart data={ instrumentsVersionsPredictions } />
						</div>
					</div> 
					:
					<p>Nothing to display - change a filter!</p>
				}</>
			}
		</div>
	);
}

const DotChart = memo( function DotChart ({ data }) {
	const graphData = _.map( data, ({ actual, prediction }) => ({ actual: ( actual * 100 ).toFixed( 4 ), prediction: ( prediction * 100 ).toFixed( 4 ) }));
	const regressionData = _.map( data, ({ actual, prediction }) => ([ actual * 100, prediction * 100 ]));

	const largestVal = _.reduce( graphData, ( total, current ) => {
		const actual = Math.abs( _.get( current, "actual" ));
		const prediction = Math.abs( _.get( current, "prediction" ));
		if ( actual > prediction ) return actual > total ? actual : total;
		return prediction > total ? prediction: total;
	}, -Infinity );
	const domain = [ -1 * Math.ceil( largestVal * 2 ) / 2, 1 * Math.ceil( largestVal * 2 ) / 2 ];

	const regressionLineFunc = linearRegressionLine( linearRegression( regressionData ));
	const regressionLine = [
		{ actual: domain[ 0 ], prediction: regressionLineFunc( domain[ 0 ]) },
		{ actual: domain[ 1 ], prediction: regressionLineFunc( domain[ 1 ]) },
	];

	return (
		<>
			<h3>Predictions vs Actuals scatter</h3>
			<ResponsiveContainer>
				<ScatterChart margin={{ top: 20, bottom: 20 }} data={ graphData }>
					<CartesianGrid />
					<XAxis type="number" dataKey="actual" name="actual" domain={ domain } label={{ value: "Actual Change (cents)", position: "bottom", offset: 0 }} />
					<YAxis type="number" dataKey="prediction" name="prediction" domain={ domain } label={{ value: "Predicted Change (cents)", position: "centerBottom", angle: -90, offset: 5 }} />
					<Tooltip cursor={{ strokeDasharray: "3 3" }} />
					<Scatter data={ graphData } fill="#82ca9d" shape="triangle" />
					<Scatter line={{ stroke: "#e16162", strokeWidth: 1 }} data={ regressionLine } shape="circle" fill="#e16162" />
				</ScatterChart>
			</ResponsiveContainer>
		</>
	);
}, _.isEqual );
DotChart.propTypes = {
	data: PropTypes.array,
};

const DistributionChart = memo( function DistributionChart ({ data }) {
	const numberOfIntervals = 20;
    
	const variations = _.map( data, ({ actual, prediction }) => Number(( actual - prediction ).toFixed( 4 )));
	const range = 2 * max([ 0 - min( variations ), max( variations ) ]);
	const intervalLength = range / numberOfIntervals; 
    
	const start = range / 2 * -1;

	const graphData = _.map( _.range( 0, numberOfIntervals + 1 ), i => {
		const bottom = Number(( start + intervalLength * ( i - 0.5 )).toFixed( 5 ));
		const middle = Number(( start + intervalLength * ( i )).toFixed( 5 ));
		const top = Number(( start + intervalLength * ( i + 0.5 )).toFixed( 5 )); 
		const matchedVariations = _.filter( variations, variation => variation > bottom && variation <= top );
		return { name: middle, value: _.size( matchedVariations ) };
	});
        
	return (
		<>
			<h3>Variations distribution</h3>
			<ResponsiveContainer>
				<ComposedChart data={ graphData } margin={{ top: 20, bottom: 20, left: -25 }} >
					<XAxis dataKey="name" />
					<YAxis dataKey="value" />
					<Tooltip />
					<Line type="natural" dataKey="value" stroke="#82ca9d" dot={ false } />
					<ReferenceLine x={ 0 } stroke="#e16162" label="Zero" />
				</ComposedChart>
			</ResponsiveContainer>
		</>
	);
}, _.isEqual );
DistributionChart.propTypes = {
	data: PropTypes.array,
};

const Stats = ({ data }) => {
	const sampleCount = _.size( data );
    
	const correctSamples = _.filter( data, ({ actual, prediction }) => ( actual > 0 && prediction > 0 ) || ( actual < 0 && prediction < 0 ));
	const percDirectionCorrect = 100 * _.size( correctSamples ) / sampleCount;
    
	const correctSamplesWithPredictedLessThanActual = _.filter( correctSamples, ({ actual, prediction }) => Math.abs( actual ) >= Math.abs( prediction ));
	const percOfCorrectSamplesWithPredictedLessThanActual = 100 * _.size( correctSamplesWithPredictedLessThanActual ) / sampleCount;

	const variations = _.map( data, ({ actual, prediction }) => Number(( actual - prediction ).toFixed( 4 )));
	const sampleMean = mean( variations );
	const sampleStandardDev = standardDeviation( variations );

	return (
		<>
			<h3>Basic Stats</h3>
			<table>
				<tr>
					<td>Number of Samples:</td>
					<td>{ sampleCount }</td>
				</tr>
				<tr>
					<td>Sample mean:</td>
					<td>{ ( sampleMean ).toFixed( 5 ) }</td>
				</tr>
				<tr>
					<td>Sample Standard Deviation (have not checked if curve is normal..):</td>
					<td>{ ( sampleStandardDev ).toFixed( 5 ) }</td>
				</tr>
				<tr>
					<td>Percentage of all predictions which got the direction correct:</td>
					<td>{ percDirectionCorrect.toFixed( 1 ) }%</td>
				</tr>
				<tr>
					<td>Percentage of direction-correct predictions which did not overestimate the actual outcome:</td>
					<td>{ percOfCorrectSamplesWithPredictedLessThanActual.toFixed( 1 ) }%</td>
				</tr>
			</table>
		</>
	);
};
Stats.propTypes = {
	data: PropTypes.array,
};