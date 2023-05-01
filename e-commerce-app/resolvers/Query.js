import { products, categories } from "../db.js";

const Query = {
    hello: (parents, args, context) => {
        return ["Hello", "my", "friend"];
        // return null;
    },
    numberOfAnimals: () => {
        return 55;
    },
    price: (parents, args, context) => {
        return 2343.444;
    },
    isCool: (parents, args, context) => {
        return false;
    },
    products: (parents, args, context) => products,
    product: (parents, args, context) => {
        const { id } = args;
        return products.find(p => p.id === id);
    },
    categories: (parents, args, context) => categories,
    category: (parents, args, context) => {
        const { id } = args;
        return categories.find(c => c.id === id);
    }
};

export {
    Query
}

