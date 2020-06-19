
import React, { memo } from "react";
import PropTypes from "proptypes";
import _ from "lodash";
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ReferenceLine } from "recharts";
import { linearRegression, linearRegressionLine, min, max, mean, standardDeviation } from "simple-statistics";

export default function Absolute ({ data }) {    
	return (
		<div className="charts absolute">
			<hr />
			<div className="stats">
				<Stats data={ data } />
			</div>
			<hr />
			<div className="distribution">
				<DistributionChart data={ data } />
			</div>
			<hr />
			<div className="scatter">
				<DotChartDifference data={ data } />
			</div>
			<hr />
			<div className="scatter">
				<DotChartPrice data={ data } />
			</div>
		</div> 

	);
}
Absolute.propTypes = {
	data: PropTypes.array,
};

const DotChartPrice = memo( function DotChartPrice ({ data }) {
	const graphData = _.map( data, ({ actual, prediction }) => ({ actual: Number(( actual ).toFixed( 4 )), prediction: Number(( prediction ).toFixed( 4 )), z: 1 }));
	const regressionData = _.map( data, ({ actual, prediction }) => ([ actual, prediction ]));
	const regressionLineFunc = linearRegressionLine( linearRegression( regressionData ));

	const largestVal = _.reduce( graphData, ( total, current ) => {
		const actual = _.get( current, "actual" );
		const prediction = _.get( current, "prediction" );
		if ( actual > prediction ) return actual > total ? actual : total;
		return prediction > total ? prediction: total;
	}, -Infinity );
	const smallestVal = _.reduce( graphData, ( total, current ) => {
		const actual = _.get( current, "actual" );
		const prediction = _.get( current, "prediction" );
		if ( actual < prediction ) return actual < total ? actual : total;
		return prediction < total ? prediction: total;
	}, Infinity );
	const domain =  [ smallestVal, largestVal ];

	const regressionLine = [
		{ actual: domain[ 0 ], prediction: regressionLineFunc( domain[ 0 ]) },
		{ actual: domain[ 1 ], prediction: regressionLineFunc( domain[ 1 ]) },
	];

	return (
		<>
			<h3>Price distribution scatter</h3>
			<ResponsiveContainer>
				<ScatterChart margin={{ top: 50, bottom: 20, right: 70, left: 20 }}>
					<CartesianGrid />
					<XAxis type="number" dataKey="actual" name="actual" domain={ domain } label={{ value: "Actual Change (cents)", position: "bottom", offset: 0 }} />
					<YAxis type="number" dataKey="prediction" name="prediction" domain={ domain } label={{ value: "Predicted Change (cents)", position: "left", angle: -90, offset: 0 }} />
					<ZAxis dataKey="z" range={[ 1, 10 ]} />
					<Tooltip cursor={{ strokeDasharray: "3 3" }} />
					<Scatter data={ graphData } fill="#82ca9d" shape="circle" />
					<Scatter line={{ stroke: "#e16162", strokeWidth: 1 }} data={ regressionLine } shape="circle" fill="#e16162" />
				</ScatterChart>
			</ResponsiveContainer>
		</>
	);
}, _.isEqual );
DotChartPrice.propTypes = {
	data: PropTypes.array,
};

const DotChartDifference = memo( function DotChartDifference ({ data }) {
	const graphData = _.map( data, ({ actual, prediction, close }) => ({ actual: Number(( actual - close ).toFixed( 4 )), prediction: Number(( prediction - close ).toFixed( 4 )), z: 1 }));
	const regressionData = _.map( graphData, ({ actual, prediction }) => ([ actual, prediction ]));
	const regressionLineFunc = linearRegressionLine( linearRegression( regressionData ));

	const largestVal = _.reduce( graphData, ( total, current ) => {
		const actual = _.get( current, "actual" );
		const prediction = _.get( current, "prediction" );
		if ( actual > prediction ) return actual > total ? actual : total;
		return prediction > total ? prediction: total;
	}, -Infinity );
	const smallestVal = _.reduce( graphData, ( total, current ) => {
		const actual = _.get( current, "actual" );
		const prediction = _.get( current, "prediction" );
		if ( actual < prediction ) return actual < total ? actual : total;
		return prediction < total ? prediction: total;
	}, Infinity );
	const domain =  [ smallestVal, largestVal ];

	const regressionLine = [
		{ actual: domain[ 0 ], prediction: regressionLineFunc( domain[ 0 ]) },
		{ actual: domain[ 1 ], prediction: regressionLineFunc( domain[ 1 ]) },
	];

	return (
		<>
			<h3>Prediction differencee distribution scatter</h3>
			<ResponsiveContainer>
				<ScatterChart margin={{ top: 50, bottom: 20, right: 70, left: 20 }}>
					<CartesianGrid />
					<XAxis type="number" dataKey="actual" name="actual" domain={ domain } label={{ value: "Actual Change (cents)", position: "bottom", offset: 0 }} />
					<YAxis type="number" dataKey="prediction" name="prediction" domain={ domain } label={{ value: "Predicted Change (cents)", position: "left", angle: -90, offset: 0 }} />
					<ZAxis dataKey="z" range={[ 1, 10 ]} />
					<Tooltip cursor={{ strokeDasharray: "3 3" }} />
					<Scatter data={ graphData } fill="#82ca9d" shape="circle" />
					<Scatter line={{ stroke: "#e16162", strokeWidth: 1 }} data={ regressionLine } shape="circle" fill="#e16162" />
				</ScatterChart>
			</ResponsiveContainer>
		</>
	);
}, _.isEqual );
DotChartDifference.propTypes = {
	data: PropTypes.array,
};

const DistributionChart = memo( function DistributionChart ({ data }) {
	const numberOfIntervals = 50;
    
	const variations = _.map( data, ({ actual, prediction }) => Number(( actual - prediction ).toFixed( 4 )));
	const range = 2 * max([ 0 - min( variations ), max( variations ) ]);
	const intervalLength = range / numberOfIntervals; 
	const sampleMean = mean( variations );
	const actualsStDev = standardDeviation( variations );
	const start = range / 2 * -1;

	const graphData = _.map( _.range( 0, numberOfIntervals + 1 ), i => {
		const bottom = Number(( start + intervalLength * ( i - 0.5 )).toFixed( 5 ));
		const middle = Number(( start + intervalLength * ( i )).toFixed( 5 ));
		const top = Number(( start + intervalLength * ( i + 0.5 )).toFixed( 5 )); 
		const matchedVariations = _.filter( variations, variation => variation > bottom && variation <= top );
		return { name: middle, value: _.size( matchedVariations ), size: 0 };
	});
    
	const positiveStDevLineX = sampleMean + actualsStDev;
	const negativeStDevLineX = sampleMean - actualsStDev;
        
	return (
		<>
			<h3>Variations distribution</h3>
			<ResponsiveContainer>
				<ScatterChart margin={{ top: 20, bottom: 20, left: -25 }} >
					<XAxis dataKey="name" />
					<YAxis dataKey="value" />
					<ZAxis dataKey="size" range={[ 1, 10 ]} />
					<Tooltip cursor={{ strokeDasharray: "3 3" }}/>
					<Scatter data={ graphData } line={{ stroke: "#82ca9d", strokeWidth: 1 }} stroke="#82ca9d" />
					<ReferenceLine x={ sampleMean } stroke="#C98BBE" label={{ value: "Mean", orientation: 90, position: "insideBottomRight" }} />
					<ReferenceLine x={ positiveStDevLineX } stroke="#C98BBE" label={{ value: "+ σ", orientation: 90, position: "insideBottomRight" }} />
					<ReferenceLine x={ negativeStDevLineX } stroke="#C98BBE" label={{ value: "- σ", orientation: 90, position: "insideBottomRight" }} />
				</ScatterChart>
			</ResponsiveContainer>
		</>
	);
}, _.isEqual );
DistributionChart.propTypes = {
	data: PropTypes.array,
};

const Stats = ({ data }) => {
	const sampleCount = _.size( data );
    
	const differences = _.map( data, ({ actual, prediction, close }) => ({ actual: Number(( actual - close ).toFixed( 4 )), prediction: Number(( prediction - close ).toFixed( 4 )) }));
    
	const actualsStDev = standardDeviation( _.map( differences, "actual" ));
	const negActualsStDev = actualsStDev * -1;
    
	const upwardSamples = _.filter( differences, ({ actual }) => actual > actualsStDev );
	const downwardSamples = _.filter( differences, ({ actual }) => actual < negActualsStDev );
	const flatSamples = _.filter( differences, ({ actual }) => actual >= negActualsStDev && actual <= actualsStDev );

	const upwardCorrect = _.filter( upwardSamples, ({ prediction }) => prediction > actualsStDev );
	const downwardsCorrect = _.filter( downwardSamples, ({ prediction }) => prediction < actualsStDev );
	const flatCorrect = _.filter( flatSamples, ({ prediction }) => prediction >= negActualsStDev && prediction <= actualsStDev );
    
	const percUpwardCorrect = _.size( upwardCorrect ) / _.size( upwardSamples ) * 100;
	const percDownwardsCorrect = _.size( downwardsCorrect ) / _.size( downwardSamples ) * 100;
	const percFlatCorrect = _.size( flatCorrect ) / _.size( flatSamples ) * 100;

	const variations = _.map( differences, ({ actual, prediction }) => Number(( actual - prediction ).toFixed( 4 )));
	const sampleMean = mean( variations );
	const sampleStandardDev = standardDeviation( variations );

	return (
		<>
			<h3>Basic Stats</h3>
			<table>
				<tbody>
					<tr>
						<td>Number of Samples:</td>
						<td>{ sampleCount }</td>
					</tr>
					<tr>
						<td>Sample mean:</td>
						<td>{ ( sampleMean ).toFixed( 5 ) }</td>
					</tr>
					<tr>
						<td>Sample Standard Deviation:</td>
						<td>{ ( sampleStandardDev ).toFixed( 5 ) }</td>
					</tr>
					<tr>
						<td>Percentage of samples which predicted up and were correct:</td>
						<td>{ _.size( upwardCorrect ) } / { _.size( upwardSamples ) } = { percUpwardCorrect.toFixed( 1 ) }%</td>
					</tr>
					<tr>
						<td>Percentage of samples which predicted downward and were correct:</td>
						<td>{ _.size( downwardsCorrect ) } / { _.size( downwardSamples ) } = { percDownwardsCorrect.toFixed( 1 ) }%</td>
					</tr>
					<tr>
						<td>Percentage of samples which predicted flat and were correct:</td>
						<td>{ _.size( flatCorrect ) } / { _.size( flatSamples ) } = { percFlatCorrect.toFixed( 1 ) }%</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};
Stats.propTypes = {
	data: PropTypes.array,
};
