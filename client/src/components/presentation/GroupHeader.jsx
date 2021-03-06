import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

/**
 * @description GroupHeader component
 * @return {*} div
 */
const GroupHeader = ({ notifications, children }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <ReactTooltip />
        <div className="col s12 m12">
          <div className="container-fluid">
            <div className="row">
              <div className="col s12">
                <h5 className="white-text text-darken-4">Your Group List
                  <Link to="/group">
                    <i
                      className="fa fa-plus-square add-group"
                      data-tip="Create New Group"
                      aria-hidden="true"
                    />
                  </Link>
                  { (notifications.length !== 0) ?
                    (
                      <Link
                        to="/notification"
                        className="mybell on-notification"
                      >
                        <i
                          className="fa fa-bell-o"
                          data-tip="You have new Notification(s)"
                          aria-hidden="true"
                        />
                      </Link>
                    ) :
                    (
                      <Link to="/notification" className="mybell">
                        <i
                          className="fa fa-bell-o"
                          data-tip="No new Notification"
                          aria-hidden="true"
                        />
                      </Link>
                    )
                  }
                </h5>
              </div>
            </div>
            <hr />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

GroupHeader.propTypes = {
  notifications: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired
};

export default GroupHeader;
