import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/filterContactsReducer';
import { getFilter } from 'redux/contacts/selectors';
import { useTranslation } from 'react-i18next';
import TextField from '@mui/material/TextField';
import css from './Filter.module.scss';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const { t } = useTranslation();

  const addFilter = e => {
    const value = e.target.value.trim().toLocaleLowerCase();
    dispatch(filterContact(value));
  };

  return (
    <label className={css.label}>
      {t('findContactsForName')}
      <TextField
        id="outlined-basic"
        variant="outlined"
        size="small"
        style={{ width: '100%' }}
        value={filter}
        onChange={e => addFilter(e)}
      />
    </label>
  );
};
