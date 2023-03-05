import { NavLink } from 'react-router-dom';
import { ButtonGroup, Button } from '@chakra-ui/react';
import { IoHomeSharp } from 'react-icons/io5';
import { RiContactsBookFill } from 'react-icons/ri';
import { useAuth } from 'hooks';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <ButtonGroup variant="outline" colorScheme="purple" spacing="6">
      <Button
        as={NavLink}
        to="/"
        leftIcon={<IoHomeSharp />}
        transition="all 0.5s"
        _activeLink={{
          color: 'white',
          bg: 'purple.500',
          borderColor: 'purple.500',
        }}
      >
        Home
      </Button>
      {isLoggedIn && (
        <Button
          as={NavLink}
          to="/contacts"
          leftIcon={<RiContactsBookFill />}
          transition="all 0.5s"
          _activeLink={{
            color: 'white',
            bg: 'purple.500',
            borderColor: 'purple.500',
          }}
        >
          Contacts
        </Button>
      )}
    </ButtonGroup>
  );
};

export default Navigation;
