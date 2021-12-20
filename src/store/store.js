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
