import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-unfetch'

function createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://selab-graphql.herokuapp.com',
      fetch
    }),
    cache: new InMemoryCache()
  })
}

export default createApolloClient