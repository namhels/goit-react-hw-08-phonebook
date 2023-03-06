import { Container } from '@chakra-ui/react';
import LoginForm from 'components/LoginForm';
import { Headline } from 'components/Title';

const Login = () => {
  return (
    <Container maxW={['full', 'container.sm']} mt={4} px={4}>
      <LoginForm>
        <Headline>Log In</Headline>
      </LoginForm>
    </Container>
  );
};

export default Login;
