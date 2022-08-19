import React, { useState, useLayoutEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { AboutUs, OurAim, OurVision } from "./pages/AboutUs/AboutUs";
import {
  Services,
  ServicesOne,
  ServicesTwo,
  ServicesThree,
} from "./pages/Services/Services";
import { Events, EventsOne, EventsTwo } from "./pages/Events/Events";
import Contact from "./pages/ContactUs/ContactUs";
import Support from "./pages/Support/Support";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

import "./App.css";

const MainContainer = styled.div`
  display: flex;
  background-color: red;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: ${(props) => (props.sidebar ? "300px" : "50px")};
  margin-right: 50px;
  transition: 350ms;
  width: ${(props) => (props.sidebar ? props.size.w - 250 : props.size.w)};
  height: 100%;
`;

function App() {
  const [sidebar, setSidebar] = useState(true);
  const [size, setSize] = useState({
    w: 0,
    h: 0,
  });

  useLayoutEffect(() => {
    function updateSize() {
      setSize({ w: window.innerWidth, h: window.innerHeight });
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <Router>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} size={size} />
      <MainContainer sidebar={sidebar} size={size}>
        <Routes>
          <Route path="/about-us" exact element={<AboutUs />} />
          <Route path="/about-us/aim" exact element={<OurAim />} />
          <Route path="/about-us/vision" exact element={<OurVision />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/services/services1" exact element={<ServicesOne />} />
          <Route path="/services/services2" exact element={<ServicesTwo />} />
          <Route path="/services/services3" exact element={<ServicesThree />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/events" exact element={<Events />} />
          <Route path="/events/events1" exact element={<EventsOne />} />
          <Route path="/events/events2" exact element={<EventsTwo />} />
          <Route path="/support" exact element={<Support />} />
        </Routes>
      </MainContainer>
      <Footer sidebar={sidebar} size={size} />
    </Router>
  );
}

export default App;
