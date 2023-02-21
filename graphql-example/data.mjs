export const root = {
    products: [
        {
            id: 'redshoe',
            description: 'Red Shoe',
            price: 42.12,
        },
        {
            id: 'bluejean',
            description: 'Blue Jeans',
            price: 55.55,
        }

    ],

    orders: [
        {
            date: '2005-05-05',
            subtotal: 90.22,
            items: [
                {
                    product: {
                        id: 'readshoe',
                        description: 'Old Red shoe',
                        price: 45.11
                    },
                    quantity: 2,
                }
            ]
        }
    ]
}