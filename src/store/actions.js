import axios from "axios";

export const getCategories = (url) => (dispatch) => {
  return axios.get(url).then((res) => {
    dispatch(actualCategoriesData(res.data));
  });
};

export const getProducts = (url) => (dispatch) => {
  return axios.get(url).then((res) => {
    dispatch(actualProductsData(res.data));
  });
};

export const updateProducts = (url, data) => (dispatch) => {
  return axios.put(url, data).then((res) => {
    dispatch(actualProductsData(res.data));
  });
};

function actualCategoriesData(data) {
  return {
    type: "GET-CATEGORIES",
    payload: data,
  };
}

function actualProductsData(data) {
  return {
    type: "GET-PRODUCTS",
    payload: data,
  };
}
