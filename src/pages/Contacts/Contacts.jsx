import Box from 'components/Box';
import ContactList from 'components/ContactList';
// import Form from 'components/Form';
import FormFormik from 'components/Formik';

const Contacts = () => {
  return (
    <Box
      bg="backgroundPrimary"
      boxShadow="small"
      borderRadius={8}
      p={5}
      maxWidth="435px"
      mx="auto"
    >
      <FormFormik />
      <ContactList />
    </Box>
  );
};

export default Contacts;
