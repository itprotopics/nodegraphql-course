<<<<<<< HEAD
import { message } from './myModule'

console.log(message)
=======
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



const server =  new GraphQLServer({
    typeDefs,
    resolvers,
})

server.start(() => {
    console.log('The server is up')
})



>>>>>>> e441dea6335fac2770a01aa4b4d2cca0051a2a50
