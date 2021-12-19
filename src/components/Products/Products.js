import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { connect } from "react-redux";
import { Col, Row } from "react-bootstrap";

import "./products.scss";

// import { updateActiveCategory } from "../../store/store";

function Products(props) {
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
          props.myStore.products
            .filter((item) => {
              return item.category === props.myStore.activeCategory.name;
            })
            .map((item) => {
              return (
                <Col>
                  <Card sx={{ maxWidth: 345 }} className="card">
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
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Add To Cart</Button>
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
});

export default connect(mapStateToProps)(Products);
