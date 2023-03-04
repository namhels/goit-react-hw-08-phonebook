import { useState } from 'react';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import { useAuth } from 'hooks';
import {
  Box,
  IconButton,
  Container,
  Flex,
  Spacer,
  useColorMode,
  useDisclosure,
  Collapse,
} from '@chakra-ui/react';
import { AiOutlineCloseCircle, AiOutlineMenuFold } from 'react-icons/ai';
import { Headline } from 'components/Title';

const MenuToggle = ({ onClick, isMenuOpen }) => {
  return (
    <IconButton
      variant="ghost"
      colorScheme="cyan"
      aria-label="Call Sage"
      fontSize="20px"
      display={{ base: 'flex', md: 'none' }}
      // onClick={onToggle}
      onClick={onClick}
      icon={isMenuOpen ? <AiOutlineCloseCircle /> : <AiOutlineMenuFold />}
    />
  );
};

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  const { colorMode } = useColorMode();
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const { isOpen, onToggle } = useDisclosure();

  const toggle = () => setisMenuOpen(!isMenuOpen);

  return (
    <Box as="header" bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'}>
      <Container maxW={['full', 'container.lg']}>
        <Flex alignItems="center">
          <Headline HeadlineLogo>Phonebook</Headline>
          <Spacer />
          <Navigation />
          <Spacer />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
          <MenuToggle
            // onClick={onToggle}
            onClick={(toggle, onToggle)}
            isMenuOpen={isMenuOpen}
          />
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <Box
            p="40px"
            color="white"
            mt="4"
            bg="teal.500"
            rounded="md"
            shadow="md"
          >
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Box>
        </Collapse>
      </Container>
    </Box>
  );
};

export default AppBar;
