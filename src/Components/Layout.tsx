// src/components/Layout.tsx
import React from "react";
import { NavBar } from "./NavBar";

interface LayoutProps {
  children: React.ReactNode;
  showNavBar?: boolean; // Prop to control the visibility of the NavBar
}

const Layout: React.FC<LayoutProps> = ({ children, showNavBar = true }) => {
  return (
    <>
      {showNavBar && <NavBar />}
      <main>{children}</main>
    </>
  );
};

export default Layout;
