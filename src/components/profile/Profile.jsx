import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/actions/auth-actions';

const Profile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogOut = () => {
    localStorage.removeItem('auth.token');
    dispatch(logOut());
    history.replace('/signin');
  };

  return (
    <div className="profile">
      <div className="avatar">
        <img src="img/avatar.png" alt="" className="avatar_img" />
      </div>

      <Link to="/profile" className="avtar_title">
        John Doe
      </Link>

      <i className="fas fa-caret-down"></i>

      <button className="profile-btn" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
};

export default Profile;
