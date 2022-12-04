import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterContactsReducer';
import css from './Filter.module.scss';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);

  const addFilter = e => {
    const value = e.target.value.trim().toLocaleLowerCase();
    dispatch(filterContact(value));
  };

  return (
    <label>
      Find contacts by name:
      <input
        className={css.filter__input}
        type="text"
        value={filter}
        onChange={e => addFilter(e)}
      ></input>
    </label>
  );
};
