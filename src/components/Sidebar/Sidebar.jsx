import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "../SubMenu/SubMenu";
import { IconContext } from "react-icons/lib";

import Navbar from "../Navbar/Navbar";

import myLogo from "../../assets/logo/myLogo.png";

const MyProvider = ({ className, children }) => (
  <IconContext.Provider value={{ className }}>{children}</IconContext.Provider>
);

const IconProviderStyled = styled(MyProvider)`
  color: #000;
  font-size: 1.6rem;
`;

const SidebarNav = styled.nav`
  background: #eccac1;
  width: ${(props) => (props.size.w > 768 ? "250px" : "80%")};
  height: ${(props) => (props.size.w > 768 ? "100vh" : "100%")};
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
  height: ${(props) => `${props.size.h - 160}px`};
  overflow: auto;
`;

const NavLogoDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

const SideNavLogo = styled.img`
  width: 180px;
  height: 70px;
  object-fit: contain;
  margin: 2px 30px;
`;

const NavIcon = styled(Link)`
  margin: 1rem 2rem;
  font-size: 2rem;
  /* height: 80px; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavMobileLogout = styled.button`
  display: ${(props) => (props.size.w > 768 ? "none" : "block")};
  margin-left: 2rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  font-size: 1.6rem;
  width: ${(props) => (props.size.w <= 768 ? "50%" : "200px")};
  height: 40px;
  text-align: center;
  align-items: center;
  bottom: 0;
  position: fixed;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  transition: 350ms;

  &:hover {
    background-color: ${(props) => props.hoverBgColor};
    color: ${(props) => props.hoverColor};
    scale: 1.1;
  }
`;

const Sidebar = ({ sidebar, setSidebar, size }) => {
  useEffect(() => {
    // Mobile
    if (size.w <= 768) {
      setSidebar(false);
    } else {
      setSidebar(true);
    }
  }, [size]);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconProviderStyled>
        <Navbar sidebar={sidebar} setSidebar={setSidebar} size={size} />
        <SidebarNav sidebar={sidebar} size={size}>
          <SidebarWrap size={size}>
            <NavLogoDiv>
              <SideNavLogo src={myLogo} alt="" />
              <NavIcon to="#">
                <AiIcons.AiOutlineLeft onClick={showSidebar} />
                {/* <AiIcons.AiOutlineClose onClick={showSidebar} /> */}
              </NavIcon>
            </NavLogoDiv>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
            <NavMobileLogout size={size}>Logout</NavMobileLogout>
          </SidebarWrap>
        </SidebarNav>
      </IconProviderStyled>
    </>
  );
};

export default Sidebar;
