import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './style/App.scss';
import './style/Footer.scss';
import { ReactComponent as GitHub } from './assets/github.svg';
import { ReactComponent as LinkedIn } from './assets/linkedin.svg';
import logo from './logo.svg';
import Journal from './components/Journal';
import LandingPage from './components/LandingPage';
import About from './components/About';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});
  const [entries, setEntries] = useState({});
  const [isLoggedIn, setLoginStatus] = useState(false);
  const [error, setError] = useState(false);

  const authenticateUser = e => {
    console.log('inside authenticate');
    e.preventDefault();
    if (!validateForm()) {
      setError(false);
      return;
    }
    const userDataToSend = {
      username,
      password,
    };
    axios
      .post("/authuser", userDataToSend)
      .then(res => {
        console.log(res.data);
        const userData = res.data.user;
        const entriesData = res.data.entries;
        setUser(userData);
        setEntries(entriesData);
        setError(false);
        setLoginStatus(true);
      })
      .catch(err => {
        setError(true);
        console.log(err);
      });
  };

  const validateForm = () => {
    return username.length > 0 && password.length > 0;
  };

  return (
    <div className="app">
      <header className="header">
        <Link to="/">
          <div className="header__logo">
            <img src={logo} className="header__logo__img" alt="logo" />
            <h3 className="header__logo__txt">thoughtsflow</h3>
          </div>
        </Link>
        <nav className="navbar">
          <ul className="navbar__menu">
            {isLoggedIn && <li className="navbar__menu__item"><Link to="/newpost">New Entry</Link></li>}
            {isLoggedIn && <li className="navbar__menu__item"><Link to="/profile">{user.name}</Link></li>}
            {isLoggedIn && <li className="navbar__menu__item"><Link to="/">Logout</Link></li>}
            {!isLoggedIn && <li className="navbar__menu__item"><Link to="/about">About</Link></li>}
            {!isLoggedIn && <li className="navbar__menu__item"><Link to="/login">Sign In</Link></li>}
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            {isLoggedIn && <Journal entries={entries} />}
            {!isLoggedIn && (
              <LandingPage
                authenticateUser={authenticateUser}
                setUsername={setUsername}
                username={username}
                setPassword={setPassword}
                password={password}
                error={error}
              />
            )}
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route to="/login">
            <LandingPage />
          </Route>
        </Switch>
      </main>
      <footer className="footer">
        <div className="footer__sns">
          <a href="https://www.github.com/ghdgnsvy" className="footer__sns__link">
            <GitHub className="footer__sns__logo" />
          </a>
          <a href="https://www.linkedin.com/in/brianhhong" className="footer__sns__link">
            <LinkedIn className="footer__sns__logo" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
