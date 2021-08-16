import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { autoLoginAction } from './redux/actions';
import { useDispatch } from 'react-redux';
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
    <div className='App'>
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <JobsProvider>
            <HomePage />
          </JobsProvider>
        </Route>

        <Route path='/aboutus'>
          <AboutUs />
        </Route>

        <Route path='/signin'>
          <SignInPage />
        </Route>

        <Route path='/signup'>
          <SignUpPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
