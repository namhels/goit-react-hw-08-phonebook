import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import {
  Avatar,
  AvatarBadge,
  Button,
  Heading,
  Stack,
  Tooltip,
  VStack,
} from '@chakra-ui/react';
import { RiLogoutBoxRLine } from 'react-icons/ri';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const AccountData = () => {
    return (
      <VStack py={2}>
        <Heading as="h3" size="sm">
          {user.name}
        </Heading>
        <Heading as="h3" size="sm">
          {user.email}
        </Heading>
      </VStack>
    );
  };

  return (
    <Stack direction="row" align="center" spacing={5}>
      <VStack>
        <Tooltip
          label={<AccountData />}
          hasArrow
          arrowSize={15}
          bg="purple.500"
          shouldWrapChildren
        >
          <Avatar
            name={user.name}
            // src="https://bit.ly/broken-link"
            colorScheme="purple"
            size="sm"
            cursor="pointer"
          >
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>
        </Tooltip>
        <Heading as="h3" size="sm" color="purple.500">
          {user.name}
        </Heading>
      </VStack>
      <Button
        onClick={() => dispatch(logOut())}
        rightIcon={<RiLogoutBoxRLine />}
        colorScheme="purple"
        variant="ghost"
      >
        Logout
      </Button>
    </Stack>
  );
};

export default UserMenu;
