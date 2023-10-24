import React from 'react';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/selectors';

import UserMenu from 'components/UserMenu/UserMenu';
import { Stack, Typography } from '@mui/material';

const Header = () => {
  const isAuth = useSelector(getToken);

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography variant="h1" gutterBottom>
        Phonebook
      </Typography>
      {/* <h1>Phonebook</h1> */}
      {isAuth && <UserMenu />}
    </Stack>
  );
};

export default Header;
