import { Link } from 'react-router-dom';
import styles from './signInStyle.module.css';

function SignInPage() {
  return (
    <div className="container">
      <form class={styles.authform}>
        <label for="email">
          <b>E-mail</b>
        </label>
        <input type="text" placeholder="Enter E-mail" name="email" required />

        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />

        <button type="submit">Login</button>
        <label>
          <input type="checkbox" checked="" name="remember" /> Remember me
          <br /> Not Registered yet? <Link to="/signup">Register</Link>
        </label>
      </form>
    </div>
  );
}

export default SignInPage;
