import * as React from "react";
import Header from "./header";
import Footer from "./footer";

interface LayoutProps {}

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({ children }) => {
  return (
    <>
      <Header /> 
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;