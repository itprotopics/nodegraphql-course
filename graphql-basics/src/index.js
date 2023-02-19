//import { GraphQLServer } from 'graphql-yoga'
import { GraphQLServer } from 'graphql-yoga'


//  Type definitions {schema}

const typeDefs = `
    type Query {
        hello: String!
    }
`

// Resolvers

const resolvers = {
    Query: {
        hello() {
            return 'This is my firs query!'
        }
    }
}



const server =  GraphQLServer({
    typeDefs,
    resolvers,
})

server.start(() => {
    console.log('The server is up')
})



