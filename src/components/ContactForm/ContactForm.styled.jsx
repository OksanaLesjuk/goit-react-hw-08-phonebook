import styled from 'styled-components';

export const Form = styled('form')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '40px',

    width: '500px',
    fontSize: '18px',
    fontWeight: '500',
    borderColor: 'black',
  };
});

export const Input = styled('input')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    width: '200px',
    padding: '8px 16px',
    marginTop: '8px',
    marginBottom: '24px',
    '&:focus': {
      outline: 'none',
      borderColor: 'blue',
    },
  };
});

export const ContactsFormButton = styled('button')(() => {
  return {
    display: 'block',

    width: '160px',
    padding: '8px 10px',
    // marginTop: '8px',
    // marginBottom: '24px',
    '&:hover': {
      outline: 'none',
      borderColor: 'blue',
    },
  };
});
