import React from "react";

import { useSelector } from "react-redux";
import { Container, Grid, TextField, Button } from "@mui/material";

import "./cart.scss";

export default function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <Container maxWidth="sm" className="cartContainer">
      <h1>Order Summary</h1>
      {cart.map((item) => (
        <div className="cartItem">
          <span>{item.name}</span>
          <span>$ {item.price}</span>
        </div>
      ))}
      <hr />
      <div className="totalPrice">
        <span>Total</span>
        <span>
          $ {cart.length === 0 && 0}
          {cart.length > 0 &&
            cart
              .map((item) => item.price)
              .reduce((accumulator, current) => {
                accumulator = accumulator + current;
                return accumulator;
              })}
        </span>
      </div>
      <hr />
      <Grid container spacing={2} className="grid">
        <Grid item xs={6} className="gridItem">
          <h2>Billing Address</h2>
          <TextField label="Full Name" type="text" variant="standard" />
          <TextField label="Address" type="text" variant="standard" />
          <TextField label="City" type="text" variant="standard" />
          <TextField label="State" type="text" variant="standard" />
          <TextField label="Zip" type="text" variant="standard" />
        </Grid>
        <Grid item xs={6} className="gridItem">
          <h2>Payment Details</h2>
          <TextField label="Credit Card #" type="text" variant="standard" />
          <TextField
            type="date"
            helperText="Expiration Date"
            variant="standard"
          />
          <TextField label="CVV" type="text" variant="standard" />
        </Grid>
      </Grid>

      <Button variant="contained" color="success" id="button">
        Place Your Order
      </Button>
    </Container>
  );
}
