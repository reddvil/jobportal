import { withNoAuth } from "../../../hoc"
import SignUpForm from "../../../components/forms/signUpForm/SignUpForm"

const SignUpPage = () => {
    return (
        <div>
            <SignUpForm />
        </div>
    )
}

export default withNoAuth(SignUpPage)
