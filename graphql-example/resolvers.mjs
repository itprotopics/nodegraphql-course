export const resolvers = {
    Query: {
        checkApiStatus: () => {
            return { status: 'The API is working correctly jajaja.'}
        }
    },

    Mutation: {
        testMutations: async () => {
            return {
                status: 'Mutations are working'
            }
        }        
    }

}