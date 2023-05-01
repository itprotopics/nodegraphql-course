import { ApolloServer, gql} from "apollo-server";
import { typeDefs} from "./schema.js";
import { Product  } from "./resolvers/Product.js";
import { Query } from "./resolvers/Query.js";
import { Category } from "./resolvers/Category.js";


const server = new ApolloServer(
    {
        typeDefs,
        resolvers: {
          Product,
          Query,
          Category
        },
        context: {
          sayHello: () => console.log("Hello my friends"),
        }
    }
);

server.listen().then(({ url })  => {
    console.log("Server is ready at " + url );
} );

