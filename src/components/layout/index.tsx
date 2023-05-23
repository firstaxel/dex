"use client";

import React, { ReactNode } from "react";
import Footer from "../footer";

interface LayoutComponents {
  children: ReactNode;
}

const Layout = ({ children }: LayoutComponents) => {
  return (
    <>
      {/* <Header /> */}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
