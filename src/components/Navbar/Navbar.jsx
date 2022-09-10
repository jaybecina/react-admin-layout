import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import styled from "styled-components";

import avatarUserImg from "../../assets/img/avatarUser.png";
import myLogo from "../../assets/logo/myLogo.png";

import { headerTitle } from "./HeaderTitleData";

const Nav = styled.div`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #000;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  align-items: center;
`;

const NavRight = styled.div`
  display: ${(props) => (props.size.w > 768 ? "grid" : "block")};
  list-style: none;
  text-align: center;
  width: 4rem;
  justify-content: end;
  margin-right: 1.4rem;
`;

const AvatarImg = styled.img`
  display: ${(props) => (props.size.w > 768 ? "block" : "none")};
  width: 50px;
  height: 50px;
  object-fit: contain;

  &:hover {
    cursor: pointer;
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  right: 0;
  margin-top: 50px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  & > a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  & a:hover {
    background: #ddd;
    cursor: pointer;
  }
`;

const PageHeader = styled.h1`
  display: ${(props) => (props.size.w > 768 ? "block" : "none")};
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  text-align: center;
  margin-left: ${(props) => (props.sidebar ? "284px" : 0)};
  color: ${(props) => props.color};
  font-size: ${(props) => `${props.fontSize}px`};
`;

const NavMobileLogo = styled.img`
  display: ${(props) => (props.size.w > 768 ? "none" : "block")};
  width: 70px;
  height: 50px;
  object-fit: contain;
`;

const Navbar = ({ sidebar, setSidebar, size }) => {
  const location = useLocation();

  const [subnav, setSubnav] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <Nav>
      <NavIcon to="#">
        <FaIcons.FaBars onClick={showSidebar} />
      </NavIcon>
      <PageHeader color="#000" fontSize={30} sidebar={sidebar} size={size}>
        {headerTitle(location)}
      </PageHeader>
      <NavRight size={size}>
        <AvatarImg
          src={avatarUserImg}
          alt=""
          onClick={showSubnav}
          size={size}
        />
        <NavMobileLogo src={myLogo} alt="" size={size} />
        {subnav && (
          <DropdownContent>
            <a href="#">My Profile</a>
            <a href="#">Logout</a>
          </DropdownContent>
        )}
      </NavRight>
    </Nav>
  );
};

export default Navbar;
