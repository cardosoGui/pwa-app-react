import React from "react";
import { Row, Col, Card, CardTitle, Slide, Slider } from "react-materialize";

import woman_phone from "../img/Cards/woman_phone.jpg";
import man_phone from "../img/Cards/man_phone.jpg";
import "../css/Home.css";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-body">
        <Slider>
          <Slide
            // src="http://lorempixel.com/580/250/nature/1"
            title="This is our big Tagline!"
          >
            Here's our small slogan.
          </Slide>
          <Slide
            // src="http://lorempixel.com/580/250/nature/2"
            title="Left aligned Caption"
            placement="left"
          >
            Here's our small slogan.
          </Slide>
          <Slide
            // src="http://lorempixel.com/580/250/nature/3"
            title="Right aligned Caption"
            placement="right"
          >
            Here's our small slogan.
          </Slide>
        </Slider>
        <Row className="home-container">
          <div className="home-card">
            <Card
              className="larger"
              header={<CardTitle image={woman_phone}>Bem Vindo</CardTitle>}
            >
              Texto de apresentação, loren ipsum
            </Card>
          </div>
        </Row>
        <Row>
          <Col m={6} s={12}>
            <Card
              header={<CardTitle reveal image={man_phone} waves="light" />}
              title="Todos os lugares"
              reveal={
                <p>
                  Here is some more information about this product that is only
                  revealed once clicked on.
                </p>
              }
            />
          </Col>
          <Col m={6} s={12}>
            <Card
              header={<CardTitle reveal image={man_phone} waves="light" />}
              title="Todos os lugares"
              reveal={
                <p>
                  Here is some more information about this product that is only
                  revealed once clicked on.
                </p>
              }
            />
          </Col>
        </Row>
      </div>
    );
  }
}
