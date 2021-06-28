import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { withNoAuth } from '../../../hoc';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../redux/actions/auth-actions';
import styles from './signInStyle.module.css';

function SignInForm(props) {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);
  const history = useHistory();

  const onSubmit = async (form) => {
    dispatch(loginUser(form));
    // console.log('in');
  };

  useEffect(() => {
    if (user) {
      history.replace('/');
    }
    // console.log(user);
  }, [history, user]);

  useEffect(() => {
    // console.log(history);
  }, [history, history.location]);

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
          defaultValue="eve.holt@reqres.in"
          {...register('email', { required: true, email: true })}
        />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          className="htmlForm-control"
          id="password"
          defaultValue="cityslicka"
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
