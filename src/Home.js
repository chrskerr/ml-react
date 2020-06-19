
import React, { useEffect, useState } from "react";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner , faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import _ from "lodash";
import gql from "graphql-tag";
import { max } from "simple-statistics";
import Absolute from "./Views/Absolute";
import Change from "./Views/Change";

const GET_VERSIONS = gql`
query GetVersions {
    versions ( order_by: { id: asc } ) { id prediction_type }
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
        instrument
        prediction
        _version
        close
    }
}`;

export default function Home () {
	const [ instrument, setInstrument ] = useState( false );
	const [ version, setVersion ] = useState( -1 );
	const [ includeBackPredicted, setIncludeBackPredicted ] = useState( true );
	const [ daysBack, setDaysBack ] = useState( 7 );
	const start_time = daysBack === 0 ? new Date( 0 ).toISOString() : new Date( Date.now() - ( 1000 * 60 * 60 * 24 * daysBack )).toISOString();
    
	const { data: versionsData } = useQuery( GET_VERSIONS );
	const [ getPredictions, { data, loading }] = useLazyQuery( GET_PREDICTIONS );
	// eslint-disable-next-line
	useEffect(() => getPredictions({ variables: { version, was_back_predicted: includeBackPredicted ? [ true, false ] : [ false ], start_time }}), [ version, includeBackPredicted, daysBack ]);

	const predictions = _.get( data, "predictions" );

	const versions = _.map( _.get( versionsData, "versions" ), "id" );
	// eslint-disable-next-line
	useEffect(() => { if ( version === -1 && !_.isEmpty( versions )) setVersion( max( versions )); }, [ versions ]);

	const prediction_type = _.get( _.find( _.get( versionsData, "versions" ), [ "id", version ]), "prediction_type" );
	const instruments = _.uniq( _.map( predictions, "instrument" ));
	// eslint-disable-next-line
    useEffect(() => setInstrument( _.first( instruments )), [ instruments, version ]);
        
	const filteredPredictions = _.filter( predictions, [ "instrument", instrument ]);

	return (
		<div className="body">
			<div className="header">
				<h1>Visualisation and Stats analysis of my ML model</h1>
				<p>All predictions pulled for my model, visualised and analysed.</p>
			</div>
			<div className="options">
				<div>
					<p>Select Version:</p>
					<select value={ version } onChange={ e => setVersion( Number( e.target.value ))}>
						{ !_.isEmpty( versions ) && _.map( versions, version => <option key={ version } value={ version }>{ version }</option> ) }
					</select>
				</div>
				<div>
					<p>Select Instruments:</p>
					<select value={ instrument } onChange={ e => setInstrument( e.target.value )}>
						{ !_.isEmpty( instruments ) && _.map( instruments, instrument => <option key={ instrument } value={ instrument }>{ instrument }</option> ) }
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
			{ ( loading || !version ) ? 
				<div className="loader">
					<FontAwesomeIcon icon={ faSpinner } spin size="3x" />
				</div>
				:
				<>
					{ !_.isEmpty( filteredPredictions ) ? 
						<>
							{ prediction_type === "absolute" && <Absolute data={ filteredPredictions } /> }
							{ prediction_type === "change" && <Change data={ filteredPredictions } /> }
						</>
						:
						<p>Nothing to display - change a filter!</p>
					}
				</>
			}
		</div>
	);
}
