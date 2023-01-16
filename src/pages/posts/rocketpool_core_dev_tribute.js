import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";

export default function Rocketpool_core_dev_tribute() {
  const [viewCount, setViewCount] = useState("loading...");

  useEffect(() => {
    const getViews = async () => {
      try {
        let res = await fetch("https://api.countapi.xyz/hit/0xhodja/rocketpool_core_dev_tribute");
        res = await res.json();
        console.log(res);
        setViewCount(res.value);
      } catch (error) {
        // blah
      }
    };
    getViews();
    return () => {};
  }, []);

  return (
    <Layout>
      <div className="container">
        <div className="row mt-3">
          <div className="col text-center">
            <h3>Rocketpool Development Tribute</h3>
            <img className="my-3" src="https://i.imgur.com/sxwhsk9.png" style={{ width: "100%", height: "300px", objectFit: "cover" }}></img>
            <i>Published on 2022-12-07</i>
            <i>, page loads: {viewCount}</i>
            <br />
            <hr></hr>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col text-center">
            <h5></h5>
            <iframe width="800" height="450" src="https://www.youtube.com/embed/SwbaL08eMiI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p>This video is a tribute to the development of the rocketpool repo on GitHub. Over the years, the team behind rocketpool has worked tirelessly to improve the codebase and add new features, making it one of the most popular and well-respected projects in the Ethereum community.</p>
          </div>
        </div>
        <div className="row my-0">
          <div className="col"></div>
        </div>
        <div className="row my-0">
          <div className="col"></div>
        </div>
      </div>
    </Layout>
  );
}
export const Head = () => {
  return (
    <>
      <title>Rocketpool dev tribute</title>
      <meta name="description" content="Tribute to the development of the rocketpool repo " />
      <meta property="og:image" content="https://i.imgur.com/sxwhsk9.png" />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
};
