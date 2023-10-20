import { Link, NavLink, Outlet } from 'react-router-dom';

import { Suspense } from 'react';
import { Container, Header, NavLinkSign, StyledLink } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <h1>Phonebook</h1>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
