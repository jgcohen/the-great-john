import * as React from "react";
import { Link } from "gatsby";
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
      <Link to="/" style={footerStyles.link}>
        Accueil
      </Link>
      <p>jonathan@ouzom.fr</p>
    </footer>
  );
};

export default Footer;






