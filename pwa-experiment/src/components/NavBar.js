import React from "react";
import { SideNav, SideNavItem, Button } from "react-materialize";
import { Link } from "react-router";
import "../css/NavBar.css";
import back from "../img/back.jpg";
import dog from "../img/dog.jpg";

function NavBar(props) {
  return (
    <div>
      <SideNav
        trigger={
          <div className="navbar-background">
            <div className="navbar-button">
              <Button floating style={{ position: "fixed" }} icon="menu" />
            </div>
          </div>
        }
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
        <Link to="/services">
          <SideNavItem icon="work">Services</SideNavItem>
        </Link>
        <Link to="/contacts">
          <SideNavItem icon="contacts">Contact</SideNavItem>
        </Link>
        <SideNavItem divider />
        <SideNavItem subheader>Crie seu App</SideNavItem>
        <SideNavItem>Site & Aplicativo</SideNavItem>
      </SideNav>
      <Button
        floating
        fab="horizontal"
        icon="mode_edit"
        className="red"
        large
        style={{ bottom: "45px", right: "24px" }}
      >
        <Button floating icon="insert_chart" className="red" />
        <Button floating icon="format_quote" className="yellow darken-1" />
        <Button floating icon="publish" className="green" />
        <Button floating icon="attach_file" className="blue" />
      </Button>
    </div>
  );
}

export default NavBar;
