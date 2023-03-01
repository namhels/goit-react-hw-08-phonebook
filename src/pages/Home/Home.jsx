import { Container, Heading, Image } from '@chakra-ui/react';

const Home = () => {
  return (
    <Container centerContent>
      <Heading as="h1" textAlign="center">
        Welcome to your Phonebook
      </Heading>
      <Image src="./images/Phonebook1.jpg" alt="Phonebook" boxSize="80vh" />
    </Container>
  );
};

export default Home;
