
import React, { memo } from "react";
import PropTypes from "proptypes";
import { useSubscription } from "@apollo/react-hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import _ from "lodash";
import gql from "graphql-tag";
import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine } from "recharts";

const SUBSCRIPTION = gql`
subscription SubcribeVersions {
	versions( limit: 1, order_by: { id: desc }) {
		id
		predictions ( where: { prediction: { _is_null: false }, actual: { _is_null: false }}) {
			actual id time
			instrument
			prediction
		}
	}
}`;

export default function Home () {
	const { data, loading } = useSubscription( SUBSCRIPTION );

	const predictions = _.get( data, "versions[0].predictions" );

	return (
		<div className="body">
			<div className="header">
				<h2>Visualisation and Stats analysis of my ML model</h2>
				<p>All predictions pulled for my model, visualised and analysed.</p>
			</div>

			{ loading && 
				<div className="loader">
					<FontAwesomeIcon icon={ faSpinner } spin size="3x" />
				</div> 
			}

			{ !_.isEmpty( predictions ) && 
				<div className="chart">
					<Chart data={ predictions } />
				</div> 
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
		<ResponsiveContainer>
			<ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
				<CartesianGrid />
				<XAxis type="number" dataKey="actual" name="actual" domain={ domain } label={{ value: "Actual Change (cents)", position: "bottom", offset: 0 }} />
				<YAxis type="number" dataKey="prediction" name="prediction" domain={ domain } label={{ value: "Predicted Change (cents)", position: "centerBottom", angle: -90, offset: 5 }}/>
				<Tooltip cursor={{ strokeDasharray: "3 3" }} />
				<Scatter name="A school" data={ graphData } fill="#f9bc60" />
				<ReferenceLine x={ 0 } />
			</ScatterChart>
		</ResponsiveContainer>
	);
}, _.isEqual );
Chart.proptypes = {
	data: PropTypes.array,
};
