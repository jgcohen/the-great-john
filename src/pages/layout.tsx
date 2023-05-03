import * as React from "react";
import Header from "./header";
import Footer from "./footer";
import { Link } from "gatsby";

// ...

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
interface LayoutProps {}

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({ children }) => {
  return (
    <>
      <Header /> 
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;