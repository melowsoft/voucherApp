import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <nav className="green darken-3">
          <div className="nav-wrapper">
            <Link to="/dashboard" className="brand-logo">
              VoucherApp
            </Link>
            <a data-target="mobile-demo" className="sidenav-trigger">
              <i className="fa fa-bars" />
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/signout">Signout</Link>
              </li>
            </ul>
          </div>

          <ul className="sidenav" id="mobile-demo">
            <li>
              <Link to="/signin">Signout</Link>
            </li>
          </ul>
        </nav>
      );
    } else {
      return (
        <nav className="green darken-3">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              <img
                style={{ height: "70px", width: "70px" }}
                class="responsive-img"
                src="/logo.png"
                alt="logo"
              />
            </Link>
            <a data-target="mobile-demo" className="sidenav-trigger">
              <i className="fa fa-bars" />
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/signin">Signin</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </ul>
          </div>

          <ul className="sidenav" id="mobile-demo">
            <li>
              <Link to="/signin">Signin</Link>
            </li>
            <li>
              <Link to="/signout">Signup</Link>
            </li>
          </ul>
        </nav>
      );
    }
  }
  render() {
    return <div>{this.renderLinks()}</div>;
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Navbar);
