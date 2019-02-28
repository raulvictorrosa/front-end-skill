import React, { Component } from "react";
import Card from "./Card.js";

class Cards extends Component {
  render() {
    return (
      <>
        <h3>Cards</h3>
        <div className="cards">
          <Card
            title="Proin eget tortor risus"
            image={require(`../images/image1.jpg`)}
          >
            Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut
            libero malesuada feugiat.
          </Card>
          <Card
            title="Sed porttitor lectus nibh"
            image={require(`../images/image2.jpg`)}
          >
            Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui
            posuere blandit.
          </Card>
          <Card title="Quisque velit nisi">
            Quisque velit nisi, pretium ut lacinia in, elementum id enim.
            Quisque velit nisi, pretium ut lacinia in, elementum id enim.
          </Card>
          <Card
            title="Vivamus magna justo"
            image={require(`../images/image3.jpg`)}
          >
            Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit,
            eget tincidunt nibh pulvinar a.
          </Card>
          <Card
            title="Sed porttitor lectus nibh"
            image={require(`../images/image4.jpg`)}
          >
            Donec rutrum congue leo eget malesuada. Donec rutrum congue leo eget
            malesuada.
          </Card>
          <Card
            title="Praesent sapien massa"
            image={require(`../images/image5.jpg`)}
          >
            Curabitur aliquet quam id dui posuere blandit. Curabitur aliquet
            quam id dui posuere blandit.
          </Card>
          <Card
            title="Vivamus suscipit"
            image={require(`../images/image6.jpg`)}
          >
            Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit
            nisi, pretium ut lacinia in, elementum id enim.
          </Card>
        </div>
      </>
    );
  }
}

export default Cards;
