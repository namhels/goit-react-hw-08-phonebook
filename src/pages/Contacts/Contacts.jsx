import { Box } from '@chakra-ui/react';
import ContactList from 'components/ContactList';
import FormFormik from 'components/Formik';

const Contacts = () => {
  return (
    <Box maxW={['full', 'container.sm']} mx="auto" mt={4} px={4}>
      <FormFormik />
      <ContactList />
    </Box>
  );
};

export default Contacts;
