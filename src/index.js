import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import reportWebVitals from './reportWebVitals';
import LandingPage from './pages/LandingPage';
import Layout from './components/Layout';
import DetailTeacher from './pages/DetailTeacher';
// import LoginButton from './components/LoginButton/LoginButton';
// import App from './App';
import Pay from './pages/Pay';
import ChooseRole from './pages/ChooseRole';
import CourseList from './pages/CourseList';
// import VerticalMenu from './components/VerticalMenu';
import Profile from './components/Profile';
import Search from './pages/Search';
import Layout2 from './components/Layout2';
import CreateCourse from './pages/CreateCourse';
import configureStore from './store/index';

const { store, persistor } = configureStore();

const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ChooseRole />} />

      <Route path="pages" element={<Layout />}>
        <Route path="main" element={<LandingPage />} />
        <Route path="teacherDetail/:id" element={<DetailTeacher />} />
        <Route path="pay" element={<Pay />} />
        <Route path="search" element={<Search />} />
        <Route path="director" element={<Layout2 />}>
          <Route path="courseList" element={<CourseList />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="createCourse" element={<CreateCourse />} />
      </Route>

      <Route
        path="*"
        element={(
          <main style={{ padding: '1rem' }}>
            <p>No hay nada aqui</p>
          </main>
      )}
      />

    </Routes>
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-aj9iwtvo.us.auth0.com"
      clientId="seEglm3LgcJQTuKiolyjA574WeH8JHKE"
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routing />
        </PersistGate>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
