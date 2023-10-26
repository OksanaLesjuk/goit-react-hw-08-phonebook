import { Outlet } from 'react-router-dom';

import { Suspense, useEffect } from 'react';
import { Container } from './Layout.styled';
import { useDispatch } from 'react-redux';
import { getStatusUser } from 'redux/operations';
import Header from 'components/Header/Header';
import { CircularProgress } from '@mui/material';

export const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStatusUser())
      .unwrap()
      .then()
      .catch(e => console.log(e));
  }, [dispatch]);
  return (
    <Container>
      <Header />
      <Suspense fallback={<CircularProgress disableShrink />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
