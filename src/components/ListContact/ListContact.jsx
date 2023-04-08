import { useTranslation } from 'react-i18next';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import css from './ListContact.module.scss';
export const ListContact = ({
  contacts,
  editContactFunc,
  deleteContactFunc,
}) => {
  const { t } = useTranslation();

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.list__item}>
            <div className={css.list__container}>
              <PersonIcon />
              <p>
                {`${t('name')}:`}
                <b> {name}</b>
              </p>
              <p>
                {`${t('number')}:`}
                <b> {number}</b>
              </p>
            </div>

            <div className={css.list__containerButton}>
              <Button
                variant="contained"
                size="small"
                type="button"
                onClick={() => editContactFunc(id)}
              >
                {t('edit')}
              </Button>
              <Button
                type="button"
                variant="contained"
                size="small"
                onClick={() => deleteContactFunc(id)}
              >
                {t('delete')}
              </Button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
