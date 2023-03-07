import { Heading, useColorMode } from '@chakra-ui/react';

const Logo = () => {
  const { colorMode } = useColorMode();

  return (
    <Heading
      fontSize="5xl"
      transition="all 300ms"
      sx={
        colorMode === 'dark'
          ? {
              WebkitTextStroke: '4px #f0ece9d1',
              WebkitTextFillColor: 'transparent',
              ':hover': {
                transform: 'scale(1.1)',
                filter: 'drop-shadow(4px 8px 3px #9e3e9f)',
              },
            }
          : {
              WebkitTextStroke: '4px #0ca7a4',
              WebkitTextFillColor: 'transparent',
              ':hover': {
                transform: 'scale(1.1)',
                filter: 'drop-shadow(4px 8px 3px #9e3e9f)',
              },
            }
      }
    >
      PhoneBook
    </Heading>
  );
};

export default Logo;
