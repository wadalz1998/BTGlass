import React, { Component } from "react";
import model from "./model.jpg";
export default class Glass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      glass: [
        {
          id: 1,
          price: 30,
          name: "GUCCI G8850U",
          url: "./img/v1.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 2,
          price: 50,
          name: "GUCCI G8759H",
          url: "./img/v2.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 3,
          price: 30,
          name: "DIOR D6700HQ",
          url: "./img/v3.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 4,
          price: 70,
          name: "DIOR D6005U",
          url: "./img/v4.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 5,
          price: 40,
          name: "PRADA P8750",
          url: "./img/v5.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 6,
          price: 60,
          name: "PRADA P9700",
          url: "./img/v6.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 7,
          price: 80,
          name: "FENDI F8750",
          url: "./img/v7.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 8,
          price: 100,
          name: "FENDI F8500",
          url: "./img/v8.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        {
          id: 9,
          price: 60,
          name: "FENDI F4300",
          url: "./img/v9.png",
          desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
      ],
      urlCurrent: "./img/v1.png",
    };
  }
  changeGlass = (urlImg) => {
    this.setState({
      urlCurrent:urlImg,
    });
  };
  renderGlass = (data) => {
    // const listGlass = data.
    return (
      <>
        {data.glass.map((items) => {
          return (
            <a
              href="#"
              onClick={() => {
                this.changeGlass(items.url);
              }}
            >
              <img key={items.id} src={items.url} alt="" />;
            </a>
          );
        })}
      </>
    );
  };

  render() {
    return (
      <div style={{ position: "relative" }}>
        <div className="Home"></div>
        <div className="model_img">
          <div className="custom__model">
            <div
              className="card"
              style={{ width: "18rem", position: "relative" }}
            >
              <img src={model} alt="" />
              <div className="custom__glass">
                <img src={this.state.urlCurrent} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="glass">{this.renderGlass(this.state)}</div>
      </div>
    );
  }
}
