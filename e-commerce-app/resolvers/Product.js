import { products, categories } from "../db.js";

const Product = {
    category: (parent, args, context) => {
        const sayHello = context.sayHello;
        sayHello();
        const categoryId = parent.categoryId;
        return categories.find(c => c.id === categoryId);
    }
};

export {
    Product,
};