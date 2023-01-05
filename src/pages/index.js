import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="container mt-2">
        <div className="row">
          <div className="col">
            <div>
              <Link to="/posts/rocketpool_node_distribution">Global Decentralisation of Rocketpool Nodes and Minipools</Link>
              <p>
                2023-01-04 <br />
                Post with some animated bar charts and maps showing global minipool and node distribution
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
