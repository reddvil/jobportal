import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { autoLoginAction } from './redux/actions';
import { useDispatch } from 'react-redux';
import * as routes from './utils/routePaths';
import HomePage from './pages/HomePage';
import Navigation from './components/navigation';
import Footer from './components/footer';
import JobsProvider from './providers/JobsProvider';
import AboutUs from './pages/aboutUs';
import SignInPage from './pages/auth/sign-in';
import SignUpPage from './pages/auth/sign-up';
import './styles/Reset.css';
import './styles/App.css';
import './styles/Responsive.css';
import './styles/Fonts.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLoginAction());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path={routes.ABOUTUSPAGE_PATH}>
          <AboutUs />
        </Route>

        <Route path={routes.SIGNIN_PATH}>
          <SignInPage />
        </Route>

        <Route path={routes.SIGNUP_PATH}>
          <SignUpPage />
        </Route>

        <Route exact path={routes.HOME_PATH}>
          <JobsProvider>
            <HomePage />
          </JobsProvider>
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
