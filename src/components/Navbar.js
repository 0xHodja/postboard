import { Link } from "gatsby";
import React, { useEffect, useRef, useState } from "react";
import Web3 from "web3";
import { Modal } from "react-bootstrap";
import "../styles/style.css";

const rplTokenAddress = "0xD33526068D116cE69F19A9ee46F0bd304F21A51f";

export default function Navbar() {
  const [ethereum, setEthereum] = useState();
  const [account, setAccount] = useState(false);
  const [showDonateModal, setShowDonateModal] = useState(false);
  const inputDonateRPLRef = useRef();
  const inputDonateETHRef = useRef();

  useEffect(() => {
    const logPageView = async () => {
      let res = await fetch("https://vluqfxtrkjopya6n3m3qo3dn7u0rohpb.lambda-url.us-east-1.on.aws/");
      //console.log(res);
    };
    logPageView();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
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

  const sendDonation = async (token, value) => {
    try {
      // make sure web3 loaded
      if (typeof window !== "undefined") {
        if (typeof window.ethereum !== "undefined") {
          setEthereum(window.ethereum);
        }
      } else {
        alert("Unable to connect.");
        return;
      }

      let accounts;
      // get accounts
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

      // request metamask/wallet send transaction
      if (token === "ETH") {
        await ethereum.request({
          method: "eth_sendTransaction",
          params: [
            {
              from: account,
              to: "0xCf898af76FDcF3A1639abA792Eb0C3f654b9Fc1F",
              value: Web3.utils.toHex(Web3.utils.toWei(value.toString())),
            },
          ],
        });
      } else if (token === "RPL") {
        //todo
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleToggleDonateModal = (state) => {
    setShowDonateModal(state);
  };

  const handleSendDonation = (token) => {
    let value = 0;
    if (token === "ETH") {
      value = inputDonateETHRef.current.value;
    } else {
      value = inputDonateRPLRef.current.value;
    }
    if (isNaN(value)) {
      alert("Input numerical values only");
    }
    sendDonation(token, value);
  };

  const handle0xHodjaClick = async () => {
    let ethConnected = ethereum.isConnected();
    if (!ethConnected) {
      console.log(ethConnected);
      setAccount(false);
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
                  <div
                    className="btn btn-sm btn-outline-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    onClick={() => {
                      handle0xHodjaClick();
                    }}
                  >
                    0xHodja.eth
                  </div>
                  <ul className="dropdown-menu p-1" style={{ minWidth: "150px" }}>
                    <li>
                      <a href="https://twitter.com/hodjatweet" className="dropdown-item small" target="_blank" rel="noreferrer">
                        <i className="text-dark fa-brands fa-twitter text-primary"></i> Twitter
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-decoration-none" onClick={() => handleToggleDonateModal(true)}>
                        <div className="dropdown-item small">
                          <i className="text-dark fa fa-coffee text-primary"></i> Donate
                        </div>
                      </a>
                    </li>
                    {/* 
                    <li>
                      <hr className="dropdown-divider" />
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
                    )} */}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Modal show={showDonateModal} onHide={handleToggleDonateModal} centered>
        <Modal.Body className="bg-light">
          <div className="text-center text-dark">
            <h5 className="mt-3">❤️ Donate a coffee 😊</h5>

            <p>Thank you for the kind thought to help support the blog!</p>
            {/* //TODO
            <div className="input-group mb-3">
              <input type="text" ref={inputDonateRPLRef} class="form-control" value="0.2" />
              <div className="input-group-append">
                <button className="btn btn-dark rounded-0 rounded-end" style={{ minWidth: "150px" }} type="button" onClick={() => handleSendDonation("RPL")}>
                  Donate RPL 🚀
                </button>
              </div>
            </div> */}
            <div className="input-group mb-3">
              <input type="text" ref={inputDonateETHRef} className="form-control" defaultValue="0.004" />
              <div className="input-group-append">
                <button className="btn btn-dark rounded-0 rounded-end" style={{ minWidth: "150px" }} type="button" onClick={() => handleSendDonation("ETH")}>
                  Donate ETH Ξ
                </button>
              </div>
            </div>
            <p className="small">{account ? "Connected: " + account : <i>Clicking donate will also ask your wallet to connect</i>}</p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
