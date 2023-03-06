import { Container } from '@chakra-ui/react';
import RegisterForm from 'components/RegisterForm';
import { Headline } from 'components/Title';

const Register = () => {
  return (
    <Container maxW={['full', 'container.sm']} mt={4} px={4}>
      <RegisterForm>
        <Headline>Registration</Headline>
      </RegisterForm>
    </Container>
  );
};

export default Register;
