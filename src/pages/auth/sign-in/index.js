import { withNoAuth } from '../../../hoc';
import SignInForm from '../../../components/forms/signInForm/SignInForm';

function SignInPage() {
  return (
    <div className="container">
      <SignInForm />
    </div>
  );
}

export default withNoAuth(SignInPage);
