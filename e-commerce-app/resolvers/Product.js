

const Product = {
    category: ({categoryId}, args, {categories}) => {
        return categories.find(c => c.id === categoryId);
    },
    reviews: ({id}, args, {reviews}) => {
        return reviews.filter(review => review.productId === id);
    }
};

export {
    Product,
};