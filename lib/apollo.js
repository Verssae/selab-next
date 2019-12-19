import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-unfetch'

import { WebSocketLink } from 'apollo-link-ws'

// const wsLink = new WebSocketLink({
//   uri: 'ws://13.209.46.207:4000/',
//   options: {
//     reconnect: true
//   }
// })

import { split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'

// const httpLink = new HttpLink({
//   uri: 'http://13.209.46.207:4000/'
// })

// const link = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query)
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     )
//   },
//   wsLink,
//   httpLink
// )

const wsLink = process.browser ? new WebSocketLink({ // if you instantiate in the server, the error will be thrown
  uri: `ws://13.209.46.207:4000/`,
  options: {
    reconnect: true
  }
}) : null;

const httplink = new HttpLink({
	uri: 'http://13.209.46.207:4000/',
	credentials: 'same-origin'
});

const link = process.browser ? split( //only create the split in the browser
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httplink,
) : httplink;

import { ApolloProvider } from '@apollo/react-hooks'

const client = createApolloClient()

const withApollo = (PageComponent) => {
  const WithApollo = ({ ...pageProps }) => {
    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    )
  }
  return WithApollo
}

function createApolloClient() {
  return new ApolloClient({
    link,
    cache: new InMemoryCache()
  })
}

export default withApollo