import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Profile from '../profile/Profile';
import logo from '../../ui/images/logo.png';

const Navigation = () => {
  const user = useSelector((store) => store.user.user);

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
            <NavLink
              exact
              to="/"
              className="nav_link"
              activeClassName="activeNavLink">
              ვაკანსიები
            </NavLink>
            <NavLink
              to="/company"
              className="nav_link"
              activeClassName="activeNavLink">
              კომპანიები
            </NavLink>
            <NavLink
              to="/aboutus"
              className="nav_link"
              activeClassName="activeNavLink">
              ჩვენს შესახებ
            </NavLink>
            <NavLink
              to="/contact"
              className="nav_link"
              activeClassName="activeNavLink">
              კონტაქტი
            </NavLink>
          </div>

          {user ? (
            <Profile />
          ) : (
            <div className="auth">
              <NavLink to="/signin" className="auth_btn">
                Login
              </NavLink>

              <NavLink to="/signup" className="reg_btn">
                Register
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
