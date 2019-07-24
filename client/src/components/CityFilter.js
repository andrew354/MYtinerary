import React, { Component } from "react";
import PropTypes from "prop-types";

class CityFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityFilter: ""
    };
  }

  handleChange = e => {
    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          id="filter"
          onChange={this.handleChange}
          placeholder="Search by city name"
        />
      </div>
    );
  }
}

CityFilter.propTypes = {
  onChange: PropTypes.func
};
export default CityFilter;
