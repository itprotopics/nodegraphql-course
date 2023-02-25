import { makeExecutableSchema } from 'apollo-server';



export default makeExecutableSchema({
	typeDefs: typeDefs,
	resolvers: resolvers
});

