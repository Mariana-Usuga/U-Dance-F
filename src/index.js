import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import LandingPage from './pages/LandingPage';
import Layout from './components/Layout';
import DetailTeacher from './pages/DetailTeacher';
// import LoginButton from './components/LoginButton/LoginButton';
import CheckYourEmail from './pages/CheckYourEmail';
import App from './App';
import store from './store/index';

const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="teacherDetail/:id" element={<DetailTeacher />} />
        <Route path="active" element={<CheckYourEmail />} />
        <Route path="login" element={<App />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-aj9iwtvo.us.auth0.com"
      clientId="seEglm3LgcJQTuKiolyjA574WeH8JHKE"
      // redirectUri={<CheckYourEmail />}
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <Routing />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
