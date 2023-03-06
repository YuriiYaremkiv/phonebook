import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FormHelperText } from '@mui/material';
import { LogoUser } from 'components/LogoUser/LogoUser';
import * as Yup from 'yup';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import modeConfig from 'configs/mode.config';
import css from './FormRegister.module.scss';

export const FormRegister = ({ handleUserRegister, error = '' }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { themeMode } = useSelector(state => state.themeMode);
  const styles = modeConfig.style[themeMode];
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, t('formikMin3'))
        .max(15, t('formikMax15'))
        .required(t('required')),
      email: Yup.string()
        .email(t('formikInvalidEmail'))
        .required(t('required')),
      password: Yup.string()
        .min(6, t('formikMin6'))
        .max(20, t('formikMax20'))
        .required(t('required')),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], t('formikPasswordConfirm'))
        .min(6, t('formikMin6'))
        .max(20, t('formikMax20'))
        .required(t('required')),
    }),
    onSubmit: values => {
      handleUserRegister({
        name: values.name,
        email: values.email,
        password: values.password,
      });
    },
  });

  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{ ...styles.backgroundColorInput }}
      className={css.form}
    >
      <LogoUser />
      {/* Name - start */}
      <FormControl sx={{ width: '100%' }} variant="outlined">
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
          size="small"
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

      {/* Email - start */}
      <FormControl sx={{ width: '100%' }} variant="outlined">
        <TextField
          label={t('email')}
          variant="outlined"
          id="email"
          name="email"
          type="email"
          size="small"
          error={Boolean(formik.touched.email && formik.errors.email)}
          className={css.input}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <FormHelperText
          error={Boolean(formik.touched.email && formik.errors.email)}
          style={{
            height: '14px',
            marginTop: 0,
            marginBottom: '10px',
            padding: 0,
            fontSize: '12px',
            visibility:
              formik.touched.email && formik.errors.email
                ? 'visible'
                : 'hidden',
          }}
        >
          {formik.errors.email}
        </FormHelperText>
      </FormControl>
      {/* Email - end */}

      {/* Password - start */}
      <FormControl sx={{ width: '100%' }} variant="outlined">
        <InputLabel
          htmlFor="outlined-adornment-password"
          size="small"
          error={Boolean(formik.touched.password && formik.errors.password)}
        >
          {t('password')}
        </InputLabel>
        <OutlinedInput
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          type={showPassword ? 'text' : 'password'}
          size="small"
          error={Boolean(formik.touched.password && formik.errors.password)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label={t('password')}
        />
        <FormHelperText
          error={Boolean(formik.touched.password && formik.errors.password)}
          style={{
            height: '14px',
            marginTop: 0,
            marginBottom: '10px',
            padding: 0,
            fontSize: '12px',
            visibility:
              formik.touched.password && formik.errors.password
                ? 'visible'
                : 'hidden',
          }}
        >
          {formik.errors.password}
        </FormHelperText>
      </FormControl>
      {/* Password - end */}

      {/* Confirm password - start */}
      <FormControl sx={{ width: '100%' }} variant="outlined">
        <InputLabel
          htmlFor="outlined-adornment-password"
          size="small"
          error={Boolean(
            formik.touched.confirmPassword && formik.errors.confirmPassword
          )}
        >
          {t('confirmPassword')}
        </InputLabel>
        <OutlinedInput
          id="confirmPassword"
          name="confirmPassword"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          type={showConfirmPassword ? 'text' : 'password'}
          size="small"
          error={Boolean(
            formik.touched.confirmPassword && formik.errors.confirmPassword
          )}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowConfirmPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label={t('confirmPassword')}
        />
        <FormHelperText
          error={Boolean(
            formik.touched.confirmPassword && formik.errors.confirmPassword
          )}
          style={{
            height: '14px',
            marginTop: 0,
            marginBottom: '10px',
            padding: 0,
            fontSize: '12px',
            visibility:
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? 'visible'
                : 'hidden',
          }}
        >
          {formik.errors.confirmPassword}
        </FormHelperText>
      </FormControl>
      {/* Confirm password - end */}

      <Button type="submit" variant="contained">
        {t('signUp')}
      </Button>
      <Link to="/login" className={css.form__link}>
        {t('signInNotification')}
      </Link>
      {error ? <p className={css.error}>{error}</p> : null}
    </form>
  );
};
