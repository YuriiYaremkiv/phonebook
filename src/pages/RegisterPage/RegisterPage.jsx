import { useDispatch } from 'react-redux';

import { RegisterForm } from 'components/RegisterForm/RegisterForm';

import { authOperations } from 'redux/auth';

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleChange = user => {
    dispatch(authOperations.register(user));
  };

  return <RegisterForm handleChange={handleChange} />;
};
