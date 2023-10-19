import styled from 'styled-components';

export const ContactsItem = styled('div')(() => {
    return {
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        fontSize: '18px',

        li: {
            width: '450px'
        }
    };
});

export const DeleteButton = styled('button')(() => {
    return {
        display: 'block',

        width: '80px',
        padding: '4px 10px',

        '&:hover': {
            outline: 'none',
            borderColor: 'blue',
        },
    };
});
