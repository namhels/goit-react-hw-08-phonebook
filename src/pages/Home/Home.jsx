import { Container, Heading, Image } from '@chakra-ui/react';

const Home = () => {
  return (
    <Container centerContent>
      <Heading as="h1" textAlign="center" color="white">
        Welcome to your Phonebook
      </Heading>
      <Image
        src="https://play-lh.googleusercontent.com/h6z0ro9wtsxb20fgLaIDXJrXtWqDyvm_Bnfk-q3JFbg08R2PgNq8ZSAoUX1DYDXLofPD"
        alt="Phonebook"
      />
    </Container>
  );
};

export default Home;
