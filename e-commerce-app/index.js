import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
    type Query {
        hello: String
        numberOfAnimals: Int
        price: Float
        isCool: Boolean
    }
`

const resolvers = {
    Query: {
        hello: () => {
            return "World";
        },
        numberOfAnimals: () => {
            return 55;
        },
        price: () => {
            return 2343.444;
        },
        isCool: () => {
            return false;
        }
    }
};

const server = new ApolloServer(
    {
        typeDefs,
        resolvers,
    }
);

server.listen().then(({ url })  => {
    console.log("Server is ready at " + url );
} );

