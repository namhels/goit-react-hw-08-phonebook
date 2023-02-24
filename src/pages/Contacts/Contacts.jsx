import Box from 'components/Box';
import ContactList from 'components/ContactList';
// import Form from 'components/Form';
import FormFormik from 'components/Formik';
import { Headline } from 'components/Title';

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
      <Headline HeadlineLogo>Phonebook</Headline>
      <FormFormik />
      <ContactList />
    </Box>
  );
};

export default Contacts;
