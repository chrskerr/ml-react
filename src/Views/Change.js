
import React, { memo } from "react";
import PropTypes from "proptypes";
import _ from "lodash";
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ReferenceLine } from "recharts";
import { min, max, mean, standardDeviation } from "simple-statistics";

export default function Change ({ data }) {    
	return (
		<div className="charts change">
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
				<DotChart data={ data } />
			</div>
		</div> 
	);
}
Change.propTypes = {
	data: PropTypes.array,
};

const DotChart = memo( function DotChart ({ data }) {
	const graphData = _.map( data, ({ actual, prediction }) => ({ actual: Number(( actual ).toFixed( 4 ) * 100 ), prediction: Number(( prediction ).toFixed( 4 ) * 100 ), z: 1 }));
	const actualsStDev = standardDeviation( _.map( graphData, "actual" ));
	const negActualsStDev = actualsStDev * -1;

	const largestVal = _.reduce( graphData, ( total, current ) => {
		const actual = Math.abs( _.get( current, "actual" ));
		const prediction = Math.abs( _.get( current, "prediction" ));
		if ( actual > prediction ) return actual > total ? actual : total;
		return prediction > total ? prediction: total;
	}, -Infinity );
	const domain =  [ -1 * Math.ceil( largestVal * 2 ) / 2, 1 * Math.ceil( largestVal * 2 ) / 2 ];

	return (
		<>
			<h3>Predictions vs Actuals scatter</h3>
			<ResponsiveContainer>
				<ScatterChart margin={{ top: 50, bottom: 20, right: 70, left: 20 }}>
					<CartesianGrid />
					<XAxis type="number" dataKey="actual" name="actual" domain={ domain } label={{ value: "Actual Change (cents)", position: "bottom", offset: 0 }} />
					<YAxis type="number" dataKey="prediction" name="prediction" domain={ domain } label={{ value: "Predicted Change (cents)", position: "left", angle: -90, offset: 0 }} />
					<ZAxis dataKey="z" range={[ 1, 10 ]} />
					<Tooltip cursor={{ strokeDasharray: "3 3" }} />
					<Scatter data={ graphData } fill="#82ca9d" shape="circle" line={{ stroke: "#e16162", strokeWidth: 1 }} lineType="fitting" />
					<ReferenceLine x={ actualsStDev } stroke="#C98BBE" strokeDasharray="3 6" label={{ value: "+ σ", position: "insideBottomRight" }} />
					<ReferenceLine x={ negActualsStDev } stroke="#C98BBE" strokeDasharray="3 6" label={{ value: "- σ", position: "insideBottomRight" }} />
					<ReferenceLine y={ actualsStDev } stroke="#C98BBE" strokeDasharray="3 6" label={{ value: "+ σ", position: "insideTopLeft" }} />
					<ReferenceLine y={ negActualsStDev } stroke="#C98BBE" strokeDasharray="3 6" label={{ value: "- σ", position: "insideTopLeft" }} /> 
				</ScatterChart>
			</ResponsiveContainer>
		</>
	);
});
DotChart.propTypes = {
	data: PropTypes.array,
};

const DistributionChart = memo( function DistributionChart ({ data }) {
	const numberOfIntervals = 50;
    
	const variations = _.map( data, ({ actual, prediction }) => Number(( actual - prediction ).toFixed( 4 ) * 100 ));
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
	console.log( negativeStDevLineX, positiveStDevLineX );
        
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
});
DistributionChart.propTypes = {
	data: PropTypes.array,
};

const Stats = memo( function Stats ({ data }) {
	const sampleCount = _.size( data );
    
	const actuals = _.map( data, "actual" );
	const actualsMean = mean( actuals );
	const actualsStDev = standardDeviation( actuals ) - actualsMean;
	const negActualsStDev = actualsMean - actualsStDev;
        
	const upAUpP = _.size( _.filter( data, ({ actual, prediction }) => actual > actualsStDev && prediction > actualsStDev ));
	const upAFlatP = _.size( _.filter( data, ({ actual, prediction }) => actual > actualsStDev && prediction >= negActualsStDev && prediction <= actualsStDev ));
	const upADownP = _.size( _.filter( data, ({ actual, prediction }) => actual > actualsStDev && prediction < negActualsStDev ));
	const upATotal = _.size( _.filter( data, ({ actual }) => actual > actualsStDev ));
	const upPTotal = _.size( _.filter( data, ({ prediction }) => prediction > actualsStDev ));
    
	const flatAUpP = _.size( _.filter( data, ({ actual, prediction }) => actual >= negActualsStDev && actual <= actualsStDev && prediction > actualsStDev ));
	const flatAFlatP = _.size( _.filter( data, ({ actual, prediction }) => actual >= negActualsStDev && actual <= actualsStDev && prediction >= negActualsStDev && prediction <= actualsStDev ));
	const flatADownP = _.size( _.filter( data, ({ actual, prediction }) => actual >= negActualsStDev && actual <= actualsStDev && prediction < negActualsStDev ));
	const flatATotal = _.size( _.filter( data, ({ actual }) => actual >= negActualsStDev && actual <= actualsStDev ));
	const flatPTotal = _.size( _.filter( data, ({ prediction }) => prediction >= negActualsStDev && prediction <= actualsStDev ));
    
	const downAUpP = _.size( _.filter( data, ({ actual, prediction }) => actual < negActualsStDev && prediction > actualsStDev ));
	const downAFlatP = _.size( _.filter( data, ({ actual, prediction }) => actual < negActualsStDev && prediction >= negActualsStDev && prediction <= actualsStDev ));
	const downADownP = _.size( _.filter( data, ({ actual, prediction }) => actual < negActualsStDev && prediction < negActualsStDev ));
	const downATotal = _.size( _.filter( data, ({ actual }) => actual < negActualsStDev ));
	const downPTotal = _.size( _.filter( data, ({ prediction }) => prediction < negActualsStDev ));

	const variations = _.map( data, ({ actual, prediction }) => Number(( actual - prediction ).toFixed( 4 )));
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
				</tbody>
			</table>
			<br />
			<table className="comparison-table">
				<thead>
					<tr>
						<th></th>
						<th>Prediction Up</th>
						<th>Prediction Flat</th>
						<th>Prediction Down</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>Actual Up</th>
						<td>{ upAUpP } / { ( upAUpP / upPTotal * 100 ).toFixed( 1 ) }%</td>
						<td>{ upAFlatP } / { ( upAFlatP / flatPTotal * 100 ).toFixed( 1 ) }%</td>
						<td>{ upADownP } / { ( upADownP / downPTotal * 100 ).toFixed( 1 ) }%</td>
						<td>{ upATotal }</td>
					</tr>
					<tr>
						<th>Actual Flat</th>
						<td>{ flatAUpP } / { ( flatAUpP / upPTotal * 100 ).toFixed( 1 ) }%</td>
						<td>{ flatAFlatP } / { ( flatAFlatP / flatPTotal * 100 ).toFixed( 1 ) }%</td>
						<td>{ flatADownP } / { ( flatADownP / downPTotal * 100 ).toFixed( 1 ) }%</td>
						<td>{ flatATotal }</td>
					</tr>
					<tr>
						<th>Actual Down</th>
						<td>{ downAUpP } / { ( downAUpP / upPTotal * 100 ).toFixed( 1 ) }%</td>
						<td>{ downAFlatP } / { ( downAFlatP / flatPTotal * 100 ).toFixed( 1 ) }%</td>
						<td>{ downADownP } / { ( downADownP / downPTotal * 100 ).toFixed( 1 ) }%</td>
						<td>{ downATotal }</td>
					</tr>
					<tr>
						<th>Total</th>
						<td>{ upPTotal }</td>
						<td>{ flatPTotal }</td>
						<td>{ downPTotal }</td>
						<td>{ upATotal + flatATotal + downATotal } / { upPTotal + flatPTotal + downPTotal }</td>
					</tr>
				</tbody>
			</table>
			<p>% are of number of predictions per the actual, so accuracy in that actual direction</p>
		</>
	);
});
Stats.propTypes = {
	data: PropTypes.array,
};
