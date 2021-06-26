import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navigation from './components/navigation';
import Footer from './components/footer';
import SignIn from './pages/auth/sign-in';
import SignUp from './pages/auth/sign-up';
import AboutUs from './pages/aboutUs';
import './styles/Reset.css';
import './styles/App.css';
import './styles/Responsive.css';
import './styles/Fonts.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path='/aboutus'>
            <AboutUs />
        </Route>

        <Route path="/signin">
          <SignIn />
        </Route>

        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
