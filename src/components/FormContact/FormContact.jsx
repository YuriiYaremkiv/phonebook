import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { FormHelperText } from '@mui/material';
import * as Yup from 'yup';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import modeConfig from 'configs/mode.config';
import css from './FormContact.module.scss';
import { getContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operationsAPI';

export const FormContact = ({ error = '' }) => {
  const { themeMode } = useSelector(state => state.themeMode);
  const contactsList = useSelector(getContacts);
  const dispatch = useDispatch();
  const styles = modeConfig.style[themeMode];
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(6, t('formikMin6'))
        .max(20, t('formikMax20'))
        .required(t('required')),
      number: Yup.string()
        .min(6, t('formikMin6'))
        .max(20, t('formikMax20'))
        .matches(/^[0-9()+-]*$/, t('formikPhoneFormat'))
        .required(t('required')),
    }),
    onSubmit: (values, { resetForm }) => {
      handleSubmit({ name: values.name, number: values.number });
      resetForm();
    },
  });

  const handleSubmit = contact => {
    if (
      contactsList.find(
        user =>
          user.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()
      )
    ) {
      alert('This contact already exists');
      return;
    }

    dispatch(addContact(contact));
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{ ...styles.backgroundColorInput }}
      className={css.form}
    >
      {/* Name - start */}
      <FormControl variant="outlined">
        <TextField
          label={t('name')}
          variant="outlined"
          id="name"
          name="name"
          type="text"
          size="small"
          error={Boolean(formik.touched.name && formik.errors.name)}
          className={css.input}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        <FormHelperText
          error={Boolean(formik.touched.name && formik.errors.name)}
          style={{
            height: '14px',
            marginTop: 0,
            marginBottom: '10px',
            padding: 0,
            fontSize: '12px',
            visibility:
              formik.touched.name && formik.errors.name ? 'visible' : 'hidden',
          }}
        >
          {formik.errors.name}
        </FormHelperText>
      </FormControl>
      {/* Name - end */}

      {/* Number - start */}
      <FormControl variant="outlined">
        <TextField
          label={t('number')}
          variant="outlined"
          id="number"
          name="number"
          type="text"
          size="small"
          error={Boolean(formik.touched.number && formik.errors.number)}
          className={css.input}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.number}
        />
        <FormHelperText
          error={Boolean(formik.touched.number && formik.errors.number)}
          style={{
            height: '14px',
            marginTop: 0,
            marginBottom: '10px',
            padding: 0,
            fontSize: '12px',
            visibility:
              formik.touched.number && formik.errors.number
                ? 'visible'
                : 'hidden',
          }}
        >
          {formik.errors.number}
        </FormHelperText>
      </FormControl>
      {/* Number - end */}

      <Button type="submit" variant="contained" className={css.button}>
        {t('addContact')}
      </Button>
      {error ? <p className={css.error}>{error}</p> : null}
    </form>
  );
};
