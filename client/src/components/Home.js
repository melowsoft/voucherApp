import React from "react";

export default () => {
  return (
    <div>
      <section className="first-section">
        <div className="box">
          <div style={{ flexGrow: 1 }}>
            <center>
              <img src="/report.svg" alt="" className="img-responsive" />
            </center>
          </div>
          <div className="main-message" style={{ flexGrow: 1 }}>
            <center>
              <div style={{ marginTop: 50 }}>
                <strong>
                  <h1 className="top-text">
                    {" "}
                    Revenue - Cost
                    <br />
                    is <span style={{ color: "green" }}>Not</span> =<br />
                    Profit
                  </h1>
                </strong>
                <h4 style={{ marginTop: "7px" }}>
                  Let's help you Stop Loosing Money <br />
                  To Cash Flow And Pricing Problems...
                </h4>
              </div>
              <div style={{ marginTop: 50 }}>
                <strong>
                  {" "}
                  <button className="Ad-button">Start 30days Free Trial</button>
                </strong>
                <p>No credit Card required</p>
                <hr style={{ marginTop: "5px" }} />
              </div>
            </center>
          </div>
        </div>
      </section>
      <section className="second-section">
        <div className="row">
          <div className="col-sm-4">
            <div className="icons">
              <img src="/images/price.png" alt="" style={{ width: "60px" }} />
            </div>
            <h4>Price Optimization</h4>
            <p>
              You will be able to set prices for your goods and services from
              least profitable to most profitable price suggestions but never
              again loose money on poor pricing
            </p>
          </div>
          <div className="col-sm-4">
            <div className="icons">
              <img
                src="/images/management.png"
                alt=""
                style={{ width: "60px" }}
              />
            </div>
            <h4>Cash Flow Management</h4>
            <p>
              Know when you are loosing money at all time , what you are
              spending the most on , why your revenue is going up or dropping ,
              what you need to cut down cost on amongst other thing. You will
              have full knowledge about your cash movements and control as well
            </p>
          </div>
          <div className="col-sm-4">
            <div className="icons">
              <img
                src="/images/bookeeping.png"
                alt=""
                style={{ width: "60px" }}
              />
            </div>
            <h4>Easy Book Keeping</h4>
            <p>
              Record all sales and expenses as they come in , fill in your
              different expenses for cash flow statements and other business
              statements you will need if you ever want to seek funding or share
              with your team
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="icons">
              <img
                src="/images/optimization.png"
                alt=""
                style={{ width: "60px" }}
              />
            </div>
            <h4>Profit Optimization</h4>
            <p>
              Know all your costs to avoid underpricing. Never again will you
              use costs that isn't complete for pricing and then , loose money
            </p>
          </div>
          <div className="col-sm-4">
            <div className="icons">
              <img
                src="/images/statement.png"
                alt=""
                style={{ width: "60px" }}
              />
            </div>
            <h4>Generate Financial Statements</h4>
            <p>
              You can create balance sheet , cash flow statement , profit and
              loss statements amongst others as fast as you can order an uber
            </p>
          </div>
          <div className="col-sm-4">
            <div className="icons">
              <img
                src="/images/bookeeping.png"
                alt=""
                style={{ width: "60px" }}
              />
            </div>
            <h4>Easy Book Keeping</h4>
            <p>
              Record all sales and expenses as they come in , fill in your
              different expenses for cash flow statements and other business
              statements you will need if you ever want to seek funding or share
              with your team
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
