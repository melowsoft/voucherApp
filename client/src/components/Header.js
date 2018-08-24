import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./HeaderStyle.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand>
              <Link to="/">
                {" "}
                <img
                  className="site-logo"
                  style={{ width: 100, marginTop: -7 }}
                  src="/logo.png"
                  alt="logo"
                />
              </Link>
            </NavbarBrand>
            <NavbarBrand>
              <h2>GrowBaby</h2>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/signout">
                    <NavLink className="btn btn-outline-success">
                      Signout
                    </NavLink>
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    } else {
      return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">
              <img
                src="/logo.png"
                style={{ width: 100, marginTop: -7 }}
                alt="logo"
              />
            </NavbarBrand>
            <NavbarBrand>
              <h2>GrowBaby</h2>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <div className="menu-item">
                  <NavItem>
                    <NavLink className="btn btn-outline-success">
                      <Link to="#">About</Link>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="btn btn-outline-success">
                      <Link to="#">Pricing</Link>
                    </NavLink>
                  </NavItem>
                </div>
                <NavItem className="nav-item">
                  <Link to="/signin">
                    {" "}
                    <NavLink className="btn btn-outline-success">
                      Signin
                    </NavLink>
                  </Link>
                </NavItem>
                <NavItem className="nav-item">
                  <Link to="/signup">
                    <NavLink className="btn btn-outline-success">
                      Signup
                    </NavLink>
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }

  render() {
    return <div className="header">{this.renderLinks()}</div>;
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
