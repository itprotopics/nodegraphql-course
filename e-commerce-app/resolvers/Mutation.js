
import { v4 as uuidv4 } from "uuid";

const Mutation = {
    addCategory: (parent, {input}, {db}) => {
        const {name} = input;
        const newCategory = {
            id: uuidv4(),
            name
        }
        db.categories.push(newCategory);
        return newCategory;
    },
    addProduct: (parent, {input}, {db}) => {
        const newProduct = input;
        newProduct.id = uuidv4()
        
        db.products.push(newProduct);
        return newProduct;
    } ,
    addReview: (parent, {input}, {db}) => {

        const newReview =  input;
        newReview.id = uuidv4();
        db.reviews.push(newReview);
        return newReview;
    }
         
        

} 

export {
    Mutation
}
