import { gql } from "apollo-server";


// Scalar types: String, Int, Float, Boolean

export const typeDefs = gql`
    type Query {
        hello: String!
        numberOfAnimals: Int
        price: Float
        isCool: Boolean
    }



`;