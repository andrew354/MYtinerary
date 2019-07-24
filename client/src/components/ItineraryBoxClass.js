import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Activity from "./Activity";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
const useStyles = theme => ({
  card: {
    width: 345,
    "margin-bottom": 10
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto"
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});
class ItineraryBoxClass extends Component {
  state = {
    expanded: ""
  };
  handleExpandClick = id => {
    console.log(id);
    if (this.state.expanded === id) {
      this.setState({ expanded: "" });
    } else {
      this.setState({ expanded: id });
    }
  };
  render() {
    const { classes } = this.props;
    const itinerary = this.props.itinerary;
    console.log(itinerary);
    return (
      <div className="container">
        <h3>Available MYtineraries</h3>
        {this.props.itinerary.map(itinerary => {
          return (
            <Card className={classes.card} key={itinerary._id}>
              <CardHeader
                avatar={
                  <Avatar aria-label="Recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="Settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={itinerary.title}
                subheader=""
              />
              <CardMedia
                className={classes.media}
                image={itinerary.itineraryPic}
                title=""
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <div className="myFlex">
                    <p>Likes: {itinerary.rating}</p>
                    <p>Hours: {itinerary.duration}</p>
                    <p>Price: {itinerary.price}</p>
                  </div>
                  <p>{itinerary.hashtag}</p>
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="Add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="Share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: this.state.expanded === itinerary._id
                  })}
                  onClick={() => this.handleExpandClick(itinerary._id)}
                  aria-expanded={this.state.expanded === itinerary._id}
                  aria-label="Show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse
                in={this.state.expanded === itinerary._id}
                timeout="auto"
                unmountOnExit
              >
                <CardContent>
                  <Activity itineraryId={itinerary._id} />
                </CardContent>
              </Collapse>
            </Card>
          );
        })}
      </div>
    );
  }
}
ItineraryBoxClass.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(useStyles)(ItineraryBoxClass);
