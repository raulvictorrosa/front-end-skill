import React, { Component } from "react";
import Chip from "./Chip.js";

class Chips extends Component {
  render() {
    return (
      <>
        <h3>Chips</h3>
        <div className="chips">
          <Chip>Chip 1</Chip>
          <Chip avatar="https://image.flaticon.com/icons/svg/206/206885.svg">
            Swat
          </Chip>
          <Chip avatar="https://image.flaticon.com/icons/svg/206/206880.svg">
            Astronaut
          </Chip>
          <Chip avatar="https://image.flaticon.com/icons/svg/206/206875.svg">
            Doctor
          </Chip>
          <Chip avatar="https://image.flaticon.com/icons/svg/206/206895.svg">
            Diver
          </Chip>
        </div>
      </>
    );
  }
}

export default Chips;
