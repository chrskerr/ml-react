
import React, { useState, useEffect } from "react";
import PropTypes from "proptypes";
import { useSubscription } from "@apollo/react-hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faCheck, faTimes, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import _ from "lodash";
import gql from "graphql-tag";
import { parseJSON, format, subBusinessDays, set, formatISO } from "date-fns";

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
	console.log( predictions );

	return (
		<div className="body">
			<div className="header">
				<h2>Visualisation and Stats analysis of my ML model</h2>
				<p>All predictions pulled for my model, visualised and analysed.</p>
			</div>
			<p>Hello World!</p>
		</div>
	);
}
