import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import { useAuth } from 'hooks';
import { Flex, Spacer } from '@chakra-ui/react';
import { Headline } from 'components/Title';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex as="header" minWidth="max-content" alignItems="center" gap="2">
      <Headline HeadlineLogo>Phonebook</Headline>
      <Spacer />
      <Navigation />
      <Spacer />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Flex>
  );
};

export default AppBar;
