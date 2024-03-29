import { ApolloServer, gql} from "apollo-server";
import { typeDefs} from "./schema.js";
import { Product  } from "./resolvers/Product.js";
import { Mutation  } from "./resolvers/Mutation.js";
import { Query } from "./resolvers/Query.js";
import { Category } from "./resolvers/Category.js";
import { db } from "./db.js";


const server = new ApolloServer(
    {
        typeDefs,
        resolvers: {
          Query,
          Mutation,   
          Product,
          Category
        },
        context: {
          db
        }
    }
);

server.listen().then(({ url })  => {
    console.log("Server is ready at " + url );
} );

