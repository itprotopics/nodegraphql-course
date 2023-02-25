import { ApolloServer } from 'apollo-server';
import { connect , mongoose} from 'mongoose';



const MONGODB = "mongodb+srv://alavezman:lGNBkm16Aw22TnCA@cluster0.8i3kir6.mongodb.net/?retryWrites=true&w=majority";

import  {typeDefs}  from "./graphql/typeDefs.js";
import  {resolvers}  from "./graphql/resolvers.js";

const server = new ApolloServer(
    {
        typeDefs,
        resolvers
    }
);




mongoose.set('strictQuery', false);

connect( MONGODB, {useNewUrlParser: true})
    .then(() => {
        console.log("Mongo conection successful");
        return server.listen({port: 5000});
    })
    .then( (res) => {
        console.log(`Server is running at ${res.url}`);
    });

