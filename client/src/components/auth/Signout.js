import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Link } from "react-router-dom";

class Signout extends Component {
  componentDidMount() {
    this.props.signout();
  }

  render() {
    return (
      <div>
        <section className="first-section">
          <div className="row">
            <div
              className="img-section col l6 m12 s12"
              style={{ padding: "2rem" }}
            >
              <img src="/report.svg" alt="" className="responsive-img" />
            </div>
            <div className="col l1" />
            <div className="main-message col l5 m12 s12">
              <center>
                <div className="text-only" style={{ marginTop: 50 }}>
                  <h5 style={{ marginTop: "10px" }}>See you soon</h5>
                  <strong>
                    <h2 className="top-text">
                      {" "}
                      Thank you
                      <br />
                      for your patronage
                    </h2>
                  </strong>
                  <h5 style={{ marginTop: "10px" }}>
                    purchasing vouchers has been <br />
                    made easy with our voucher app...
                  </h5>
                </div>
                <div style={{ marginTop: 20 }}>
                  <strong>
                    {" "}
                    <Link to="/dashboard">
                      {" "}
                      <button className="btn-large green darken-3 waves-effect waves-light">
                        Start here
                      </button>
                    </Link>
                  </strong>
                  <p>Signup to begin</p>
                </div>
              </center>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Signout);
