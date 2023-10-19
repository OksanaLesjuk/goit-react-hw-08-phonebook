import { Input } from 'components/ContactForm/ContactForm.styled';
import { FilterMessage } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { filterContacts } from 'redux/filterSlice';

const Filter = () => {
  const { filter } = useSelector(getFilter);

  const dispatch = useDispatch();
  const handleFilter = ({ target: { value } }) => {
    dispatch(filterContacts(value));
  };

  return (
    <div>
      <FilterMessage>Find contacts by name</FilterMessage>
      <Input
        onChange={handleFilter}
        value={filter}
        type="text"
        name="filterQuery"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default Filter;
