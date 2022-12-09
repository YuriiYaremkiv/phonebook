import { useDispatch, useSelector } from 'react-redux';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { authOperations } from 'redux/auth';
import { Error } from 'components/Error/Error';
import css from './RegisterPage.module.scss';
import authSelectors from 'redux/auth/auth-selectors';
import { Progress } from 'components/Progress/Progress';

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const errorRegister = useSelector(authSelectors.getErrorRegister);
  const isLoading = useSelector(authSelectors.getIsLoading);

  const handleChange = user => {
    dispatch(authOperations.register(user));
  };

  return (
    <div className={css.container}>
      {isLoading && <Progress />}
      {errorRegister && <Error message={errorRegister} />}
      {!isLoading && <RegisterForm handleChange={handleChange} />}
    </div>
  );
};
