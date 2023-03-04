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
  VStack,
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

  const toggle = () => {
    setisMenuOpen(!isMenuOpen);
    onToggle();
  };

  return (
    <Box as="header" bg={colorMode === 'dark' ? 'orange.600' : 'orange.200'}>
      <Container maxW={['full', 'container.lg']}>
        <Flex alignItems="center">
          <Headline HeadlineLogo>Phonebook</Headline>
          <Spacer />
          <Box display={{ base: 'none', md: 'contents' }}>
            <Navigation />
            <Spacer />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Box>
          <MenuToggle onClick={toggle} isMenuOpen={isMenuOpen} />
        </Flex>
        <Box display={{ base: 'contents', md: 'none' }}>
          <Collapse in={isOpen} animateOpacity>
            <VStack spacing={4} align="center">
              <Navigation />
              {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </VStack>
          </Collapse>
        </Box>
      </Container>
    </Box>
  );
};

export default AppBar;
