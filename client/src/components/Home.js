import React from "react";

export default () => {
  return (
    <div>
      <section className="first-section">
        <div className="row">
          <div
            className="img-section col l6 m6 s12"
            style={{ padding: "2rem" }}
          >
            <img src="/report.svg" alt="" class="responsive-img" />
          </div>
          <div className="main-message col l6 m6 s12">
            <center>
              <div className="text-only" style={{ marginTop: 50 }}>
                <strong>
                  <h1 className="top-text">
                    {" "}
                    Revenue - Cost
                    <br />
                    is <span style={{ color: "green" }}>Not</span> =<br />
                    Profit
                  </h1>
                </strong>
                <h5 style={{ marginTop: "10px" }}>
                  Let's help you Stop Loosing Money <br />
                  To Cash Flow And Pricing Problems...
                </h5>
              </div>
              <div style={{ marginTop: 50 }}>
                <strong>
                  {" "}
                  <button className="btn-large green darken-3 waves-effect waves-light">
                    Start 30days Free Trial
                  </button>
                </strong>
                <p>No credit Card required</p>
              </div>
            </center>
          </div>
        </div>
      </section>
      <section className="second-section">
        <div class="row  services-header">
          <div class="col">
            <h2>
              We’ve got everything you need to launch and grow a profitable and
              cash positive business
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col l4 m4 s12">
            <div className="icons">
              <img
                src="/images/price.png"
                alt=""
                style={{ width: "60px", marginBottom: "10px" }}
              />
            </div>
            <h4>Price Optimization</h4>
            <p>
              You will be able to set prices for your goods and services from
              least profitable to most profitable price suggestions but never
              again loose money on poor pricing
            </p>
          </div>

          <div className="col l4 m4 s12">
            <div className="icons">
              <img
                src="/images/bookeeping.png"
                alt=""
                style={{ width: "60px", marginBottom: "10px" }}
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

          <div className="col l4 m4 s12">
            <div className="icons">
              <img
                src="/images/management.png"
                alt=""
                style={{ width: "60px", marginBottom: "10px" }}
              />
            </div>
            <h4>Real Time Reporting</h4>
            <p>
              you can actually see how profitable you are at every point in time
              using this tool, how high or low your expenses are and how high or
              low your revenue is plus , every week , detailed reports are sent
              out to show you exactly how your business is doing.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col l4 m4 s12">
            <div className="icons">
              <img
                src="/images/management.png"
                alt=""
                style={{ width: "60px", marginBottom: "10px" }}
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
          <div className="col l4 m4 s12">
            <div className="icons">
              <img
                src="/images/optimization.png"
                alt=""
                style={{ width: "60px", marginBottom: "10px" }}
              />
            </div>
            <h4>Profit Optimization</h4>
            <p>
              Know all your costs to avoid underpricing. Never again will you
              use costs that isn't complete for pricing and then , loose money
            </p>
          </div>
          <div className="col l4 m4 s12">
            <div className="icons">
              <img
                src="/images/board.png"
                alt=""
                style={{ width: "60px", marginBottom: "10px" }}
              />
            </div>
            <h4>Generate Financial Statements</h4>
            <p>
              You can create balance sheet , cash flow statement , profit and
              loss statements amongst others as fast as you can order an uber
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
