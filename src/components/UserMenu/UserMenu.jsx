import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { deleteToken, logOutUser } from 'redux/operations';
import { getUserData } from 'redux/selectors';
import Avatar from '@mui/material/Avatar';
import { Button, Divider, Stack, Typography } from '@mui/material';

const UserMenu = () => {
  const { email } = useSelector(getUserData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = e => {
    e.preventDefault();
    dispatch(logOutUser());
    deleteToken();
    navigate('/');
  };
  return (
    <Stack
      direction="row"
      alignItems="center"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
    >
      <Avatar src="/broken-image.jpg" />
      {/* <span class="material-icons md-36">face</span> */}
      {/* <span class="material-icons-outlined">account_circle</span> */}
      <Typography>{email}</Typography>
      <Button onClick={handleClick} type="submit">
        Log Out
      </Button>
    </Stack>
  );
};

export default UserMenu;
