import React from "react";
import { Card, CardTitle, Slide, Slider } from "react-materialize";

import woman_phone from "../img/Cards/woman_phone.jpg";
import "../css/Home.css";

export default class Services extends React.Component {
  render() {
    return (
      <div className="home-body">
        <Slider>
          <Slide src="http://lorempixel.com/580/250/nature/1">
            <Card
              className="larger"
              header={<CardTitle image={woman_phone}>Bem Vindo</CardTitle>}
            />
          </Slide>
          <Slide
            src="http://lorempixel.com/580/250/nature/2"
            title="Left aligned Caption"
            placement="left"
          >
            Here's our small slogan.
          </Slide>
          <Slide
            src="http://lorempixel.com/580/250/nature/3"
            title="Right aligned Caption"
            placement="right"
          >
            Here's our small slogan.
          </Slide>
        </Slider>
      </div>
    );
  }
}
