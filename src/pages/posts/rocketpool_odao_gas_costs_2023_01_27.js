import React, { useEffect, useState, useRef } from "react";
import Layout from "../../components/Layout";
import { Helmet } from "react-helmet";

export default function Rocketpool_odao_gas_costs_2023_01_26() {
  const [viewCount, setViewCount] = useState("loading...");

  useEffect(() => {
    const getViews = async () => {
      try {
        let res = await fetch("https://api.countapi.xyz/hit/0xhodja/rocketpool_odao_rewards_2023_01_27_v1");
        res = await res.json();
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
      <Helmet>
        <script src="https://public.tableau.com/javascripts/api/viz_v1.js"></script>
      </Helmet>
      <div className="container">
        <div className="row mt-3">
          <div className="col text-center">
            <h3>Rocketpoool ODAO Rewards</h3>
            <img className="my-3" src="https://i.imgur.com/6xMos2B.png" style={{ width: "100%", height: "300px", objectFit: "cover" }}></img>

            <i>Commentary written based on data snapshot on 2023-01-27</i>
            <i>, page loads: {viewCount}</i>
            <br />
            <i>
              Sources:{" "}
              <a href="https://www.coingecko.com/en/api/documentation" target="_blank" rel="noreferrer">
                Coingecko API
              </a>
              {", "}
              <a href="https://rocketscan.io/rpl/inflation" target="_blank" rel="noreferrer">
                https://rocketscan.io/rpl/inflation
              </a>
            </i>
            <br />
            <hr></hr>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col">
            <p>ODAO recieves 15% of the RPL inflation. This analysis reviews how much that is in ETH and USD at the time of the rewards period.</p>
            <p>There are currently 15 ODAO nodes.</p>
            <div className="d-flex flex-row justify-content-center">
              <table className="table table-sm table-bordered table-hover" style={{ maxWidth: "800px" }}>
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>RPL</th>
                    <th>ETH</th>
                    <th>USD</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Total CY22 Rewards for All of ODAO</td>
                    <td>136,014</td>
                    <td>12,020</td>
                    <td>22,408,810</td>
                  </tr>
                  <tr>
                    <td>Total CY22 Rewards divided by 15 Nodes</td>
                    <td>9,068</td>
                    <td>801.3</td>
                    <td>1,493,921</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="container-fluid">
        <div className="row mt-1">
          <div className="col text-center">
            <i>
              <b>Note: you will need larger than 1600x900 resolution to view</b>
            </i>
            <div className="d-flex flex-row justify-content-center">
              <object class="tableauViz" style={{ display: "none", width: "1600px", height: "927px" }}>
                <param name="embed_code_version" value="3" />
                <param name="name" value="Rocketpool-ODAORewards&#47;Dashboard1" />
              </object>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <hr />
        <div className="row mt-1">
          <div className="col">
            <h5>Assumptions and Caveats</h5>
            <ul>
              <li>The daily closing price of ETH and RPL was used for cost conversions</li>
              <li>ODAO member count varies over time. Option to divide by 15 is provided as an estimate for "per ODAO node"</li>
            </ul>
            <h5>Methodology</h5>
            <ul>
              <li>
                Get inflation per rewards period from{" "}
                <a href="https://rocketscan.io/rpl/inflation" target="_blank" rel="noreferrer">
                  https://rocketscan.io/rpl/inflation
                </a>
              </li>
              <li>Get ETH and RPL daily prices from coingecko API</li>
              <li>Calculate: Value in ETH = RPL * USD/RPL * ETH/USD</li>
              <li>Calculate: Value in ETH = RPL * USD/RPL</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row my-0">
        <div className="col"></div>
      </div>
    </Layout>
  );
}
export const Head = () => {
  return (
    <>
      <title>RocketPool ODAO On-Chain gas costs</title>
      <meta name="description" content="Analysis of ODAO gas costs" />
      <meta property="og:image" content="https://i.imgur.com/BMcYLyk.png" />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
};
