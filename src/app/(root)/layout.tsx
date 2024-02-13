"use client";

import React from "react";
import Header from "./_component/Header";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default RootLayout;
