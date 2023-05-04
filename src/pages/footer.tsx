import * as React from "react";
import { CSSProperties } from "react";

const footerStyles: { [key: string]: CSSProperties } = {
  footer: {
    backgroundColor: "black",
    color: "white",
    padding: "20px",
    textAlign: "center",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
};

const Footer = () => {
  return (
    <footer style={footerStyles.footer}>
   <a href='mailto:jonathan@ouzom.fr'>Me contacter</a>
    </footer>
  );
};

export default Footer;