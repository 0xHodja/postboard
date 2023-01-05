import React, { useState } from "react";
import Layout from "../../components/Layout";
import * as styles from "../../styles/rocketpool_node_distribution.module.css";

export default function Rocketpool_node_distribution() {
  const [includeWhalesMinipool, setIncludeWhalesMinipool] = useState(true);
  const [localeAggregationMinipool, setLocaleAggregationMinipool] = useState(1);

  const [includeWhalesNode, setIncludeWhalesNode] = useState(true);
  const [localeAggregationNode, setLocaleAggregationNode] = useState(3);

  const getVizMinipools = () => {
    let vizId;
    if (includeWhalesMinipool) {
      switch (localeAggregationMinipool) {
        case 1:
          vizId = 12318344;
          break;
        case 2:
          vizId = 12344942;
          break;
        case 3:
          vizId = 12345028;
          break;
        default: // just return something
          vizId = 12318344;
      }
    } else {
      switch (localeAggregationMinipool) {
        case 1:
          vizId = 12345901;
          break;
        case 2:
          vizId = 12345934;
          break;
        case 3:
          vizId = 12345935;
          break;
        default: // just return something
          vizId = 12318344;
      }
    }
    return <iframe title="Minipools" src={`https://flo.uri.sh/visualisation/${vizId}/embed`} style={{ width: "100%", height: "800px" }}></iframe>;
  };

  const getVizNodes = () => {
    let vizId;
    if (includeWhalesNode) {
      switch (localeAggregationNode) {
        case 1:
          vizId = 12345968;
          break;
        case 2:
          vizId = 12345972;
          break;
        case 3:
          vizId = 12345973;
          break;
        default: // just return something
          vizId = 12345968;
      }
    } else {
      switch (localeAggregationNode) {
        case 1:
          vizId = 12345971;
          break;
        case 2:
          vizId = 12345974;
          break;
        case 3:
          vizId = 12345975;
          break;
        default: // just return something
          vizId = 12345968;
      }
    }
    return <iframe title="Nodes" src={`https://flo.uri.sh/visualisation/${vizId}/embed`} style={{ width: "100%", height: "800px" }}></iframe>;
  };

  return (
    <Layout>
      <div className="container">
        <div className="row mt-3">
          <div className="col text-center">
            <h3>Global Distribution of Rocketpool Nodes and Minipools</h3>
            <img className="my-3" src="https://imgur.com/7rSzR4A.png" style={{ width: "100%", height: "200px", objectFit: "cover" }}></img>
            <i>Analysis performed with data extracted on 2023-01-04</i>
            <br />
            <i>
              Sources:{" "}
              <a href="https://etherscan.io" target="_blank" rel="noreferrer">
                Ethereum
              </a>
              {", "}
              <a href="https://simplemaps.com/data/world-cities" target="_blank" rel="noreferrer">
                SimpleMaps Cities
              </a>
            </i>
            <br />
            <i>
              Code to scrape data:{" "}
              <a href="https://github.com/0xHodja/viz-data-rocketpool-node-distribution-map" className="text-decoration-none" target="_blank" rel="noreferrer">
                <i className="text-dark fa-brands fa-github"></i> Repo
              </a>
            </i>

            <hr></hr>
          </div>
        </div>
        <div className="row mt-0">
          <div className="col">
            <p>Rocketpool has a thriving global community of node operators. I thought it might be interesting to see how distributed the network of operators could be, and also the global growth of the network over time. </p>
            <p>Timezones declared by the node operators on registration with the RocketpoolNodeManager contract were obtained and this was matched with the minipools the operators have created. Since the node timezone is an uncontrolled string, the timezone data was cleaned a little to be able to be mapped to Earthly locations, as a minority of node operators have used this as a platform to show on-chain text graffiti or declared their nodes are in space!</p>
            Some questions for giving more context to these animations:
            <ul>
              <li>Where are the node operators globally?</li>
              <li>Where are the the minipools globally?</li>
              <li>How do those distributions look if the whale node operators (e.g. removing the >100 minpool nodes)?</li>
              <li>Which region/country/city grew or is growing the fastest?</li>
            </ul>
            <p>
              Feel free to come chat in the Rocketpool community{" "}
              <a href="https://discord.gg/rocketpool" className="text-decoration-none" target="_blank" rel="noreferrer">
                <i className="text-primary fa-brands fa-discord"></i> Discord
              </a>
              !
            </p>
            <p>Best viewed with >1400px horizontal resolution</p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <hr />
            <h3 className="text-center">Global Minipool Map</h3>
            <p className="text-center mb-1">Nodes with Etc/UTC timezone are excluded from the global plot. An orange splash is plotted for each minipool created, with circle intensity scaling with rate of minipool creation.</p>
            <iframe title="Global" className={styles.globalview} style={{ width: "100%" }} src="https://flo.uri.sh/visualisation/12345212/embed?auto=1"></iframe>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <hr />
            <h3 className="text-center mb-3">Count by Minipools</h3>
            <div className="d-flex flex-row gap-3 justify-content-center align-items-center">
              Include Whales (>100 minipool Nodes):
              <button className={`btn btn-sm ${includeWhalesMinipool ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setIncludeWhalesMinipool(true)}>
                Include
              </button>
              <button className={`btn btn-sm ${!includeWhalesMinipool ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setIncludeWhalesMinipool(false)}>
                Exclude
              </button>
              Show graph:
              <button className={`btn btn-sm ${localeAggregationMinipool === 1 ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setLocaleAggregationMinipool(1)}>
                By Region
              </button>
              <button className={`btn btn-sm ${localeAggregationMinipool === 2 ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setLocaleAggregationMinipool(2)}>
                By Country
              </button>
              <button className={`btn btn-sm ${localeAggregationMinipool === 3 ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setLocaleAggregationMinipool(3)}>
                By City
              </button>
            </div>
            <p className="text-center mt-3">
              <i>Note: click on the legend to filter the inputs by region</i>
            </p>
          </div>
        </div>
        <div className="row" style={{ marginTop: "-10px" }}>
          {getVizMinipools()}
        </div>
        <div className="row mt-3">
          <div className="col">
            <hr />
            <h3 className="text-center mb-3">Count by Nodes</h3>
            <div className="d-flex flex-row gap-3 justify-content-center align-items-center">
              Include Whales (>100 minipool Nodes):
              <button className={`btn btn-sm ${includeWhalesNode ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setIncludeWhalesNode(true)}>
                Include
              </button>
              <button className={`btn btn-sm ${!includeWhalesNode ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setIncludeWhalesNode(false)}>
                Exclude
              </button>
              Show graph:
              <button className={`btn btn-sm ${localeAggregationNode === 1 ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setLocaleAggregationNode(1)}>
                By Region
              </button>
              <button className={`btn btn-sm ${localeAggregationNode === 2 ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setLocaleAggregationNode(2)}>
                By Country
              </button>
              <button className={`btn btn-sm ${localeAggregationNode === 3 ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setLocaleAggregationNode(3)}>
                By City
              </button>
            </div>
            <p className="text-center mt-3">Node count is probably most highly correlated with where the rocketpool node operator community is actually distributed. Hello Rocketpoolers!</p>
          </div>
        </div>
        <div className="row">{getVizNodes()}</div>
      </div>
    </Layout>
  );
}
