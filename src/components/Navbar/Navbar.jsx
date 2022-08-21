import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import styled from "styled-components";

import avatarUserImg from "../../assets/img/avatarUser.png";
import diyLogo from "../../assets/logo/diyLogo.png";

const Nav = styled.div`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #000;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  /* justify-content: flex-start; */
  align-items: center;
`;

const NavRight = styled.div`
  display: ${(props) => (props.size.w > 768 ? "grid" : "block")};
  margin-left: ${(props) => (props.size.w > 768 ? 0 : "auto")};
  grid-template-columns: ${(props) =>
    props.size.w > 768 ? "repeat(5, auto)" : "none"};
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 70vw;
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
  margin-left: ${(props) => (props.sidebar ? "235px" : "50px")};
  color: ${(props) => props.color};
  font-size: ${(props) => `${props.fontSize}px`};
`;

const NavMobileLogo = styled.img`
  display: ${(props) => (props.size.w > 768 ? "none" : "block")};
  width: 160px;
  object-fit: contain;
  margin: 2px 20px;
`;

const Navbar = ({ sidebar, setSidebar, size }) => {
  const [subnav, setSubnav] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <Nav>
      <NavIcon to="#">
        <FaIcons.FaBars onClick={showSidebar} />
      </NavIcon>
      <PageHeader color="#000" fontSize={30} sidebar={sidebar} size={size}>
        Page Title Here
      </PageHeader>
      <NavRight size={size}>
        <AvatarImg
          src={avatarUserImg}
          alt=""
          onClick={showSubnav}
          size={size}
        />
        <NavMobileLogo src={diyLogo} alt="" size={size} />
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
