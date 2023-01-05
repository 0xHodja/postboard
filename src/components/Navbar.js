import { Link } from "gatsby";
import React, { useState } from "react";
import Web3 from "web3";

export default function Navbar() {
  let ethereum;

  if (typeof window.ethereum !== "undefined") {
    ethereum = window.ethereum;
  }

  const sendEth = async (ethValue) => {
    try {
      let accounts;
      try {
        accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
      } catch (error) {
        console.log("Connect wallet first");
        return;
      }
      let account = accounts[0];

      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: account,
            to: "0xCf898af76FDcF3A1639abA792Eb0C3f654b9Fc1F",
            value: Web3.utils.toHex(Web3.utils.toWei(ethValue.toString())),
          },
        ],
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container-fluid m-0 px-5 p-1 bg-dark">
      <div className="navbar navbar-expand-lg bg-dark navbar-dark m-0 p-0 d-flex justify-content-center">
        <div className="container m-0 p-0">
          <Link className="text-decoration-none navbar-brand" to="/">
            Hodja's Postboard
          </Link>

          <div className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
            <span className="navbar-toggler-icon"></span>
          </div>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto gap-3">
              <li className="nav-item">
                <div className="btn-group">
                  <div className="btn btn-sm btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    0xHodja.eth
                  </div>
                  <ul className="dropdown-menu p-1" style={{ minWidth: "150px" }}>
                    <li>
                      <a href="https://twitter.com/hodjatweet" className="dropdown-item small" target="_blank" rel="noreferrer">
                        <i className="text-dark fa-brands fa-twitter text-primary"></i> Twitter
                      </a>
                    </li>
                    <li>
                      <div className="dropdown-item small">
                        <span onClick={() => sendEth(0.005)}>
                          <i className="text-dark fa fa-coffee text-primary"></i> Tip 0.005 ETH
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
