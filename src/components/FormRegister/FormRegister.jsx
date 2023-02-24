import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
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

export const FormRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);

  const { themeMode } = useSelector(state => state.themeMode);
  const styles = modeConfig.style[themeMode];

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      confirmPassword: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const isPasswordEmpty = formik.values.password.length ? true : false;

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{ ...styles.backgroundColorInput }}
      className={css.form}
    >
      <TextField
        label="Name"
        variant="outlined"
        id="name"
        name="name"
        type="text"
        className={css.input}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div className={css.error}>{formik.errors.name}</div>
      ) : null}

      <TextField
        id="email"
        label="Email"
        variant="outlined"
        name="email"
        type="email"
        className={css.input}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className={css.error}>{formik.errors.email}</div>
      ) : null}

      <FormControl variant="outlined">
        <InputLabel
          htmlFor="outlined-adornment-password"
          style={{
            marginTop: isPasswordEmpty || setFocusPassword ? '0' : '-5px',
          }}
        >
          Password
        </InputLabel>
        <OutlinedInput
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          onFocus={() => setFocusPassword(true)}
          value={formik.values.password}
          type={showPassword ? 'text' : 'password'}
          style={{ width: '100%', height: '46px' }}
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
          label="Password"
        />
      </FormControl>
      {formik.touched.password && formik.errors.password ? (
        <div className={css.error}>{formik.errors.password}</div>
      ) : null}

      <FormControl style={{ width: '100%' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">
          Confirm password
        </InputLabel>
        <OutlinedInput
          id="confirmPassword"
          name="confirmPassword"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          type={showConfirmPassword ? 'text' : 'password'}
          style={{ width: '100%', height: '46px' }}
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
          label="Confirm password"
        />
      </FormControl>
      {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
        <div className={css.error}>{formik.errors.confirmPassword}</div>
      ) : null}

      <Button type="submit" variant="contained">
        Contained
      </Button>
    </form>
  );
};
