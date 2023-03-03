import { NavLink } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useAuth } from 'hooks';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Breadcrumb separator="">
      <BreadcrumbItem _hover={{ color: 'white', bg: 'blue.500' }}>
        <BreadcrumbLink as={NavLink} to="/">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      {isLoggedIn && (
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={NavLink} to="/contacts">
            Contacts
          </BreadcrumbLink>
        </BreadcrumbItem>
      )}

      {/* <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink>Contact</BreadcrumbLink>
      </BreadcrumbItem> */}
    </Breadcrumb>

    // <nav>
    //   <NavLink to="/">Home</NavLink>
    //   {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    // </nav>
  );
};

export default Navigation;
