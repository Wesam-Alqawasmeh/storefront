let initialState = [];

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "INCREMENT":
      return [...state, payload];

    case "DECREMENT":
      let newCart = [];
      state.map((item) => {
        if (item.id !== payload.id) {
          // console.log(item);
          newCart.push(item);
        }
      });
      return newCart;

    default:
      return state;
  }
};

export const increment = (item) => {
  return {
    type: "INCREMENT",
    payload: item,
  };
};

export const decrement = (item) => {
  return {
    type: "DECREMENT",
    payload: item,
  };
};
