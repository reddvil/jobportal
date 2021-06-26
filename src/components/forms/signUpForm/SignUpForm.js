import {Link} from 'react-router-dom'
import styles from '../signInForm/signInStyle.module.css'

const SignUpForm = () => {
    return (
        <div>
            <form className={styles.authform}>
        <label htmlFor="email">
          <b>E-mail</b>
        </label>
        <input
          type="email"
          className="htmlForm-control"
          id="email"

         
        />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          className="htmlForm-control"
          id="password"
    
      
        />

    <label htmlFor="psw-repeat">
          <b>Repeat Password</b>
        </label>
        <input
          type="password"
          className="htmlForm-control"
          id="password-repeat"
    
      
        />

        <button type="submit">Register</button>
        <label>
          <input type="checkbox" name="remember" /> Remember me
          <br /> Not Registered yet? <Link to="/signin">SIGN IN</Link>
        </label>
      </form>
        </div>
    )
}

export default SignUpForm
