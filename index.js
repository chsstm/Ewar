const { ApolloServer, gql } = require('apollo-server-lambda');
const { typeDefs } = require('./app')
const { resolvers } = require('./app')
const { db } = require('./services')

// const server = new ApolloServer({ typeDefs, resolvers });

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  playground: true,
  introspection: true,

  context: async () => ({
    db: await db.connectToDatabase(process.env.MONGO_IP)
  }),

  dataSources: () => {
    return {
      db:'client',
      name: "Akash"
    };
  },
})


exports.graphqlHandler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  console.log("process.env.MONGO_IP", process.env.MONGO_DB)
  const handler = server.createHandler({
    cors: {
      origin: '*',
      credentials: true
    }
  })
  return handler(event, context, callback);
};