import { useDispatch } from 'react-redux';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { authOperations } from 'redux/auth';
import css from './RegisterPage.module.scss';

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleChange = user => {
    dispatch(authOperations.register(user));
  };

  return (
    <div className={css.container}>
      <RegisterForm handleChange={handleChange} />
    </div>
  );
};
