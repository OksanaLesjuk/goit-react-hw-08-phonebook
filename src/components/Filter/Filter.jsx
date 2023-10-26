import { ContactInput } from 'components/ContactForm/ContactForm.styled';

import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { filterContacts } from 'redux/filterSlice';
import { Box, Typography } from '@mui/material';

const Filter = () => {
  const { filter } = useSelector(getFilter);

  const dispatch = useDispatch();
  const handleFilter = ({ target: { value } }) => {
    dispatch(filterContacts(value));
  };

  return (
    <Box>
      <Typography sx={{ marginBottom: '10px' }}>
        Find contacts by name
      </Typography>
      <ContactInput
        onChange={handleFilter}
        value={filter}
        type="text"
        name="filterQuery"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        placeholder="Search contacts..."
        sx={{ marginBottom: '40px' }}
      />
    </Box>
  );
};

export default Filter;
