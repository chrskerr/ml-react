
import React, { memo, useEffect, useState } from "react";
import PropTypes from "proptypes";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import _ from "lodash";
import gql from "graphql-tag";
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine } from "recharts";

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
	useEffect(() => getPredictions({ variables: { version }}), [ version ]);

	const allPredictions = _.get( data, "predictions" );
	const versionsPredictions = _.filter( allPredictions, [ "_version", version ]);

	const versions = _.map( _.get( versionsData, "versions" ), "id" );
	useEffect(() => { if ( !version ) setVersion( Math.max( versions )); }, [ versions ]);

	const instruments = _.uniq( _.map( versionsPredictions, "instrument" ));
	useEffect(() => { if ( !instrument ) setInstrument( _.first( instruments ));}, [ instruments ]);
    
	const instrumentsVersionsPredictions = _.filter( versionsPredictions, [ "instrument", instrument ]);

	return (
		<div className="body">
			<div className="header">
				<h2>Visualisation and Stats analysis of my ML model</h2>
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

			{ loading && 
				<div className="loader">
					<FontAwesomeIcon icon={ faSpinner } spin size="3x" />
				</div> 
			}

			{ ( !loading && !_.isEmpty( instrumentsVersionsPredictions )) &&
				<div className="chart">
					<Chart data={ instrumentsVersionsPredictions } />
				</div> 
			}

			{ ( !loading && _.isEmpty( instrumentsVersionsPredictions )) &&
				<p>Nothing to display - change a filter!</p>
			}
		</div>
	);
}

const Chart = memo( function Chart ({ data }) {
	const graphData = _.map( data, ({ actual, prediction }) => ({ actual: actual * 100, prediction: prediction * 100 }));

	const largestVal = _.reduce( graphData, ( total, current ) => {
		const actual = Math.abs( _.get( current, "actual" ));
		const prediction = Math.abs( _.get( current, "prediction" ));
		if ( actual > prediction && actual > total ) return actual > total ? actual : total;
		if ( prediction > actual && prediction > total ) return prediction > total ? prediction: total;
	}, -Infinity );
	const domain = [ -1 * largestVal, largestVal ];
	
	return (
		<>
			<ResponsiveContainer>
				<ScatterChart margin={{ top: 20, bottom: 20 }}>
					<CartesianGrid />
					<XAxis type="number" dataKey="actual" name="actual" domain={ domain } label={{ value: "Actual Change (cents)", position: "bottom", offset: 0 }} />
					<YAxis type="number" dataKey="prediction" name="prediction" domain={ domain } label={{ value: "Predicted Change (cents)", position: "centerBottom", angle: 90, offset: 5 }} orientation="right" />
					<Tooltip cursor={{ strokeDasharray: "3 3" }} />
					<Scatter name="A school" data={ graphData } fill="#f9bc60" />
					<ReferenceLine x="actual" y="prediction" />
				</ScatterChart>
			</ResponsiveContainer>
			<a href="http://recharts.org/en-US/api/ReferenceLine" target="_blank" rel="noreferrer noopener">http://recharts.org/en-US/api/ReferenceLine</a>
		</>
	);
}, _.isEqual );
Chart.proptypes = {
	data: PropTypes.array,
};
