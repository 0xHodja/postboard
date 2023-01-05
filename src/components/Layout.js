import React from "react";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
      </Helmet>
      <Navbar />
      <div className="container-fluid m-0 p-0">{children}</div>
    </>
  );
}
