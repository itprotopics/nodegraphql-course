
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


    products: (parents, {filter}, {products, reviews}) => {
        let filteredProducts = products;

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
                    reviews.forEach((review) => {
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

    product: (parents, {id}, {products}) => {
        return products.find(p => p.id === id);
    },

    categories: (parents, args, {categories}) => categories,

    category: (parents, {id}, {categories}) => {
        return categories.find(c => c.id === id);
    }
};

export {
    Query
}

