import React from 'react';
import { Link } from 'react-router-dom';

import '../vendors/styles/core.css';
import '../vendors/styles/icon-font.min.css';
import '../vendors/styles/style.css';

const Header = () => {
    return (
        <div className="admin-header">
        <div className="admin-header-left">
          <div className="menu-icon bi bi-list" />
          <div
            className="search-toggle-icon bi bi-search"
            data-toggle="admin-header_search"
          />
          <div className="admin-header-search">
            <form>
              <div className="form-group mb-0">
                <i className="dw dw-search2 search-icon" />
                <input
                  type="text"
                  className="form-control search-input"
                  placeholder="Search Here"
                />
                <div className="dropdown">
                  <a
                    className="dropdown-toggle no-arrow"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                  >
                    <i className="ion-arrow" />
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="admin-header-right">
          <div className="dashboard-setting user-notification">
            <div className="dropdown">
              <Link
                className="dropdown-toggle no-arrow"
                to="/CourseAdd"
              >
                <i className="micon bi bi-receipt-cutoff" />
              </Link>
            </div>
          </div>
          <div className="dashboard-setting user-notification">
          <div className="dropdown">
      <Link
        className="dropdown-toggle no-arrow"
        to="/Profile" 
      >
        <i className="micon bi bi-person-fill" />
      </Link>
    </div>

          </div>
          <div className="user-notification">
            <div className="dropdown">
              <Link
                className="dropdown-toggle no-arrow"
                to="/coursestats"
                role="button"
                data-toggle="dropdown"
              >
                
                <i className="micon bi bi-bar-chart-fill" />

              </Link>
            </div>
          </div>
          <div className="user-info-dropdown">
            <div className="dropdown">
              <a
                className="dropdown-toggle"
               
        
              >
                <span className="user-icon">
                  <img src="assets/img/photo1.jpg" alt="" />
                </span>
                <span className="user-name">John Angelo</span>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    );
};

export default Header;