import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import { connect } from "react-redux";

import { updateActiveCategory } from "../../store/store";

import { getCategories } from "../../store/actions";

import "./categories.scss";

function Categories(props) {
  useEffect(() => {
    props.getCategories("https://wesam-storefront.herokuapp.com/categories");
  }, []);
  return (
    <div className="categories">
      <h2>Browse our Categories</h2>
      <ButtonGroup variant="text" aria-label="text button group">
        {props.myStore.categories.map((item) => (
          <Button
            onClick={() => props.updateActiveCategory(item)}
            key={item.name}
          >
            {item.name}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}

const mapStateToProps = (state) => ({
  myStore: state.myStore,
});

const mapDispatchToProps = { updateActiveCategory, getCategories };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
