
import React, { useEffect, useState } from "react";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner , faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import _ from "lodash";
import gql from "graphql-tag";
import Absolute from "./Views/Absolute";
import Change from "./Views/Change";

const GET_VERSIONS = gql`
query GetVersions {
    versions ( order_by: { id: asc } ) { id prediction_type instrument depth granularity }
}
`;

const GET_PREDICTIONS = gql`
query GetPredictions ( $version: Int!, $was_back_predicted: [Boolean!], $start_time: timestamptz! ) {
    predictions ( where: { 
        prediction: { _is_null: false }, 
        actual: { _is_null: false }, 
        _version: { _eq: $version }, 
        was_back_predicted: { _in: $was_back_predicted },
        time: { _gte: $start_time }
    }) {
        actual id time
        prediction
        _version
        close
    }
}`;

export default function Home () {
	const [ version, setVersion ] = useState({});
	const [ includeBackPredicted, setIncludeBackPredicted ] = useState( true );
	const [ daysBack, setDaysBack ] = useState( 7 );
	const start_time = daysBack === 0 ? new Date( 0 ).toISOString() : new Date( Date.now() - ( 1000 * 60 * 60 * 24 * daysBack )).toISOString();
    
	const { data: versionsData } = useQuery( GET_VERSIONS );
	const [ getPredictions, { data, loading }] = useLazyQuery( GET_PREDICTIONS );

	const versions = _.get( versionsData, "versions" );
	const versionId = _.get( version, "id" );
	const predictions = _.get( data, "predictions" );
	const prediction_type = _.get( version, "prediction_type" );
	const instrument = _.get( version, "instrument" );
	const granularity = _.get( version, "granularity" );
	const depth = _.get( version, "depth" );

	// eslint-disable-next-line
	useEffect(() => { if ( _.isEmpty( version ) && !_.isEmpty( versions )) setVersion( _.last( versions )); }, [ versions ]);
	// eslint-disable-next-line
	useEffect(() => { if ( versionId ) getPredictions({ variables: { version: versionId, was_back_predicted: includeBackPredicted ? [ true, false ] : [ false ], start_time }}); }, [ version, includeBackPredicted, daysBack ]);


        
	return (
		<div className="body">
			<div className="header">
				<h1>Visualisation and Stats analysis of my ML model</h1>
				<p>All predictions pulled for my model, visualised and analysed.</p>
			</div>
			<div className="options">
				<div>
					<p>Select Version:</p>
					<select value={ versionId } onChange={ e => setVersion( _.find( versions, [ "id", Number( e.target.value ) ])) }>
						{ !_.isEmpty( versions ) && _.map( versions, ({ id }) => <option key={ id } value={ id }>{ id }</option> ) }
					</select>
				</div>
				<div onClick={ () => setIncludeBackPredicted( !includeBackPredicted ) }>
					<p>Include back-predicted results</p>
					{ includeBackPredicted ? <FontAwesomeIcon icon={ faCheck } /> : <FontAwesomeIcon icon={ faTimes } className="unchecked" /> }
				</div>
				<div>
					<p>How many days back (0 = all)?</p>
					<input type="number" onChange={ e => setDaysBack( Number( e.target.value ))} value={ daysBack } />
				</div>
			</div>
			<div className="version-info">
				<p>Instrument: <span>{ instrument }</span></p>
				<p>Granularity: <span>{ granularity }</span></p>
				<p>Depth: <span>{ depth }</span></p>
			</div>
			<br />
			{ ( loading || !version ) ? 
				<div className="loader">
					<FontAwesomeIcon icon={ faSpinner } spin size="3x" />
				</div>
				:
				<>
					{ !_.isEmpty( predictions ) ? 
						<>
							{ prediction_type === "absolute" && <Absolute data={ predictions } /> }
							{ prediction_type === "change" && <Change data={ predictions } /> }
						</>
						:
						<p>Nothing to display - change a filter!</p>
					}
				</>
			}
		</div>
	);
}
