
import React, { memo, useState } from "react";
import PropTypes from "proptypes";
import _ from "lodash";
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ReferenceLine } from "recharts";
import { min, max, mean, standardDeviation } from "simple-statistics";

export default function Absolute ({ data, constants }) {    
	return (
		<div className="charts absolute">
			<hr />
			<div className="stats">
				<Stats data={ data } constants={ constants } />
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
	constants: PropTypes.object,
};

const DotChartPrice = memo( function DotChartPrice ({ data }) {
	const graphData = _.map( data, ({ actual, prediction }) => ({ actual: Number(( actual ).toFixed( 4 )), prediction: Number(( prediction ).toFixed( 4 )), z: 1 }));

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
					<Scatter data={ graphData } fill="#82ca9d" shape="circle" line={{ stroke: "#e16162", strokeWidth: 1 }} lineType="fitting" />
				</ScatterChart>
			</ResponsiveContainer>
		</>
	);
});
DotChartPrice.propTypes = {
	data: PropTypes.array,
};

const DotChartDifference = memo( function DotChartDifference ({ data }) {
	const graphData = _.map( data, ({ actual, prediction, close }) => ({ actual: Number(( actual - close ).toFixed( 4 )), prediction: Number(( prediction - close ).toFixed( 4 )), z: 1 }));
	const posTradeThreshold = standardDeviation( _.map( graphData, "actual" ));
	const negTradeThreshold = posTradeThreshold * -1;
	
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

	return (
		<>
			<h3>Prediction difference distribution scatter</h3>
			<ResponsiveContainer>
				<ScatterChart margin={{ top: 50, bottom: 20, right: 70, left: 20 }}>
					<CartesianGrid />
					<XAxis type="number" dataKey="actual" name="actual" domain={ domain } label={{ value: "Actual Change (cents)", position: "bottom", offset: 0 }} />
					<YAxis type="number" dataKey="prediction" name="prediction" domain={ domain } label={{ value: "Predicted Change (cents)", position: "left", angle: -90, offset: 0 }} />
					<ZAxis dataKey="z" range={[ 1, 10 ]} />
					<Tooltip cursor={{ strokeDasharray: "3 3" }} />
					<Scatter data={ graphData } fill="#82ca9d" shape="circle" line={{ stroke: "#e16162", strokeWidth: 2 }} lineType="fitting" />
					<ReferenceLine x={ posTradeThreshold } stroke="#C98BBE" strokeDasharray="3 6" label={{ value: "+ σ", position: "insideBottomRight" }} />
					<ReferenceLine x={ negTradeThreshold } stroke="#C98BBE" strokeDasharray="3 6" label={{ value: "- σ", position: "insideBottomRight" }} />
					<ReferenceLine y={ posTradeThreshold } stroke="#C98BBE" strokeDasharray="3 6" label={{ value: "+ σ", position: "insideTopLeft" }} />
					<ReferenceLine y={ negTradeThreshold } stroke="#C98BBE" strokeDasharray="3 6" label={{ value: "- σ", position: "insideTopLeft" }} /> 
				</ScatterChart>
			</ResponsiveContainer>
		</>
	);
});
DotChartDifference.propTypes = {
	data: PropTypes.array,
};

const DistributionChart = memo( function DistributionChart ({ data }) {
	const numberOfIntervals = 50;
	
	const variations = _.map( data, ({ actual, prediction }) => Number(( prediction - actual ).toFixed( 4 )));
	const range = 2 * max([ 0 - min( variations ), max( variations ) ]);
	const intervalLength = range / numberOfIntervals; 
	const sampleMean = mean( variations );
	const posTradeThreshold = standardDeviation( variations );
	const start = range / 2 * -1;

	const graphData = _.map( _.range( 0, numberOfIntervals + 1 ), i => {
		const bottom = Number(( start + intervalLength * ( i - 0.5 )).toFixed( 5 ));
		const middle = Number(( start + intervalLength * ( i )).toFixed( 5 ));
		const top = Number(( start + intervalLength * ( i + 0.5 )).toFixed( 5 )); 
		const matchedVariations = _.filter( variations, variation => variation > bottom && variation <= top );
		return { name: middle, value: _.size( matchedVariations ), size: 0 };
	});
	
	const positiveStDevLineX = sampleMean + posTradeThreshold;
	const negativeStDevLineX = sampleMean - posTradeThreshold;
		
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

const Stats = memo( function Stats ({ data, constants }) {
	const [ threshold, setThreshold ] = useState( 100 );
	const [ spread, setSpread ] = useState( _.get( constants, "spread" ));
	const [ avgRange, setAvgRange ] = useState( _.get( constants, "avgRange" ));
	const sampleCount = _.size( data );
    	
	const differences = _.map( data, ({ actual, prediction, close, id }) => ({ 
		actual: Number(( actual - close ).toFixed( 5 )),
		prediction: Number(( prediction - close ).toFixed( 5 )),
		accuracy: Number(( prediction - actual ).toFixed( 5 )),
		id, close,
	}));
    
	const accuracy = _.map( differences, "accuracy" );
	const accuracyMean = mean( accuracy );
	const accuracyStandardDev = standardDeviation( accuracy );
    
	const posTradeThreshold = ( accuracyStandardDev * threshold / 100 )+ spread;
	const negTradeThreshold = -1 * posTradeThreshold;

	const upAUpP = _.size( _.filter( differences, ({ actual, prediction }) => actual > posTradeThreshold && prediction > posTradeThreshold ));
	const upAFlatP = _.size( _.filter( differences, ({ actual, prediction }) => actual > posTradeThreshold && prediction >= negTradeThreshold && prediction <= posTradeThreshold ));
	const upADownP = _.size( _.filter( differences, ({ actual, prediction }) => actual > posTradeThreshold && prediction < negTradeThreshold ));
	const upATotal = _.size( _.filter( differences, ({ actual }) => actual > posTradeThreshold ));
	const upPTotal = _.size( _.filter( differences, ({ prediction }) => prediction > posTradeThreshold ));
	
	const flatAUpP = _.size( _.filter( differences, ({ actual, prediction }) => actual >= negTradeThreshold && actual <= posTradeThreshold && prediction > posTradeThreshold ));
	const flatAFlatP = _.size( _.filter( differences, ({ actual, prediction }) => actual >= negTradeThreshold && actual <= posTradeThreshold && prediction >= negTradeThreshold && prediction <= posTradeThreshold ));
	const flatADownP = _.size( _.filter( differences, ({ actual, prediction }) => actual >= negTradeThreshold && actual <= posTradeThreshold && prediction < negTradeThreshold ));
	const flatATotal = _.size( _.filter( differences, ({ actual }) => actual >= negTradeThreshold && actual <= posTradeThreshold ));
	const flatPTotal = _.size( _.filter( differences, ({ prediction }) => prediction >= negTradeThreshold && prediction <= posTradeThreshold ));
	
	const downAUpP = _.size( _.filter( differences, ({ actual, prediction }) => actual < negTradeThreshold && prediction > posTradeThreshold ));
	const downAFlatP = _.size( _.filter( differences, ({ actual, prediction }) => actual < negTradeThreshold && prediction >= negTradeThreshold && prediction <= posTradeThreshold ));
	const downADownP = _.size( _.filter( differences, ({ actual, prediction }) => actual < negTradeThreshold && prediction < negTradeThreshold ));
	const downATotal = _.size( _.filter( differences, ({ actual }) => actual < negTradeThreshold ));
	const downPTotal = _.size( _.filter( differences, ({ prediction }) => prediction < negTradeThreshold ));

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
						<td>Accuracy ( Prediction minus Actual ) mean:</td>
						<td>{ ( accuracyMean ).toFixed( 5 ) }</td>
					</tr>
					<tr>
						<td>Accuracy Standard Deviation:</td>
						<td>{ ( accuracyStandardDev ).toFixed( 5 ) }</td>
					</tr>
				</tbody>
			</table>
			<br />
			<div className="options">
				<div>
					<p>Modelling true range:</p>
					<input type="number" onChange={ e => setAvgRange( Number( e.target.value ))} value={ avgRange } min={ 0 } />
				</div>
				<div>
					<p>Modelling spread:</p>
					<input type="number" onChange={ e => setSpread( Number( e.target.value ))} value={ spread } min={ 0 } />
				</div>
				<div>
					<p>Modelling % of accuracy Standard Deviation:</p>
					<input type="number" onChange={ e => setThreshold( Number( e.target.value ))} value={ threshold } min={ 0 } />
				</div>
			</div>
			<table>
				<tbody>
					<tr>
						<td>Total threshold to trade:</td>
						<td>{ posTradeThreshold.toFixed( 5 ) }</td>
					</tr>
					<tr>
						<td>Threshold % of True Range:</td>
						<td>{ ( posTradeThreshold / avgRange * 100 ).toFixed( 2 ) }</td>
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
	constants: PropTypes.object,
};