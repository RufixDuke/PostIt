import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';

/**
 * LoggedIn function
 * @param {*} ComposedComponent
 * @return {*} void
 */
export default function (ComposedComponent) {
  /**
   * Authenticate
   */
  class LoggedIn extends Component {
    /**
     * componentWillMount
     * @return {*} void
     */
    componentWillMount() {
      if (this.props.isAuthenticated) {
        browserHistory.push('/dashboard');
      }
    }
    /**
     * render
     * @return {*} void
     */
    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  LoggedIn.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
  };
  /**
   * mapStateToProps(state)
   * @param {*} state
   * @return {*} void
   */
  function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated
    };
  }

  return connect(mapStateToProps)(LoggedIn);
}
