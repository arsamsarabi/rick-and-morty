import ApolloClient from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'node-fetch'

export const client = new ApolloClient({
  link: createHttpLink({
    uri: process.env.API_URI,
    fetch,
  }),
  cache: new InMemoryCache(),
})
