import { gql } from 'apollo-server'

export const typeDefs = gql`
    type Query {
        checkApiStatus: ApiStatus
    }

    type Mutation {
        testMutations(input: String): Test
    }

    type ApiStatus {
        status: String        
    }

    type Test {
        status: String
    }

    type Query {
        products: [Product]
        orders: [Order]
    }

    type Product {
        id: ID!
        description: String!
        reviews: [Review]
        price: Float!
    }

    type Review {
        rating: Int!
        comment: String
    }

    type Order {
        date: String!
        subtotal: Float!
        items: [OrderItem]
    }

    type OrderItem {
        product: Product!
        quantity: Int!
    }
    
`

