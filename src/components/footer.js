import React from "react";
import { white } from "ansi-colors";
const date = new Date();
const hours = date.getHours();
const footerStyle = {
  backgroundColor: "#FF2D00",
  color:"White",
  fontSize :20  
};
const calTime = in_hours => {
  if (in_hours < 12) {
    footerStyle.color="blue";
    return "morning";
  } else if (hours >= 12 && hours < 17) { 
    return "afternoon";
  } else {
    return "night";
  }
};

const Footer = () => (
  <footer>
    <h3 style={footerStyle}> this is my footer Good {calTime(hours)} </h3>
  </footer>
);
export default Footer;
