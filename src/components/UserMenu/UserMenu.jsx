import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { deleteToken, logOutUser } from 'redux/operations';
import { getToken, getUserData } from 'redux/selectors';

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
    <div>
      <p>{email}</p>
      <button onClick={handleClick} type="submit">
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
