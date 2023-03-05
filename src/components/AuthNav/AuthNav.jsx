import { NavLink } from 'react-router-dom';
import { ButtonGroup, Button } from '@chakra-ui/react';
import { IoHomeSharp } from 'react-icons/io5';
import { RiContactsBookFill } from 'react-icons/ri';

const AuthNav = () => {
  return (
    <ButtonGroup variant="outline" colorScheme="purple" spacing="6">
      <Button
        as={NavLink}
        to="/register"
        leftIcon={<IoHomeSharp />}
        transition="all 0.5s"
        _activeLink={{
          color: 'white',
          bg: 'purple.500',
          borderColor: 'purple.500',
        }}
      >
        Sign Up
      </Button>
      <Button
        as={NavLink}
        to="/login"
        leftIcon={<RiContactsBookFill />}
        transition="all 0.5s"
        _activeLink={{
          color: 'white',
          bg: 'purple.500',
          borderColor: 'purple.500',
        }}
      >
        Log In
      </Button>
    </ButtonGroup>
  );
};

export default AuthNav;
