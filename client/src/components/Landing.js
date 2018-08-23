import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import Header from "./Header";

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <Header />

        <section className="Top-section flex-main row">
          <div className="flex-image">
            <img className="img-top img-responsive" src="/report.svg" alt="" />
          </div>

          <div className="flex-text col-sm-6">
            <div className="first">
              <h2>
                {" "}
                <strong>
                  Revenue - Cost is
                  <br />
                  <span className="text-danger">Not</span> = Profit
                </strong>{" "}
              </h2>
              <p>
                Let's Help You Stop Loosing Money <br />
                To Cash Flow And Pricing Problems
              </p>
            </div>
            <div className="second">
              <h3 className="free">30 days free trial</h3>
              <p className="free">No Credit Card required</p>
              <button type="button" class="btn btn-outline-success btn-lg">
                Start Free Trial
              </button>
            </div>
          </div>
        </section>

        <Container className="row second">
          <Row>
            <Col>
              <img
                className="svg-image"
                src="/images/line-chart.svg"
                alt=""
                style={{ width: 100, height: 100 }}
              />
              <h4>Price Optimization</h4>
              <p>
                You will be able to set prices for your goods and services from
                least profitable to most profitable price suggestions but never
                again loose money on poor pricing
              </p>
            </Col>

            <Col>
              <img
                className="svg-image"
                src="/images/monitor.svg"
                alt=""
                style={{ width: 100, height: 100 }}
              />
              <h4>Cash Flow Management</h4>
              <p>
                Know when you are loosing money at all time , what you are
                spending the most on , why your revenue is going up or dropping
                , what you need to cut down cost on amongst other thing. You
                will have full knowledge about your cash movements and control
                as well
              </p>
            </Col>

            <Col>
              <img
                className="svg-image"
                src="/images/miscellaneous.svg"
                alt=""
                style={{ width: 100, height: 100 }}
              />
              <h4>Easy Book Keeping</h4>
              <p>
                Record all sales and expenses as they come in , fill in your
                different expenses for cash flow statements and other business
                statements you will need if you ever want to seek funding or
                share with your team
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm="4">
              <img
                className="svg-image"
                src="/images/line-chart.svg"
                alt=""
                style={{ width: 100, height: 100 }}
              />
              <h4>Profit Optimization</h4>
              <p>
                Know all your costs to avoid underpricing. Never again will you
                use costs that isn't complete for pricing and then , loose money
              </p>
            </Col>

            <Col sm="4">
              <img
                className="svg-image"
                src="/images/growth.svg"
                alt=""
                style={{ width: 100, height: 100 }}
              />
              <h4>Generate Financial Statements</h4>
              <p>
                You can create balance sheet , cash flow statement , profit and
                loss statements amongst others as fast as you can order an uber
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Landing;
