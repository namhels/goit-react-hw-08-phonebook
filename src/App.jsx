import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Box from 'components/Box';
import { PrivateRoute } from './components/PrivateRoute';
import { RestrictedRoute } from './components/RestrictedRoute';
import SharedLayout from 'components/SharedLayout';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import Loader from 'components/Loader';

const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Box
      pb={4}
      minHeight="100vh"
      backgroundImage="linear-gradient(45deg, rgb(0, 219, 222), rgb(252, 0, 255))"
    >
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
          </Route>
        </Routes>
      )}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Box>
  );
};

export default App;

// {id: 'id-1', name: 'Howard Roark', number: '459-12-56'},
// {id: 'id-2', name: 'Dominique Francon', number: '443-89-12'},
// {id: 'id-3', name: 'John Galt', number: '645-17-79'},
// {id: 'id-4', name: 'Dagny Taggart', number: '888-88-88'},
