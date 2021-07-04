const { ApolloServer } = require('apollo-server')
const connectDb = require('./config/db')
const typeDefs = require('./types/Quote')
const resolvers = require('./resolvers')
const models = require('./models')

connectDb()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  context: { models }
})

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log('Server up', url)
})
