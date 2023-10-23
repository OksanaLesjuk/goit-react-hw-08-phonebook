import React from 'react';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/selectors';
import { StyledHeader } from './Header.styled';

import UserMenu from 'components/UserMenu/UserMenu';

const Header = () => {
  const isAuth = useSelector(getToken);

  return (
    <StyledHeader>
      <h1>Phonebook</h1>
      {isAuth && <UserMenu />}
    </StyledHeader>
  );
};

export default Header;
