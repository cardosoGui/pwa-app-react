import React from "react";
import { Button, Icon, SideNav, SideNavItem } from "react-materialize";
import { Link } from "react-router";

function Header(props) {
  return (
    <div>
      <Button waves="light">
        <Icon left>thumb_up</Icon>
      </Button>
      <h2>{props.title}</h2>
      <SideNav
        trigger={<Button icon="format_quote" />}
        options={{ closeOnClick: true }}
      >
        <SideNavItem
          userView
          user={{
            background: "img/office.jpg",
            image: "img/yuna.jpg",
            name: "John Doe",
            email: "jdandturk@gmail.com"
          }}
        />
        <SideNavItem href="#!icon" icon="cloud">
          First Link With Icon
        </SideNavItem>
        <Link to="/about">
          <SideNavItem>Second Link</SideNavItem>
        </Link>
        <SideNavItem divider />
        <SideNavItem subheader>Subheader</SideNavItem>
        <SideNavItem waves href="#!third">
          Third Link With Waves
        </SideNavItem>
      </SideNav>
    </div>
  );
}

export default Header;
