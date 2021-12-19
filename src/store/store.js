let initialState = {
  categories: [
    {
      name: "Electronics",
      description: "Modern and Styled electronics",
    },
    {
      name: "Phones",
      description: "Discover the last released mobiles",
    },
  ],
  products: [
    {
      name: "LG LED Smart TV",
      description: "43 inch",
      category: "Electronics",
      price: 500,
      inventoryCount: 40,
      img: "https://www.lg.com/eg_en/images/tvs/md07526146/gallery/D-2.jpg",
    },
    {
      name: "PS5",
      description: "Limited Edition",
      category: "Electronics",
      price: 750,
      inventoryCount: 13,
      img: "https://7yatak.net/wp-content/uploads/2021/06/PlayStation-5-pro-2-2.jpg",
    },
    {
      name: "IPhone 13 Pro Max",
      description: "Limited Edition",
      category: "Phones",
      price: 1250,
      inventoryCount: 100,
      img: "https://phoneslab.net/oman/wp-content/uploads/sites/10/2021/09/max4-600x600.jpg",
    },
    {
      name: "Samsung Galaxy S20 Ultra",
      description: "White ",
      category: "Phones",
      price: 1000,
      inventoryCount: 80,
      img: "https://www.devestore.com/wp-content/uploads/2021/05/galaxy-s20-ultra-cloud-white.jpg",
    },
  ],
  activeCategory: null,
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "update-activeCategory":
      return { ...state, activeCategory: payload };

    default:
      return state;
  }
};

export const updateActiveCategory = (category) => {
  return {
    type: "update-activeCategory",
    payload: category,
  };
};
