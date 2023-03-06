import { useState } from 'react';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import { useAuth } from 'hooks';
import {
  Box,
  Container,
  Flex,
  Spacer,
  useColorMode,
  useDisclosure,
  Collapse,
  VStack,
} from '@chakra-ui/react';
import Logo from 'components/Logo';
import MenuToggle from 'components/MenuToggle';
import ToggleTheme from 'components/ToggleTheme';

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
    <Box as="header" py={4} bg={colorMode === 'dark' ? 'cyan.600' : 'cyan.200'}>
      <Container maxW={['full', 'container.lg']}>
        <Flex align="center">
          <Logo />
          <Spacer />
          <Box display={{ base: 'none', md: 'contents' }}>
            <Navigation />
            <Spacer />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Box>
          <MenuToggle onClick={toggle} isMenuOpen={isMenuOpen} />
          <ToggleTheme />
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
