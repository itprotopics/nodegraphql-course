
import { v4 as uuidv4 } from "uuid";

const Mutation = {
    addCategory: (parent, {input}, {categories}) => {
        const {name} = input;
        const newCategory = {
            id: uuidv4(),
            name
        }
        categories.push(newCategory);
        return newCategory;
    },
    addProduct: (parent, {input}, {products}) => {
        const newProduct = input;
        newProduct.id = uuidv4()
        
        products.push(newProduct);
        return newProduct;
    } ,
    addReview: (parent, {input}, {reviews}) => {

        const newReview =  input;
        newReview.id = uuidv4();
        reviews.push(newReview);
        return newReview;
    }
         
        

} 

export {
    Mutation
}
