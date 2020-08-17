import React, { Component } from "react";
import CardWithImage from "./CardWithImage";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
    alert(dish.name);
  }

  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }
  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div
          key={dish.id}
          className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 m-2"
        >
          <CardWithImage
            onClick={() => this.onDishSelect(dish)}
            imgSource={dish.image}
            alt={dish.label}
            title={dish.name}
            subtitle={dish.category}
            cardText={dish.description}
            price={dish.price}
            rating={dish.rating}
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
