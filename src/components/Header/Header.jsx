import React from 'react';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/selectors';

import UserMenu from 'components/UserMenu/UserMenu';
import { Stack, Typography, useTheme } from '@mui/material';

const Header = () => {
  const isAuth = useSelector(getToken);
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      flexWrap="wrap"
      marginBottom="60px"
      sx={{
        borderBottom: '2px solid darkblue',
      }}
    >
      <Typography
        variant="h1"
        style={{
          fontWeight: '700',
          color: 'darkblue',
          fontSize: theme.breakpoints.down('sm') ? '60px' : '70px',
        }}
      >
        Phonebook
      </Typography>
      {/* <h1>Phonebook</h1> */}
      {isAuth && <UserMenu />}
    </Stack>
  );
};

export default Header;
