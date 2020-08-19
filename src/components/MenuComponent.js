import React, { Component } from "react";
import CardWithImage from "./CardWithImage";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.onDishSelect = this.onDishSelect.bind(this);
    this.state = {
      selectedDish: null,
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  renderDish(dish) {
    if (dish !== null) {
      return (
        <>
          <div className="card shadow p-3 mb-5 bg-white rounded">
            <div className="card-header">Selected Dish(es)</div>
            <div className="table-responsive">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Dish</th>
                    <th scope="col">Name</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Tax</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      {" "}
                      <img
                        className="img-thumbnail"
                        src={this.state.selectedDish.imgSource}
                        alt={this.state.selectedDish.alt}
                      />
                    </th>
                    <td>{this.state.selectedDish.title}</td>
                    <td>${this.state.selectedDish.price}</td>
                    <td>
                      $
                      {(Number(this.state.selectedDish.price) * 0.15).toFixed(
                        2
                      )}
                    </td>
                    <td>
                      $
                      {(
                        Number(this.state.selectedDish.price) +
                        Number(this.state.selectedDish.price) * 0.15
                      ).toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      );
    } else return <div>Nothing has been selected yet.</div>;
  }
  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div
          key={dish.id}
          className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 m-2"
        >
          <CardWithImage
            onDishSelection={this.onDishSelect}
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
        <div className="row my-3 text-muted h4">
          <div className="col-12">
            {this.state.selectedDish &&
              this.renderDish(this.state.selectedDish)}
            {/* {JSON.stringify(this.state.selectedDish, null,2)} */}
          </div>
        </div>
        <div className="row border-bottom my-2 justify-content-between">
          <div className="col-12">
            <blockquote class="blockquote text-center">
              <h1 className="mb-0 text-danger menu-title">Yummilicious Menu</h1>
              <footer class="blockquote-footer">
                Best Quality Nicaraguan Restaurant with an{" "}
                <cite title="Source Title">Authentic Pinolero Taste</cite>
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="row justify-content-center">{menu}</div>
      </div>
    );
  }
}

export default Menu;
