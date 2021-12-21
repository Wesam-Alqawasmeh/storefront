import React, { useEffect } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { connect } from "react-redux";
import { Col, Row } from "react-bootstrap";

import "./products.scss";

import { increment } from "../../store/cart";
import { decreaseInStock } from "../../store/products";
import { getProducts, updateProducts } from "../../store/actions";

import { v4 as uuid } from "uuid";

function Products(props) {
  useEffect(() => {
    props.getProducts("https://wesam-storefront.herokuapp.com/products");
  }, []);
  return (
    <div>
      {props.myStore.activeCategory && (
        <div className="activeCategory">
          <h2>{props.myStore.activeCategory.name}</h2>
          <p>{props.myStore.activeCategory.description}</p>
        </div>
      )}
      <Row xs={3} style={{ width: "100%" }}>
        {props.myStore.activeCategory &&
          props.products
            .filter((item) => {
              return item.category === props.myStore.activeCategory.name;
            })
            .map((item, index) => {
              return (
                <Col key={index}>
                  <Card sx={{ maxWidth: 345 }} className="card" key={index}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.img}
                      alt="green iguana"
                      className="cardImg"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="white">
                        Description: {item.description}
                        <br />
                        Price: {item.price}$
                        <br />
                        In Stock: {item.inStock}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        onClick={() => {
                          if (item.inStock > 0) {
                            props.increment({
                              name: item.name,
                              id: uuid(),
                              price: item.price,
                            });
                          }
                          props.decreaseInStock(item);
                          // let data = {
                          //   name: item.name,
                          //   description: item.description,
                          //   category: item.category,
                          //   price: item.price,
                          //   inStock: item.inStock > 0 ? item.inStock - 1 : 0,
                          //   img: item.img,
                          // };

                          // props.updateProducts(
                          //   `https://wesam-storefront.herokuapp.com/products/${item.id}`,
                          //   data
                          // );
                        }}
                      >
                        Add To Cart
                      </Button>
                      <Button size="small">View Details</Button>
                    </CardActions>
                  </Card>
                </Col>
              );
            })}
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => ({
  myStore: state.myStore,
  cart: state.cart,
  products: state.products,
});

const mapDispatchToProps = {
  increment,
  decreaseInStock,
  updateProducts,
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
