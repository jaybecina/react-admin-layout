import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(NavLink)`
  display: flex;
  color: #000;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  margin: 0 15px;
  list-style: none;
  height: 50px;
  text-decoration: none;
  font-size: 18px;
  transition: 350ms;

  &:hover {
    background: #f19277;
    border-radius: 8px;
    margin: 0 15px;
    cursor: pointer;
  }

  &.${(props) => props.activeClassName} {
    background: #fff;
    border-radius: 8px;
    margin: 0 15px;
    border-right: 4px solid #f19277;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(NavLink)`
  background: #eccac1;
  height: 50px;
  padding: 5px 20px;
  margin: 0 15px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  font-size: 18px;
  transition: 350ms;

  &:hover {
    background: #f19277;
    border-radius: 8px;
    margin: 0 15px;
    cursor: pointer;
  }

  &.${(props) => props.activeClassName} {
    background: #fff;
    border-radius: 8px;
    margin: 0 15px;
    border-right: 4px solid #f19277;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink
        to={item.path}
        onClick={item.subNav && showSubnav}
        activeClassName={item.subNav ? "" : "active"}
      >
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index} activeClassName="active">
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
