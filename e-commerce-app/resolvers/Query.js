
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


    products: (parents, {filter}, {db}) => {
        let filteredProducts = db.products;

        if (filter) {
            const { onSale, avgRating } = filter;
            if (onSale === true ) {
                filteredProducts = filteredProducts.filter((product) => {
                    return product.onSale;
                });
            }
            if ([1,2,3,4,5].includes(avgRating)) {

                filteredProducts = filteredProducts.filter((product) => {
                    let sumRating = 0;
                    let numReviews = 0;
                    db.reviews.forEach((review) => {
                        if (review.productId === product.id ) {
                            sumRating = sumRating + review.rating;
                            numReviews = numReviews + 1;
                        }
                    });
                    const avgProductRating = sumRating / numReviews;

                    return avgProductRating > avgRating;
                });
            }
        }
        return filteredProducts;
    },

    product: (parents, {id}, {db}) => {
        return db.products.find(p => p.id === id);
    },

    categories: (parents, args, {db}) => db.categories,

    category: (parents, {id}, {db}) => {
        return db.categories.find(c => c.id === id);
    }
};

export {
    Query
}

