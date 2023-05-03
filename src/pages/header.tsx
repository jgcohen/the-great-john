import * as React from "react";
import { CSSProperties } from "react";

const headerStyles: { [key: string]: CSSProperties } = {
  header: {
    backgroundColor: "black",
    color: "white",
    padding: "20px",
    textAlign: "center",
  },
  title: {
    color: "orange",
    fontSize: "2rem",
    margin: "0",
  },
  subtitle: {
    color: "white",
    fontSize: "1.5rem",
    margin: "0",
  },
};

const Header = () => {
  return (
    <header style={headerStyles.header}>
      <h1 style={headerStyles.title}>The Great John</h1>
      <h2 style={headerStyles.subtitle}>L'Ecodéveloppeur</h2>
    </header>
  );
};

export default Header;