import { Link } from 'react-router-dom';
import '../vendors/styles/core.css';
import '../vendors/styles/icon-font.min.css';
import '../vendors/styles/style.css';

const Sidebar = () => {
    return (
        <div className="left-side-bar">
        <div className="brand-logo">
          <a href="index.html">
            <img src="assets/img/1logo.jpg" alt="" className="dark-logo" />
            <img src="assets/img/1logo.jpg" alt="" className="light-logo" />
          </a>
          <div className="close-sidebar" data-toggle="left-sidebar-close">
            <i className="ion-close-round" />
          </div>
        </div>
        <div className="menu-block customscroll">
          <div className="sidebar-menu">
            <li>
              <Link to="/Profile" className="dropdown-toggle no-arrow">
                <span className="micon bi bi-person-fill" />
                <span className="mtext">Profile</span>
              </Link>
            </li>
            <li>
  <Link to="/coursestats" className="dropdown-toggle no-arrow">
    <span className="micon bi bi-bar-chart-fill" />
    <span className="mtext">Statistics</span>
  </Link>
</li>

            <li>
              <Link to="/CourseAdd" className="dropdown-toggle no-arrow">
                <span className="micon bi bi-receipt-cutoff" />
                <span className="mtext">Add Course</span>
              </Link>
            </li>
            <li>
              <div className="dropdown-divider" />
            </li>
          </div>
        </div>
      </div>
    );
};

export default Sidebar;