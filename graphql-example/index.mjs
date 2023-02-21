import 'colors'
import { ApolloServer } from 'apollo-server'
import { typeDefs } from './schema.mjs'
import { resolvers } from './resolvers.mjs'
import { root } from './data.mjs'



const API_PORT = 4000

const server = new ApolloServer({
    typeDefs,
    resolvers,
    rootValue: root
})

server.listen({port: API_PORT || 4000}).then(({url}) => {
    console.log(`Server is ready at`.green + ` ${url}`.yellow)
    console.log('Query at:'.magenta + ' http://localhost:4000'.yellow)
}).catch(error => {
    console.log(error)
})

