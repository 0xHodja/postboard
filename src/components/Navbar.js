import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import Web3 from "web3";

const isBrowser = typeof window !== "undefined";

export default function Navbar() {
  const [ethereum, setEthereum] = useState();
  const [account, setAccount] = useState(false);

  useEffect(() => {
    if (isBrowser) {
      if (typeof window.ethereum !== "undefined") {
        setEthereum(window.ethereum);
      }
    }
    return () => {};
  }, []);

  const handleConnectWallet = async () => {
    if (ethereum === undefined) {
      alert("Page not ready yet, or a wallet was not detected.");
      return;
    }
    let accounts;
    try {
      accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
    } catch (error) {
      alert("Ethereum account not detected. Connect wallet first");
      return;
    }
    let account = accounts[0];
    setAccount(account);
  };

  const sendEth = async (ethValue) => {
    try {
      let accounts;

      if (isBrowser) {
        if (typeof window.ethereum !== "undefined") {
          setEthereum(window.ethereum);
        }
      } else {
        alert("Unable to connect.");
        return;
      }

      try {
        accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
      } catch (error) {
        alert("Ethereum account not detected. Connect wallet first");
        return;
      }
      let account = accounts[0];
      setAccount(account);

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
          <div className="text-light text-sm">
            <small>
              <em>Made without permission</em>
            </small>
          </div>
          <div className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
            <span className="navbar-toggler-icon"></span>
          </div>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto gap-3">
              <li className="nav-item">
                <div className="btn-group">
                  <div className="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    0xHodja.eth
                  </div>
                  <ul className="dropdown-menu p-1" style={{ minWidth: "150px" }}>
                    <li>
                      <a href="https://twitter.com/hodjatweet" className="dropdown-item small" target="_blank" rel="noreferrer">
                        <i className="text-dark fa-brands fa-twitter text-primary"></i> Twitter
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-decoration-none" onClick={() => sendEth(0.005)}>
                        <div className="dropdown-item small">
                          <i className="text-dark fa fa-coffee text-primary"></i> Tip 0.005 ETH
                        </div>
                      </a>
                    </li>

                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    {account ? (
                      <li>
                        <div className="text-white dropdown-item small bg-success">Connected: {account.substring(1, 8) + "..."}</div>
                      </li>
                    ) : (
                      <li>
                        <a href="#" className="dropdown-item small text-decoration-none" onClick={() => handleConnectWallet()}>
                          Connect Wallet
                        </a>
                      </li>
                    )}
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
