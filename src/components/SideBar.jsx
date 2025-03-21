import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  changeActiveLink,
  changeSubMenu,
  toggleSideBar,
} from "../reducers/sideBarReducer";

const SideBar = () => {
  const activeLink = useSelector((state) => state?.sidebar?.activeLink);
  const subMenu = useSelector((state) => state?.sidebar?.subMenu);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="sidebar" data-background-color="dark">
      <div className="sidebar-logo">
        {/* Logo Header */}
        <div className="logo-header" data-background-color="dark">
         
          <div className="nav-toggle" onClick={() => dispatch(toggleSideBar())}>
            <button className="btn-toggle">
              <i className="gg-menu-right" />
            </button>
            <button className="btn btn-toggle sidenav-toggler">
              <i className="gg-menu-left" />
            </button>
          </div>
          <button className="topbar-toggler more">
            <i className="gg-more-vertical-alt" />
          </button>
        </div>
        {/* End Logo Header */}
      </div>
      <div className="sidebar-wrapper scrollbar scrollbar-inner">
        <div className="sidebar-content">
          <ul className="nav nav-secondary">
            <li
              className={`nav-item ${
                activeLink === "dashboard" ? "active" : ""
              }`}
              onClick={() => dispatch(changeActiveLink("dashboard"))}
            >
              <a
                data-bs-toggle="collapse"
                // href="#dashboard"
                className="collapsed"
                // aria-expanded="false"
              >
                <i className="fas fa-home" />
                <p onClick={() => navigate("/")}>Dashboard</p>
                {/* <span className="caret" />   */}
              </a>
              {/* <div className="collapse" id="dashboard">
                <ul className="nav nav-collapse">
                  <li>
                    <a href="../demo1/index.html">
                      <span className="sub-item">Dashboard 1</span>
                    </a>
                  </li>
                </ul>
              </div> */}
            </li>
            {/* <li className="nav-section">
              <span className="sidebar-mini-icon">
                <i className="fa fa-ellipsis-h" />
              </span>
              <h4 className="text-section">Components</h4>
            </li> */}
            {/* <li className="nav-item">
              <a data-bs-toggle="collapse" href="#base">
                <i className="fas fa-layer-group" />
                <p>Base</p>
                <span className="caret" />
              </a>
              <div className="collapse" id="base">
                <ul className="nav nav-collapse">
                  <li>
                    <a href="components/avatars.html">
                      <span className="sub-item">Avatars</span>
                    </a>
                  </li>
                  <li>
                    <a href="components/buttons.html">
                      <span className="sub-item">Buttons</span>
                    </a>
                  </li>
                  <li>
                    <a href="components/gridsystem.html">
                      <span className="sub-item">Grid System</span>
                    </a>
                  </li>
                  <li>
                    <a href="components/panels.html">
                      <span className="sub-item">Panels</span>
                    </a>
                  </li>
                  <li>
                    <a href="components/notifications.html">
                      <span className="sub-item">Notifications</span>
                    </a>
                  </li>
                  <li>
                    <a href="components/sweetalert.html">
                      <span className="sub-item">Sweet Alert</span>
                    </a>
                  </li>
                  <li>
                    <a href="components/font-awesome-icons.html">
                      <span className="sub-item">Font Awesome Icons</span>
                    </a>
                  </li>
                  <li>
                    <a href="components/simple-line-icons.html">
                      <span className="sub-item">Simple Line Icons</span>
                    </a>
                  </li>
                  <li>
                    <a href="components/typography.html">
                      <span className="sub-item">Typography</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li> */}
            {/* <li className="nav-item">
              <a data-bs-toggle="collapse" href="#sidebarLayouts">
                <i className="fas fa-th-list" />
                <p>Sidebar Layouts</p>
                <span className="caret" />
              </a>
              <div className="collapse" id="sidebarLayouts">
                <ul className="nav nav-collapse">
                  <li>
                    <a href="sidebar-style-2.html">
                      <span className="sub-item">Sidebar Style 2</span>
                    </a>
                  </li>
                  <li>
                    <a href="icon-menu.html">
                      <span className="sub-item">Icon Menu</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li> */}
            <li
              className={`nav-item ${activeLink === "pd" ? "active" : ""}`}
              onClick={() => dispatch(changeActiveLink("pd"))}
            >
              <a data-bs-toggle="collapse" href="#forms">
                <i className="fas fa-pen-square" />
                <p>Product</p>
                <span className="caret" />
              </a>
              <div
                className={`collapse ${activeLink === "pd" ? "show" : ""}`}
                id="forms"
              >
                <ul className="nav nav-collapse">
                  <li
                    className={`${subMenu === "createPd" ? "active" : ""}`}
                    onClick={() => {
                      navigate("/createOrder");
                      dispatch(changeSubMenu("createPd"));
                    }}
                  >
                    <a>
                      <span className="sub-item">Add Product</span>
                    </a>
                  </li>
                  <li
                    className={`${subMenu === "pdList" ? "active" : ""}`}
                    onClick={() => {
                      navigate("/Lists");
                      dispatch(changeSubMenu("pdList"));
                    }}
                  >
                    <a>
                      <span className="sub-item">Lists</span>
                    </a>
                  </li>
                 
                </ul>
              </div>
            </li>
           
           

           

          

            

            <li
              className={`nav-item ${
                activeLink === "employees" ? "active" : ""
              }`}
              onClick={() => dispatch(changeActiveLink("employees"))}
            >
              
              <div
                className={`collapse ${
                  activeLink === "employees" ? "show" : ""
                }`}
                id="employees"
              >
                <ul className="nav nav-collapse">
                 
                </ul>
              </div>
            </li>
            {/* <li className="nav-item">
              <a href="widgets.html">
                <i className="fas fa-desktop" />
                <p>Widgets</p>
                <span className="badge badge-success">4</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../../documentation/index.html">
                <i className="fas fa-file" />
                <p>Documentation</p>
                <span className="badge badge-secondary">1</span>
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a data-bs-toggle="collapse" href="#submenu">
                <i className="fas fa-bars" />
                <p>Menu Levels</p>
                <span className="caret" />
              </a>
              <div className="collapse" id="submenu">
                <ul className="nav nav-collapse">
                  <li>
                    <a data-bs-toggle="collapse" href="#subnav1">
                      <span className="sub-item">Level 1</span>
                      <span className="caret" />
                    </a>
                    <div className="collapse" id="subnav1">
                      <ul className="nav nav-collapse subnav">
                        <li>
                          <a href="#">
                            <span className="sub-item">Level 2</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="sub-item">Level 2</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a data-bs-toggle="collapse" href="#subnav2">
                      <span className="sub-item">Level 1</span>
                      <span className="caret" />
                    </a>
                    <div className="collapse" id="subnav2">
                      <ul className="nav nav-collapse subnav">
                        <li>
                          <a href="#">
                            <span className="sub-item">Level 2</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <span className="sub-item">Level 1</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
