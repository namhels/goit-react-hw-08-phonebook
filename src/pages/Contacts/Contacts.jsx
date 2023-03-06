import { Container } from '@chakra-ui/react';
import ContactList from 'components/ContactList';
import FormFormik from 'components/Formik';

const Contacts = () => {
  return (
    <Container maxW={['full', 'container.sm']} mt={4} px={4}>
      <FormFormik />
      <ContactList />
    </Container>
  );
};

export default Contacts;
