import { Box, useColorMode } from '@chakra-ui/react';
import ContactList from 'components/ContactList';
// import Form from 'components/Form';
import FormFormik from 'components/Formik';

const Contacts = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'}
      boxShadow="small"
      borderRadius={8}
      p={5}
      maxW={['full', 'container.sm']}
      mx="auto"
      mt={4}
    >
      <FormFormik />
      <ContactList />
    </Box>
  );
};

export default Contacts;
