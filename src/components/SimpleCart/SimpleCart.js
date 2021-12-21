import React from "react";

import { connect } from "react-redux";

import { increaseInStock } from "../../store/products";
import { decrement } from "../../store/cart";
import { updateProducts } from "../../store/actions";

import "./simpleCart.scss";

function SimpleCart(props) {
  return (
    <>
      {props.cart.length > 0 && (
        <div id="cart-container">
          {props.cart.map((item, index) => {
            return (
              <>
                {item && (
                  <div className="items" key={index}>
                    <span style={{ width: "fit-content" }}>{item.name}</span>
                    <span
                      className="delete"
                      onClick={() => {
                        props.decrement(item);
                        props.increaseInStock(item);
                      }}
                    >
                      x
                    </span>
                  </div>
                )}
              </>
            );
          })}
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = { increaseInStock, decrement, updateProducts };

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
