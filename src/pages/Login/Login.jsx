import { Box } from '@chakra-ui/react';
import LoginForm from 'components/LoginForm';
import { Headline } from 'components/Title';

const Login = () => {
  return (
    <Box maxW={['full', 'container.sm']} mx="auto" mt={4}>
      <LoginForm>
        <Headline>Log In</Headline>
      </LoginForm>
    </Box>
  );
};

export default Login;
