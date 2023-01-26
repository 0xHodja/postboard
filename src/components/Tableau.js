import React, { useEffect, useRef } from "react";
const { tableau } = window;
export const Tableau = (url) => {
  const ref = useRef(null);
  function initViz() {
    newtableau.Viz(ref.current, url);
  }
  return <div ref={ref} style={{ width: "70%", margin: "auto" }}></div>;
};
