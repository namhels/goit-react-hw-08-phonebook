import { Heading } from '@chakra-ui/react';

const Logo = () => {
  return (
    <Heading
      size="2xl"
      transition="all 300ms"
      sx={{
        WebkitTextStroke: '4px #f0ece9',
        WebkitTextFillColor: 'transparent',
        ':hover': {
          transform: 'scale(1.1)',
          filter: 'drop-shadow(4px 8px 3px #9e3e9f)',
        },
      }}
    >
      PhoneBook
    </Heading>
  );
};

export default Logo;
