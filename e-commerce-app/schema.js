
import  {ApolloServer, gql} from "apollo-server";

const typeDefs = gql`
    type Query {
        hello: [String!]!
        numberOfAnimals: Int
        price: Float
        isCool: Boolean
        products(filter: ProductsFilterInput): [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category
    }

    type Product {
        id: ID!
        name: String!
        description: String!
        quantity: Int!
        price: Float!
        image: String!
        onSale: Boolean! 
        category: Category
        reviews: [Review]!
    }

    type Mutation {
        addCategory(input: AddCategoryinput!): Category!
        addProduct(input: AddProductInput!): Product!
        addReview(input: AddReviewInput!): Review!
    }

    type Category {
      id: ID!
      name: String!
      products(filter: ProductsFilterInput): [Product!]!
    }

    type Review {
        id: ID!
        date: String!
        title: String!
        comment: String!
        rating: Int!
    }

    input ProductsFilterInput {
        onSale: Boolean
        avgRating: Int!
    }

    input AddCategoryinput  {
        name: String!
    }

    input AddProductInput {
        id: ID!
        name: String!
        description: String!
        quantity: Int!
        price: Float!
        image: String!
        onSale: Boolean! 
        categoryId: String!
    }

    input AddReviewInput {
      id: ID
      date: String!
      title: String!
      comment: String!
      rating: Int!
      productId: String!
    }

`

export {
    typeDefs,
}


