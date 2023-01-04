import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <Link to="/posts/rocketpool_node_distribution">Rocketpool Node Distribution</Link>
      </div>
    </Layout>
  );
}
