import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import AuthenticationActions from '../../actions/authActions';

/**
 * The Navigation Bar class
 */
class NavigationBar extends Component {
  /**
   * constructor
   * @return {*} void
   */
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }
  /**
   * logout function that calls the action that removes jwt token from local storage
   * @param {*} e
   * @return {*} void
   */
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }
  /**
   * render
   * @return {*} void
   */
  render() {
    const { isAuthenticated } = this.props.auth;
    const userLinks = (
      <div>
        <ul className="right hide-on-med-and-down lgout">
          <li>
            <a
              href=""
              onClick={this.logout}
              className="waves-effect waves-light btn"
            >Logout</a>
          </li>
        </ul>
        <ul className="side-nav" id="mobile-demo">
          <li><a href="./home" className="waves-effect waves-light btn">Home</a></li>
          <li><a href="./dashboard" className="waves-effect waves-light btn">Dashboard</a></li>
          <li><a href="./users" className="waves-effect waves-light btn">Users</a></li>
          <li>
            <a
              href=""
              onClick={this.logout}
              className="waves-effect waves-light btn"
            >Logout</a>
          </li>
        </ul>
      </div>
    );

    const guestLinks = (
      <div className="col s10">
        <ul className="right hide-on-med-and-down">
          <li><Link to="/login" className="waves-effect waves-light btn">Login</Link></li>
          <li><Link to="/signup" className="waves-effect waves-light btn">Sign Up</Link></li>
        </ul>
        <ul className="side-nav" id="mobile-demo">
          <li><Link to="/login" className="waves-effect waves-light btn">Login</Link></li>
          <li><Link to="/signup" className="waves-effect waves-light btn">Sign Up</Link></li>
        </ul>
      </div>
    );

    return (
      <div className="container-fluid">
        <header>
          <nav className="black navbar navbar-default">
            <div className="nav-wrapper">
              <div className="container-fluid">
                <div className="row">
                  <div className="col s2" >
                    <Link
                      to="/dashboard"
                      className="brand-logo"
                    >
                      <img
                        className="postlogo"
                        src="https://www.freelogoservices.com/api/main/images/1j+ojl1FOMkX9WypfBe43D6kjfaDpR5KmB...JwXs1M3EMoAJtlSAsgfNr...f4+"
                        alt="postit"
                      />
                    </Link>
                    <a
                      href=""
                      data-activates="mobile-demo"
                      className="button-collapse"
                    >
                      <i className="material-icons">menu</i>
                    </a>
                  </div>
                  { isAuthenticated ? userLinks : guestLinks }
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

const stateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const dispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(AuthenticationActions.logout());
    }
  };
};

export default connect(stateToProps, dispatchToProps)(NavigationBar);