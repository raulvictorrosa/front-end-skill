import React, { Component } from "react";

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: ""
    };
  }

  handleSelect(event) {
    this.setState({ selectedOption: event.target.value });
  }

  render() {
    const { options, label } = this.props;

    return (
      <div className="dropdown">
        <div className="dropdown-group-label">
          <label className="dropdown-label-text" htmlFor="dropdownGroup">
            {label}
          </label>
        </div>
        <select
          className="dropdown-itens"
          id="dropdownGroup"
          onChange={e => this.handleSelect(e)}
        >
          <option defaultValue>Choose...</option>
          {options &&
            options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
        </select>
      </div>
    );
  }
}

export default Dropdown;
