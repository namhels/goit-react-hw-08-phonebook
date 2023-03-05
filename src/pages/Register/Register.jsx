import { Box } from '@chakra-ui/react';
import RegisterForm from 'components/RegisterForm';
import { Headline } from 'components/Title';

const Register = () => {
  return (
    <Box maxW={['full', 'container.sm']} mx="auto" mt={4}>
      <RegisterForm>
        <Headline>Registration</Headline>
      </RegisterForm>
    </Box>
  );
};

export default Register;
