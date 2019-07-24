import React, { Component } from "react";
import Slider from "react-slick";
import Container from "@material-ui/core/Container";
import Barcelona from "../assets/Barcelona.jpg";
import Athens from "../assets/Athens.jpg";
import Lisbona from "../assets/Lisbona.jpg";
import Amsterdam from "../assets/Amsterdam.jpg";
import Berlin from "../assets/Berlin.jpg";
import Budapest from "../assets/Budapest.jpg";
import Madrid from "../assets/Madrid.jpg";
import Moscow from "../assets/Moscow.jpg";
import Porto from "../assets/Porto.jpg";
import Prague from "../assets/Prague.jpg";
import Torino from "../assets/Torino.jpg";
import Venezia from "../assets/Venezia.jpg";

class SlickSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <div>
        <Slider {...settings} className="container">
          <div className="container landing-slider">
            <div className="row">
              <div className="col">
                <img className="landing-pic" src={Amsterdam} alt="Amsterdam" />
              </div>
              <div className="col ">
                <img className="landing-pic" src={Athens} alt="Barcelona" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <img className="landing-pic" src={Barcelona} alt="Barcelona" />
              </div>
              <div className="col">
                <img className="landing-pic" src={Berlin} alt="Berlin" />
              </div>
            </div>
          </div>
          <div className="container  landing-slider">
            <div className="row">
              <div className="col">
                <img className="landing-pic" src={Budapest} alt="Copenhagen" />
              </div>
              <div className="col">
                <img className="landing-pic" src={Lisbona} alt="Lisbona" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <img className="landing-pic" src={Madrid} alt="Madrid" />
              </div>
              <div className="col">
                <img className="landing-pic" src={Venezia} alt="Venezia" />
              </div>
            </div>
          </div>
          <div>
            <div className="container  landing-slider">
              <div className="row">
                <div className="col">
                  <img className="landing-pic" src={Porto} alt="Porto" />
                </div>
                <div className="col">
                  <img className="landing-pic" src={Prague} alt="Prague" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <img className="landing-pic" src={Moscow} alt="Moscow" />
                </div>
                <div className="col">
                  <img className="landing-pic" src={Torino} alt="Torino" />{" "}
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default SlickSlider;

// render() {
//   const settings = {
//     className: "center",
//     centerMode: true,
//     infinite: true,
//     centerPadding: "60px",
//     slidesToShow: 1,
//     speed: 500,
//     rows: 2,
//     slidesPerRow: 2
//   };
//   return (
//     <div className="my-slider">
//       <h5>Multiple Rows</h5>
//       <Slider {...settings}>
//         <div className="carusel-pic">
//           <img src={Amsterdam} alt="" />
//         </div>
//         <div className="carusel-pic">
//           <img src={Athens} alt="" />
//         </div>
//         <div className="carusel-pic">
//           <img src={Barcelona} alt="" />
//         </div>
//         <div className="carusel-pic">
//           <img src={Berlin} alt="" />
//         </div>
//         <div className="carusel-pic">
//           <img src={Budapest} alt="" />
//         </div>
//         <div className="carusel-pic">
//           <img src={Lisbona} alt="" />
//         </div>
//         <div className="carusel-pic">
//           <img src={Madrid} alt="" />
//         </div>
//         <div className="carusel-pic">
//           <img src={Moscow} alt="" />
//         </div>
//         <div className="carusel-pic">
//           <img src={Porto} alt="" />
//         </div>
//         <div className="carusel-pic">
//           <img src={Prague} alt="" />
//         </div>
//         <div className="carusel-pic">
//           <img src={Venezia} alt="" />
//         </div>
//         <div className="carusel-pic">
//           <img src={Torino} alt="" />
//         </div>
//       </Slider>
//     </div>
//   );
// }
// }
