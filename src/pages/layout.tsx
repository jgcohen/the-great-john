import * as React from "react";
import Header from "./header";
import Footer from "./footer";


const Navbar = () => {
  const navStyles = {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#f4f4f4",
    padding: "1rem",
  };

  return (
    <nav style={navStyles}>
      <a href="/">Accueil</a>
      <a href="/articles">Liste des articles</a>
    </nav>
  );
};

const containerStyles = {
  width: "100%",
  maxWidth: "1500px",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "0 1rem",
  minHeight: "80vh"
};

interface LayoutProps {}

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({ children }) => {
  return (
      <><Navbar />      <Header /><div style={containerStyles}>
      <main>{children}</main>
  
    </div>    <Footer /></>
  );
};
export default Layout;