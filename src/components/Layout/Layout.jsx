import { Link, NavLink, Outlet } from 'react-router-dom';

import { Suspense, useEffect } from 'react';
import { Container } from './Layout.styled';
import { useDispatch } from 'react-redux';
import { getStatusUser } from 'redux/operations';
import Header from 'components/Header/Header';

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
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
