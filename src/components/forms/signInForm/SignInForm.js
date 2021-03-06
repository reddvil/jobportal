import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { withNoAuth } from '../../../hoc';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../../redux/actions/auth-actions';
import { login } from '../../../services/auth';
import styles from './signInStyle.module.css';

function SignInForm(props) {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);
  const history = useHistory();

  const onSubmit = async (data) => {
    const loggedIn = await login(data);
    console.log(loggedIn);
    localStorage.setItem('auth.token', JSON.stringify(loggedIn.token));
    dispatch(setUser(loggedIn.token));
  };

  useEffect(() => {
    if (user) {
      history.replace('/');
    }
  }, [history, user]);

  return (
    <div>
      <form className={styles.authform} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">
          <b>E-mail</b>
        </label>
        <input
          type="email"
          className="htmlForm-control"
          id="email"
          placeholder="Enter your email"
          {...register('email', { required: true, email: true })}
        />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          className="htmlForm-control"
          id="password"
          placeholder="Enter your password"
          {...register('password', { required: true })}
        />

        <button type="submit">Login</button>
        <label>
          <input type="checkbox" name="remember" /> Remember me
          <br /> Not Registered yet? <Link to="/signup">Register</Link>
        </label>
      </form>
    </div>
  );
}

export default withNoAuth(SignInForm);
