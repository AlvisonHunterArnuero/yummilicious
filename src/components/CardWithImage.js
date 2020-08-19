/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class CardWithImage extends Component {
  constructor(props) {
    super(props);
  }

  handleSelectedDish(dishSelected) {
    console.log("Desde el child te mando esto: ", dishSelected);
    return this.props.onDishSelection(dishSelected);
  }

  render() {
    return (
      <div>
        {
          <div className="image-flip">
            <div className="mainflip flip-0">
              <div className="frontside">
                <div className="card">
                  <div className="card-body text-center">
                    <p>
                      <img
                        className="img-fluid"
                        src={this.props.imgSource}
                        alt={this.props.name}
                      />
                    </p>
                    <h4 className="card-title text-primary menu-title">
                      {this.props.title}
                    </h4>
                    <p className="card-text text-uppercase small">
                      <b className="text-info">CATEGORY: </b>
                      {this.props.subtitle}
                    </p>
                    <h3 className="lead text-muted text-uppercase">
                      {this.props.rating}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="backside">
                <div className="card">
                  <div className="card-body text-center mt-4">
                    <h4 className="display-3 card-title">
                      $ {this.props.price}
                    </h4>
                    <p className="card-text">{this.props.cardText}</p>
                    <button
                      onClick={() => this.handleSelectedDish(this.props)}
                      className="btn btn-outline-primary btn-lg"
                    >
                      Select this dish
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default CardWithImage;
