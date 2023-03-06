import { IconButton } from '@chakra-ui/react';
import { AiOutlineCloseCircle, AiOutlineMenuFold } from 'react-icons/ai';

const MenuToggle = ({ onClick, isMenuOpen }) => {
  return (
    <IconButton
      variant="ghost"
      colorScheme="cyan"
      aria-label="Call Sage"
      fontSize="20px"
      display={{ base: 'flex', md: 'none' }}
      onClick={onClick}
      icon={isMenuOpen ? <AiOutlineCloseCircle /> : <AiOutlineMenuFold />}
    />
  );
};

export default MenuToggle;
