import {Recipe} from '../models/Recipe.js';

export const resolvers = {
    Query: {
        async recipe(_, {ID}) {
            return await Recipe.findById(ID);
        },
        async getRecipes(_, {amount}) {
            return await Recipe.find().sort({ createdAt: -1}).limit(amount);
        }
    },
    Mutation: {
        async createRecipe(_, {recipeInput: {name, description}}) {
            const createRecipe = new Recipe ({
                name: name,
                description: description,
                createAt: new Date().toISOString(),
                thumbsUp: 0,
                thumbsDown: 0
            });

            const res = await createRecipe.save();
            console.log(res._doc);
            return {
                id: res.id,
                ...res._doc
            };

        },
        async deleteRecipe(_, {ID}) {
            const wasDeleted = (await Recipe.deleteOne({_id: ID})).deleteCount;
            return wasDeleted;

        },

        async editRecipe(_, {ID, recipeInput: {name, description}}) {
            const wasEdited = (await Recipe.updateOne({_id: ID}, {name: name, description: description})).modifiedCount;
            return wasEdited;
        }

    }


}