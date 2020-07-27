/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"

const client = new ApolloClient({
  uri: "https://graphql.fauna.com/graphql",
  request: operation => {
    operation.setContext({
      headers: {
        Authorization: `Bearer ${process.env.FAUNA_SECRET_CLIENT}`,
      },
    })
  },
})

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
