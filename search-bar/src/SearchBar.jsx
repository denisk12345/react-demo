import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  handleChangeFilter(event) {
    this.props.handleChangeFilter(event.target.value);
  }

  handleChangeStock(event) {
    this.props.handleChangeStock(event.target.checked);
  }

  render() {
    return (
      <div>
        <input
          type="input"
          onChange={e => this.handleChangeFilter(e)}
          value={this.props.filterText}
        />
        <input
          type="checkbox"
          onChange={this.handleChangeStock.bind(this)}
          value={this.props.isInStock}
        />
      </div>
    );
  }
}

export default SearchBar;
