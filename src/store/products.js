let initialState = [
  {
    name: "LG LED Smart TV",
    description: "43 inch",
    category: "Electronics",
    price: 500,
    inStock: 40,
    img: "https://www.lg.com/eg_en/images/tvs/md07526146/gallery/D-2.jpg",
  },
  {
    name: "PS5",
    description: "Limited Edition",
    category: "Electronics",
    price: 750,
    inStock: 13,
    img: "https://7yatak.net/wp-content/uploads/2021/06/PlayStation-5-pro-2-2.jpg",
  },
  {
    name: "IPhone 13 Pro Max",
    description: "Limited Edition",
    category: "Phones",
    price: 1250,
    inStock: 100,
    img: "https://phoneslab.net/oman/wp-content/uploads/sites/10/2021/09/max4-600x600.jpg",
  },
  {
    name: "Samsung Galaxy S20 Ultra",
    description: "White ",
    category: "Phones",
    price: 1000,
    inStock: 80,
    img: "https://www.devestore.com/wp-content/uploads/2021/05/galaxy-s20-ultra-cloud-white.jpg",
  },
];

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "IncreaseInStock":
      return state.map((product) => {
        if (product.name === payload.name) {
          return {
            name: product.name,
            description: product.description,
            category: product.category,
            price: product.price,
            inStock: product.inStock + 1,
            img: product.img,
          };
        }

        return product;
      });

    case "DecreaseInStock":
      return state.map((product) => {
        if (product.name === payload.name) {
          return {
            name: product.name,
            description: product.description,
            category: product.category,
            price: product.price,
            inStock: product.inStock > 0 ? product.inStock - 1 : 0,
            img: product.img,
          };
        }

        return product;
      });

    default:
      return state;
  }
};

export const increaseInStock = (product) => {
  return {
    type: "IncreaseInStock",
    payload: product,
  };
};

export const decreaseInStock = (product) => {
  return {
    type: "DecreaseInStock",
    payload: product,
  };
};
