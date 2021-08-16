import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/actions/auth-actions';
import avatar from '../../ui/svg/avatar.svg'

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
        <img src={avatar} alt="" className="avatar_img" />
      </div>

      <Link to="/profile" className="avtar_title">
        Gela Kutuxovi
      </Link>

      <button className="profile-btn" onClick={handleLogOut}>
        Log out
      </button>
    </div>
  );
};

export default Profile;
