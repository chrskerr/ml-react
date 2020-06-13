
import React from "react";
import Home from "./Home";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";


export default function App () {
	const client = new ApolloClient({
		uri: "https://boiling-ridge-24261.herokuapp.com/v1/graphql",
	});

	return (
		<ApolloProvider client={ client }>
			<Home />
		</ApolloProvider>
	);
}
