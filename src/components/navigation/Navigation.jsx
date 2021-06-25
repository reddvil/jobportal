import { NavLink } from 'react-router-dom';
import logo from '../../ui/images/logo.png';

const Navigation = () => {
  return (
    <header className="header" id="navbar">
      <div className="container">
        <div className="inner_header">
          <div className="logo">
            <NavLink to="/">
              <img src={logo} alt="logo" className="logo_img" />
            </NavLink>
          </div>
          <div className="navi">
            <NavLink to="/" className="nav_link">
              ვაკანსიები
            </NavLink>
            <NavLink to="/" className="nav_link">
              კომპანიები
            </NavLink>
            <NavLink to="/" className="nav_link">
              რეკლამა
            </NavLink>
            <NavLink to="/" className="nav_link">
              კონტაქტი
            </NavLink>
          </div>
          {/* <div className="profile"><div className="avatar"><img src="img/avatar.png" alt="" className="avatar_img"></div><NavLink to="" className="avtar_title">John Doe</NavLink><i className="fas fa-caret-down"></i></div> */}

          <div className="auth">
            <NavLink to="/signin" className="auth_btn">
              Login
            </NavLink>

            <NavLink to="/signup" className="reg_btn">
              Register
            </NavLink>
          </div>

          <div className="responsive-menu">
            <i className="far fa-bars"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
