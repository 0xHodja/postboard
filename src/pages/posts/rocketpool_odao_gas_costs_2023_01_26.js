import React, { useEffect, useState, useRef } from "react";
import Layout from "../../components/Layout";
import { Helmet } from "react-helmet";

export default function Rocketpool_odao_gas_costs_2023_01_26() {
  const [viewCount, setViewCount] = useState("loading...");

  useEffect(() => {
    const getViews = async () => {
      try {
        let res = await fetch("https://api.countapi.xyz/hit/0xhodja/rocketpool_odao_gas_costs_2023_01_26_v1");
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
            <h3>What are the onchain transaction costs for ODAO functions?</h3>
            <img className="my-3" src="https://i.imgur.com/6xMos2B.png" style={{ width: "100%", height: "300px", objectFit: "cover" }}></img>

            <i>Commentary written based on data snapshot on 2023-01-26</i>
            <i>, page loads: {viewCount}</i>
            <br />
            <i>
              Sources:{" "}
              <a href="https://etherscan.io/" target="_blank" rel="noreferrer">
                Ethereum
              </a>
              {", "}
              <a href="https://www.coingecko.com/en/api/documentation" target="_blank" rel="noreferrer">
                Coingecko API
              </a>
              {", "}
              <a href="http://rocketscan.io" target="_blank" rel="noreferrer">
                RocketScan.io
              </a>
            </i>
            <br />
            <hr></hr>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col">
            <p>Recent discussions around what the protocol pays Rocketpool ODAO members sparked some interest in what does it cost to run ODAO. Social capital to prove non-maliciousness is one aspect that is hard to value but one area of cost that is more tangible to estimate is the cost of onchain transactions as part of their duties.</p>
            <p>This analysis summarises the on-chain costs for the current ODAO members. The costs include only the functions listed below, and exclude other non-critical transactions such as those involved in creating minipools or transferring funds:</p>
            <ul>
              <li>submitBalances</li>
              <li>submitPrices</li>
              <li>submitRates</li>
              <li>submitRewardSnapshot</li>
            </ul>
            <p>
              <b>Some initial insights:</b>
            </p>
            <div className="d-flex flex-row justify-content-center">
              <table className="table table-sm table-bordered table-hover" style={{ maxWidth: "800px" }}>
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>ETH</th>
                    <th>USD</th>
                    <th>RPL</th>
                    <th>GigaGas (10^9)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Total Gas Costs for current active ODAO set since 2021-01-10</td>
                    <td>51.29</td>
                    <td>137,900</td>
                    <td>4,428</td>
                    <td>1.176</td>
                  </tr>
                  <tr>
                    <td>CY22 Total Annual Costs</td>
                    <td>39.39</td>
                    <td>94,464</td>
                    <td>3,429</td>
                    <td>0.9968</td>
                  </tr>
                  <tr>
                    <td>CY22 Total Annual Costs Per Node</td>
                    <td>3.16</td>
                    <td>7,707</td>
                    <td>278</td>
                    <td>0.07605</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul>
              <li>Since inception: As a single node Phiz has spent the most ETH at 5.1 ETH ($13,940 USD or 446 RPL)</li>
              <li>Peak monthly ODAO cost for all nodes was 9.8 ETH/month ($30,000 USD/month, or 856 RPL/month) in January 2022</li>
              <ul>
                <li>Single node peak cost for this month was Phiz at 1.1662 ETH ($3,565, or 101 RPL)</li>
              </ul>
              <li>Bear market Monthly ODAO costs in RPL is approximately 7-10 RPL/month (since August 2022)</li>
            </ul>
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
                <param name="name" value="RocketPoolODAOMainnetCosts&#47;Dashboard" />
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
              <li>Costs of transactions that errored out or were reverted are included</li>
              <li>The daily closing price of ETH and RPL was used for cost conversions</li>
              <li>If an ODAO node is not in the current set of members, it is not included</li>
            </ul>
            <h5>Methodology</h5>
            <ul>
              <li>
                Get list of ODAO members from{" "}
                <a href="https://rocketscan.io/dao/members" target="_blank" rel="noreferrer">
                  https://rocketscan.io/dao/members
                </a>
              </li>
              <li>Get transactions from each of the ODAO member addreses using Etherscan API</li>
              <li>Get ETH and RPL daily prices from coingecko API</li>
              <li>Calculate: GasCost = GasPrice * GasUsed</li>
              <li>Multiply ETH by USD/ETH daily closing price to get USD cost estimate</li>
              <li>Multiply USD by RPL/USD daily closing price to get RPL cost estimate</li>
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
