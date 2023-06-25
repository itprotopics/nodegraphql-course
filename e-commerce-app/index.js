import { ApolloServer, gql} from "apollo-server";
import { typeDefs} from "./schema.js";
import { Product  } from "./resolvers/Product.js";
import { Query } from "./resolvers/Query.js";
import { Category } from "./resolvers/Category.js";
import { categories, products, reviews } from "./db.js";


const server = new ApolloServer(
    {
        typeDefs,
        resolvers: {
          Product,
          Query,
          Category
        },
        context: {
          categories,
          products,
          reviews
        }
    }
);

server.listen().then(({ url })  => {
    console.log("Server is ready at " + url );
} );

