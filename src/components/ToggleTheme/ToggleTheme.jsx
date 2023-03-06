import { FaMoon, FaSun } from 'react-icons/fa';
import { IconButton, useColorMode } from '@chakra-ui/react';

const ToggleTheme = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <IconButton
      variant="ghost"
      colorScheme="cyan"
      aria-label="toggle theme"
      rounded="full"
      size="md"
      onClick={toggleColorMode}
      icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />}
    />
  );
};

export default ToggleTheme;
