import React from "react";
import { SideNav, SideNavItem, Row, Col, Button } from "react-materialize";
import { Link } from "react-router";
import "../css/NavBar.css";
import back from "../img/back.jpg";
import dog from "../img/dog.jpg";

function NavBar(props) {
  return (
    <div>
      <Row className="nav-bar-menu">
        <Col m={10}>
          <SideNav
            trigger={<Button icon="menu" />}
            options={{ closeOnClick: true }}
          >
            <SideNavItem
              userView
              user={{
                background: back,
                image: dog,
                name: "John Doe",
                email: "jdandturk@gmail.com"
              }}
            />
            <Link to="/">
              <SideNavItem icon="home">Home</SideNavItem>
            </Link>
            <Link to="/about">
              <SideNavItem icon="more">About</SideNavItem>
            </Link>
            <Link to="/about">
              <SideNavItem icon="work">Services</SideNavItem>
            </Link>
            <Link to="/about">
              <SideNavItem icon="contacts">Contact</SideNavItem>
            </Link>
            <SideNavItem divider />
            <SideNavItem subheader>Crie seu App</SideNavItem>
            <SideNavItem>Site & Aplicativo</SideNavItem>
          </SideNav>
        </Col>
        <Col m={2}>
          <div className="nav-bar-animation">animation</div>
        </Col>
      </Row>
    </div>
  );
}

export default NavBar;
