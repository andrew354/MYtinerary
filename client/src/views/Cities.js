import React, { Component } from "react";
import { connect } from "react-redux";
import { getCities } from "../actions/cityActions";
import PropTypes from "prop-types";
import CityFilter from "../components/CityFilter";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import { Switch } from "@material-ui/core";

class Cities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citiesFiltered: [],
      search: ""
    };
  }

  componentDidMount() {
    this.props.getCities();
  }

  filterInput = text => {
    // console.log(text);

    this.setState({
      search: text
    });
  };

  filterCities = () => {
    let citiesFiltered = this.props.city.cities.filter(city => {
      let cityName = city.city.toLowerCase();

      return cityName.includes(this.state.search.toLowerCase());
    });
    this.setState({
      citiesFiltered
    });
    return citiesFiltered;
  };

  render() {
    let citiesFiltered = this.props.city.cities.filter(city => {
      let cityName = city.city.toLowerCase();

      return cityName.includes(this.state.search.toLowerCase());
    });
    // const { cities } = this.props.city;
    return (
      <div className="marginTopLogo container">
        <h4>Cities</h4>
        <CityFilter onChange={this.filterInput} />
        {citiesFiltered.map(city => {
          return (
            <Card key={city._id} className="card">
              <Link to={"/itinerary/" + city._id}>
                <CardActionArea>
                  <CardMedia
                    className="media"
                    image={city.cityPic}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {city.city}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {city.country}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    );
  }
}

Cities.propTypes = {
  getCities: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  city: PropTypes.object.isRequired
};

// we use city because that's how we called the reducer in the index reducer
const mapStateToProps = state => ({
  city: state.city,
  loading: state.loading
});

export default connect(
  mapStateToProps,
  { getCities }
)(Cities);
