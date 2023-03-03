import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import { useAuth } from 'hooks';
import { Box, Container, Flex, Spacer, useColorMode } from '@chakra-ui/react';
import { Headline } from 'components/Title';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  const { colorMode } = useColorMode();

  return (
    <Box as="header" bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'}>
      <Container maxW={['full', 'container.lg']}>
        <Flex alignItems="center">
          <Headline HeadlineLogo>Phonebook</Headline>
          <Spacer />
          <Navigation />
          <Spacer />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Flex>
      </Container>
    </Box>
  );
};

export default AppBar;
