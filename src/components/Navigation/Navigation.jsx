import { NavLink } from 'react-router-dom';
import { ButtonGroup, Button } from '@chakra-ui/react';
import { useAuth } from 'hooks';

// const focusBtn = {
// transition = 'all 0.5s';
//   ':focus': {
//     color: 'white',
//     bg: 'purple.500',
//     borderColor: 'purple.500',
//   },
//   ':active': {
//     transform: 'scale(1.8)',
//   },
// };

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <ButtonGroup size="sm" variant="outline" colorScheme="purple" spacing="6">
      <Button
        as={NavLink}
        to="/"
        transition="all 0.5s"
        // sx={{ focusBtn }}
        _focus={{
          color: 'white',
          bg: 'purple.500',
          borderColor: 'purple.500',
        }}
        _active={{
          transform: 'scale(1.8)',
        }}
      >
        Home
      </Button>
      {isLoggedIn && (
        <Button as={NavLink} to="/contacts">
          Contacts
        </Button>
      )}
    </ButtonGroup>

    // <nav>
    //   <NavLink to="/">Home</NavLink>
    //   {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    // </nav>
  );
};

export default Navigation;
