import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/filterContactsReducer';
import { getFilter } from 'redux/contacts/selectors';
import css from './Filter.module.scss';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const addFilter = e => {
    const value = e.target.value.trim().toLocaleLowerCase();
    dispatch(filterContact(value));
  };

  return (
    <label className={css.filter__label}>
      Find contacts by name:
      <input
        className={css.filter__input}
        type="text"
        value={filter}
        onChange={e => addFilter(e)}
      />
    </label>
  );
};
