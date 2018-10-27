import React from "react";

export default () => {
  return (
    <div>
      <section className="first-section">
        <div className="row">
          <div
            className="img-section col l6 m12 s12"
            style={{ padding: "2rem" }}
          >
            <img src="/report.svg" alt="" class="responsive-img" />
          </div>
          <div className="col l1" />
          <div className="main-message col l5 m12 s12">
            <center>
              <div className="text-only" style={{ marginTop: 50 }}>
                <h5 style={{ marginTop: "10px" }}>Did you know?</h5>
                <strong>
                  <h2 className="top-text">
                    {" "}
                    Revenue - Cost
                    <br />
                    is <span style={{ color: "green" }}>Not</span> = Profit
                  </h2>
                </strong>
                <h5 style={{ marginTop: "10px" }}>
                  Let's help you Stop Loosing Money <br />
                  To Cash Flow And Pricing Problems...
                </h5>
              </div>
              <div style={{ marginTop: 20 }}>
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
    </div>
  );
};
