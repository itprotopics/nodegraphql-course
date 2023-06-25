

const Category = {
  products: ({ id: categoryId }, { filter }, { products, reviews }) => {

    const categoryProducts = products.filter(p => p.categoryId === categoryId);
    let filteredCategoryProducts = categoryProducts;

    if (filter) {
      const { onSale, avgRating } = filter;

      if (onSale === true) {
        filteredCategoryProducts = filteredCategoryProducts.filter((product) => {
          return product.onSale;
        });
      }

      if ([1, 2, 3, 4, 5].includes(avgRating)) {

        filteredCategoryProducts = filteredCategoryProducts.filter((product) => {
          let sumRating = 0;
          let numReviews = 0;
          reviews.forEach((review) => {
            if (review.productId === product.id) {
              sumRating = sumRating + review.rating;
              numReviews = numReviews + 1;
            }
          });
          const avgProductRating = sumRating / numReviews;

          return avgProductRating > avgRating;
        });
      }



    }
    return filteredCategoryProducts;
  }
};

export {
  Category,
};