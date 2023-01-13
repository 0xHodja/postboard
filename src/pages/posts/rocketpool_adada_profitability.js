import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";

export default function Rocketpool_adada_profitability() {
  const [viewCount, setViewCount] = useState("loading...");

  useEffect(() => {
    const getViews = async () => {
      try {
        let res = await fetch("https://api.countapi.xyz/hit/0xhodja/rocketpool_adada_profitability_2");
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
            <h3>Has Adada.eth been profitable in trading RPL?</h3>
            <img className="my-3" src="https://i.imgur.com/vzUHkZD.png" style={{ width: "100%", height: "300px", objectFit: "cover" }}></img>
            <i>Commentary written based on data snapshot on 2023-01-13</i>
            <i>, page loads: {viewCount}</i>
            <br />
            <i>
              Sources:{" "}
              <a href="https://etherscan.io/address/adada.eth" target="_blank" rel="noreferrer">
                Ethereum-Adada.eth
              </a>
              {", "}
              <a href="https://www.coingecko.com/en/api/documentation" target="_blank" rel="noreferrer">
                Coingecko API
              </a>
            </i>
            <br />
            <hr></hr>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col">
            <p>
              When one lurks in the{" "}
              <a href="https://discord.gg/rocketpool" className="text-decoration-none" target="_blank" rel="noreferrer">
                rocketpool #trading channel
              </a>{" "}
              for long enough, one begins to realise Adada.eth is somewhat of a mysterious celebrity who never speaks a word using their elusive pseudonym.
            </p>
            <p>Their rise to fame has been in frequently trading RPL token, which somewhat has garnered a reputation for buying high and selling low.</p>
            <p>
              The question arises then,{" "}
              <b>
                <em>is Adada.eth actually profitable?</em>
              </b>{" "}
              Has Adada.eth's apparently misplaced trades, actually been pure genius over time?
            </p>
            <p>This shitpost aims to find out.</p>
            <p>
              <b>TLDR: No. Not yet anyway ❤️ Rocketpool believes in you Adada</b>
            </p>
          </div>
        </div>
        <div className="row my-0">
          <div className="col">
            <hr />
            <h5>Assumptions and Caveats</h5>
            <ul>
              <li>We don't know any other addresses or where Adada.eth gets their money from so analysis is confined to their on-chain addresses, and transactions made by that</li>
              <li>This analysis has been built with a snapshot of data, therefore commentary and conclusions will only valid at time of writing this post (2023-01-13)</li>
              <li>
                Adada.eth primarily trades in USD, but has made a few minor swaps in ETH. Converting to USD basis will be done via coingecko data, using the daily close of ETH price
                <ul>
                  <li>A simplification that introduces some inaccuracy to the result</li>
                </ul>
              </li>
              <li>Standard accuracy of this analysis is guaranteed only up to shitpost quality</li>
            </ul>
            <h5>Methodology</h5>
            <ul>
              <li>Get all Adada.eth's ERC20 RPL transactions containing an obvious swap</li>
              <li>
                Calculate the cost basis of those transactions in USD
                <ul>
                  <li>For transactions performed against ETH, resolve the ETH price value during that block by comparing with other DEX trades</li>
                </ul>
              </li>
              <li>Present metrics such as volume, cost basis, profitability</li>
              <li>
                Code to get data:{" "}
                <a href="https://github.com/0xHodja/viz-data-adada-eth-profitability" className="text-decoration-none" target="_blank" rel="noreferrer">
                  <i className="text-dark fa-brands fa-github"></i> Repo
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row my-0">
          <div className="col">
            <hr />
            <h5 className="text-center mb-3">Adada's Stats</h5>
            <div className="d-flex flex-row justify-content-evenly flex-wrap gap-3">
              <div className="d-flex flex-column align-items-center border border-1 p-3 rounded-2 bg-primary text-white">
                <div>
                  <b>First RPL Trade</b>
                </div>
                <div>2021-02-13</div>
              </div>
              <div className="d-flex flex-column align-items-center border border-1 p-3 rounded-2 bg-primary text-white" style={{ width: "150px" }}>
                <div>
                  <b>Swaps</b>
                </div>
                <div>565</div>
              </div>
              <div className="d-flex flex-column align-items-center border border-1 p-3 rounded-2 bg-primary text-white">
                <div>
                  <b>Total USD Volume</b>
                </div>
                <div>$4,081,406</div>
              </div>
              <div className="d-flex flex-column align-items-center border border-1 p-3 rounded-2 bg-primary text-white">
                <div>
                  <b>Total RPL Volume</b>
                </div>
                <div>169,154 RPL</div>
              </div>
              <div className="d-flex flex-column align-items-center border border-1 p-3 rounded-2 bg-primary text-white">
                <div>
                  <b>Gas spent on swaps</b>
                </div>
                <div>0.116 ETH</div>
              </div>
            </div>
            <h5 className="mt-5 text-center">Realised Profit</h5>
            <p className="text-center text-primary">Note: all graphs below are plotted by end-of-day values. Intraday values may vary from the daily close value.</p>
            <ul>
              <li>Adada.eth was profitable during August 2022, but after that it has been all downhill unfortunately</li>
              <li>
                As of 2023-01-14 Adada.eth has approximately <b> $13,400 USD in losses</b>, having traded a total USD volume of $4,080,000
              </li>
              <li>
                Peak <i>realised profits</i> on RPL trades occurred on 2022-08-09. <em>Good one Adada.</em>
                <ul>
                  <li>From mid Sept 2022, as RPL dropped ~20% from $29 to $24, Adada.eth lost all realised gains :(</li>
                </ul>
              </li>
              <li>
                Peak <i>realised loss</i>, which occurred during a period of{" "}
                <b>
                  <em>increasing</em>
                </b>{" "}
                RPL price, occurred on 2023-01-09. Overtrading can sometimes be the savage enemy.
              </li>
            </ul>
            <iframe title="Realised Profit" src={`https://flo.uri.sh/visualisation/12431603/embed`} style={{ width: "100%", height: "400px" }}></iframe>
            <h5 className="mt-3 text-center">RPL Cost Price</h5>
            <ul>
              <li>Recently Adada.eth has been trading more frequently, both buying and selling, hence cost price is closely tracking market price</li>
            </ul>
            <iframe title="RPL Price" src={`https://flo.uri.sh/visualisation/12431513/embed`} style={{ width: "100%", height: "600px" }}></iframe>
            <h5 className="mt-3 text-center">RPL Balance</h5>
            <ul>
              <li>Peak RPL balance held on 9 January 2023, of 4063 RPL, which also coincides with peak realised loss. :(</li>
              <li>Adada.eth switched off from trading RPL between June 2021 and June 2022, holding about 34 RPL and registering only one trade during that period. That first June 2021 dump was a tough one eh.</li>
            </ul>
            <iframe title="RPL Balance" src={`https://flo.uri.sh/visualisation/12431574/embed`} style={{ width: "100%", height: "300px" }}></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export const Head = () => {
  return (
    <>
      <title>Has Adada.eth been profitable in trading RPL?</title>
      <meta name="description" content="Analysis of whether Adada.eth has been profitable in trading RPL" />
      <meta property="og:image" content="https://i.imgur.com/vzUHkZD.png" />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
};
