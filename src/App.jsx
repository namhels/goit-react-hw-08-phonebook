import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Box from 'components/Box';
import SharedLayout from 'components/SharedLayout';

const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));

const App = () => {
  return (
    <Box
      p={5}
      backgroundImage="linear-gradient(45deg, rgb(0, 219, 222), rgb(252, 0, 255))"
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Navigate to="register" />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
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
