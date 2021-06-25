import { Redirect } from 'react-router';
import { AUTH_TOKEN } from '../utils/constants';
import { HOME } from '../utils/routePaths';

export const withAuthProtected = (Component) => {
  const WithAuthProtected = (props) => {
    const token = JSON.parse(localStorage.getItem(AUTH_TOKEN));
    if (!token) return <Redirect to={HOME} />;
    return <Component {...props} />;
  };

  return WithAuthProtected;
};

export default withAuthProtected;
