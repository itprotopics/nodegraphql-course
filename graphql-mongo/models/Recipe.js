import { model, Schema } from 'mongoose';

const recipeSchema = new Schema({
    name: String,
    description: String,
    createAt: String,
    thumsUp: Number,
    thumbsDown: Number
});

export const  Recipe = model('Recipe', recipeSchema);