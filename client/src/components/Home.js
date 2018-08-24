import React from "react";

export default () => {
  return (
    <div>
      <section className="first-section">
        <div className="box">
          <div style={{ flexGrow: 2 }}>
            <img src="/report.svg" alt="" className="img-responsive" />
          </div>
          <div className="main-message" style={{ flexGrow: 8 }}>
            <center>
              <div style={{ marginTop: 50 }}>
                <strong>
                  <h1 className="top-text">
                    {" "}
                    Profit - Cost
                    <br />
                    is <span style={{ color: "red" }}>Not</span>
                    <br />= Profit
                  </h1>
                </strong>
                <h4>
                  Let's help you Stop Loosing Money <br />
                  To Cash Flow And Pricing Problems...
                </h4>
              </div>
              <div style={{ marginTop: 50 }}>
                <button className="Ad-button">Start 30days Free Trial</button>
                <p>No credit Card required</p>
              </div>
            </center>
          </div>
        </div>
      </section>
    </div>
  );
};
