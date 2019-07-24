import React, { Component } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getActivities } from "../actions/activityActions";

class Activity extends Component {
  componentDidMount() {
    this.props.getActivities(this.props.itineraryId);
  }
  render() {
    console.log(this.props.activities.activities);
    const activity = this.props.activities.activities;
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div>
        <div className="marginTopLogo">
          {activity.map(activity => {
            return <div key={activity._id}>{activity.title}</div>;
          })}
        </div>

        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
Activity.propTypes = {
  getActivities: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  activities: PropTypes.object.isRequired
};

// we use city because that's how we called the reducer in the index reducer
const mapStateToProps = state => ({
  activities: state.activity
  //uguale al itineraryReducer, è l'object , index.js combineReducer deve chiamarsi allo stess modo
});

export default connect(
  mapStateToProps,
  { getActivities }
)(Activity);
// export default Activity;
