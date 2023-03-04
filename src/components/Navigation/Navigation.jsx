import { NavLink } from 'react-router-dom';
import { ButtonGroup, Button } from '@chakra-ui/react';
import { useAuth } from 'hooks';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <ButtonGroup size="sm" variant="outline" colorScheme="purple" spacing="6">
      <Button
        as={NavLink}
        to="/"
        transition="all 0.5s"
        _focus={{
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
          transition="all 0.5s"
          _focus={{
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
