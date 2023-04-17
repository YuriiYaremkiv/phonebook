import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { FormHelperText } from '@mui/material';
import { getContacts } from 'redux/contacts/selectors';
import * as Yup from 'yup';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import modeConfig from 'configs/mode.config';
import css from './FormContact.module.scss';
import ContactsOperations from '../../redux/contacts/contact-operations';
import InputMask from 'react-text-mask';

import React from 'react';

const phoneMask = [
  /\+/,
  '3',
  '8',
  ' ',
  '(',
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
];

const NumberMask = props => {
  const { inputRef, ...other } = props;

  return (
    <InputMask
      {...other}
      mask={phoneMask}
      placeholderChar={'\u2000'}
      showMask
      guide={false}
      keepCharPositions={false}
      maskChar={null}
      onBeforeMaskedValueChange={(newState, oldState, userInput) => {
        // Remove all non-numeric characters from the user input
        const inputValue = userInput.replace(/[^\d]/g, '');

        // If the input value is empty, allow the mask to be empty
        if (!inputValue) {
          return {
            value: '',
            selection: {
              start: 0,
              end: 0,
            },
          };
        }

        // If the input value is too long, truncate it
        if (inputValue.length > 10) {
          return {
            value: inputValue.substring(0, 10),
            selection: {
              start: oldState.selection.start,
              end: oldState.selection.end,
            },
          };
        }

        // Format the input value according to the mask
        let formattedValue = '';
        let valueIndex = 0;
        for (let i = 0; i < phoneMask.length; i++) {
          const maskChar = phoneMask[i];
          if (typeof maskChar === 'string') {
            formattedValue += maskChar;
          } else {
            if (valueIndex < inputValue.length) {
              formattedValue += inputValue[valueIndex];
              valueIndex++;
            } else {
              break;
            }
          }
        }

        return {
          value: formattedValue,
          selection: {
            start: formattedValue.length,
            end: formattedValue.length,
          },
        };
      }}
      inputRef={inputRef}
    />
  );
};

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

    dispatch(ContactsOperations.addContact(contact));
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{ ...styles.backgroundColorInput }}
      className={css.form}
    >
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
          InputProps={{
            inputComponent: NumberMask,
          }}
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

      <Button type="submit" variant="contained" className={css.button}>
        {t('addContact')}
      </Button>
      {error ? <p className={css.error}>{error}</p> : null}
    </form>
  );
};
