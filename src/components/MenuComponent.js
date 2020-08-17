import React, { Component } from "react";
import dishes from "../data/dishes";
import CardWithImage from "./CardWithImage";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: dishes,
    };
  }

  render() {
    const menu = this.state.dishes.map((dish) => {
      return (
        <div
          key={dish.id}
          className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-2"
        >
          <CardWithImage
            imgSource={dish.image}
            alt={dish.label}
            title={dish.name}
            subtitle={dish.category}
            cardText={dish.description}
            price={dish.price}
            btnCaption="ORDER THIS DISH"
          />
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
      </div>
    );
  }
}

export default Menu;
