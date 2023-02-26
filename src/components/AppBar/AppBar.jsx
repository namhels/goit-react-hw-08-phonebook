import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import { useAuth } from 'hooks';
import Box from 'components/Box';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box as="header" display="flex" justifyContent="space-between">
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Box>
  );
};

export default AppBar;
