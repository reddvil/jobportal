import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { login } from '../../../services';
import { withNoAuth } from '../../../hoc';
import styles from './signInStyle.module.css';

function SignInForm(props) {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = async (data) => {
    const loggedIn = await login(data);

    localStorage.setItem('auth.token', JSON.stringify(loggedIn.token));
    history.replace('/');
  };

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
