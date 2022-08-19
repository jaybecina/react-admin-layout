import React from "react";
import styled from "styled-components";

const StyledFooter = styled.h4`
  position: fixed;
  width: 100%;
  height: 60px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: ${(props) =>
    props.sidebar ? `${(props.size.w - 200) / 1.6}px` : 0};
  text-align: ${(props) => props.sidebar === false && "center"};
  bottom: 0;
  margin: 0 auto;
  background-color: #fff;
`;

const Footer = ({ sidebar, size }) => {
  return (
    <StyledFooter sidebar={sidebar} size={size}>
      GJB Web Dev © 2022
    </StyledFooter>
  );
};

export default Footer;
