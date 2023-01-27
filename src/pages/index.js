import { Link } from "gatsby";
import React, { useEffect, useState, useRef } from "react";
import Layout from "../components/Layout";

const blogs = [
  {
    title: "What does it currently cost the protocol to pay ODAO?",
    image: "",
    link: "/posts/rocketpool_odao_gas_costs_2023_01_27",
    date: "2023-01-27",
    blurb: "Analysis of ODAO revenue",
  },
  {
    title: "What does it cost ODAO in gas fees for their on-chain functions?",
    image: "",
    link: "/posts/rocketpool_odao_gas_costs_2023_01_26",
    date: "2023-01-26",
    blurb: "Analysis of ODAO gas costs",
  },
  {
    title: "Has Adada.eth been profitable in trading RPL?",
    image: "",
    link: "/posts/rocketpool_adada_profitability",
    date: "2023-01-13",
    blurb: "Analysis of adada.eth's profitability over time",
  },
  {
    title: "Global Decentralisation of Rocketpool Nodes and Minipools",
    image: "",
    link: "/posts/rocketpool_node_distribution",
    date: "2023-01-04",
    blurb: "Post with some animated bar charts and maps showing global minipool and node distribution",
  },
  {
    title: "Tribute to the development of Rocket Pool",
    image: "",
    link: "/posts/rocketpool_core_dev_tribute",
    date: "2022-12-07",
    blurb: "Video tribute to the development of the Rocketpool",
  },
];

export default function Home() {
  const blogSearch = useRef();
  const [blogSearchText, setBlogSearchText] = useState("");

  const handleBlogSearch = () => {
    let searchText = blogSearch.current.value;

    setBlogSearchText(searchText);
  };

  const filteredBlogs = () => {
    let searchText = blogSearchText;
    let blogsFiltered = [];
    blogsFiltered = blogs.filter((x) => {
      const blob = Object.values(x).join(" ").toLowerCase();

      const inlcudeMe = searchText
        .split(" ")
        .map((s) => {
          return blob.includes(s.toLowerCase());
        })
        .every(Boolean);

      return inlcudeMe;
    });
    return blogsFiltered;
  };

  return (
    <Layout>
      <div className="container mt-2">
        <div className="row">
          <div className="col">
            <div className="input-group mt-2 mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">Search</span>
              </div>
              <input ref={blogSearch} value={blogSearchText} type="text" className="form-control" placeholder="type your search terms" onChange={() => handleBlogSearch()} />
            </div>

            {filteredBlogs().length === 0 ? (
              <div>No results. Adjust your search input.</div>
            ) : (
              filteredBlogs().map((x) => {
                return (
                  <div className="border border-1 rounded-2 p-3 my-3 bg-light" key={x.link}>
                    <Link to={x.link}>
                      <h5 className="my-0">{x.title}</h5>
                    </Link>
                    <p className="m-0">
                      <i>{x.date}</i>
                      <br />
                      {x.blurb}
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
