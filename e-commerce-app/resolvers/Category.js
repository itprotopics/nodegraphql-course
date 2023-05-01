import { products, categories } from "../db.js";

const Category = {
    products: (parent, args, context) => {
      return products.filter(p => p.categoryId === parent.id);
    }
};

export {
    Category,
};