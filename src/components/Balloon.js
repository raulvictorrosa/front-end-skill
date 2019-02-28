import React, { Component } from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("root");

const FunBalloon = props => {
  const {
    isHidden,
    text,
    positions: { x, y }
  } = props;

  return (
    <div
      className="balloon"
      style={{
        display: isHidden ? "none" : "block",
        left: x,
        top: y
      }}
    >
      {text}
    </div>
  );
};

class Balloon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: true,
      mouse: {
        x: 0,
        y: 0
      }
    };

    this.el = document.createElement("div");
    this.toogleVisibility = this.toogleVisibility.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  componentDidMount() {
    root.appendChild(this.el);
  }

  componentDidUpdate() {
    this.renderFunBalloon();
  }

  renderFunBalloon() {
    const { isHidden, mouse } = this.state;
    const { children } = this.props;

    ReactDOM.render(
      <FunBalloon isHidden={isHidden} positions={mouse} text={children} />,
      this.el
    );
  }

  toogleVisibility() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  handleMouseMove(event) {
    this.setState({
      mouse: {
        x: event.pageX + 5,
        y: event.pageY + 5
      }
    });
  }

  render() {
    const { mouse } = this.state;
    const { referral } = this.props;

    return (
      <span style={{ display: "inline-block" }}>
        <span
          style={{ display: "inline-block" }}
          onMouseEnter={this.toogleVisibility}
          onMouseLeave={this.toogleVisibility}
          onMouseMove={this.handleMouseMove}
        >
          {referral}
        </span>
      </span>
    );
  }
}

export default Balloon;
