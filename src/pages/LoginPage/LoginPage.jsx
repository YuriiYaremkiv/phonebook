import { useDispatch, useSelector } from 'react-redux';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { authOperations } from 'redux/auth';
import authSelectors from 'redux/auth/auth-selectors';
import { Progress } from 'components/Progress/Progress';
import { Error } from 'components/Error/Error';
import css from './LoginPage.module.scss';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(authSelectors.getIsLoading);
  const errorLogin = useSelector(authSelectors.getErrorLogin);

  const handleLoginUser = user => {
    dispatch(authOperations.login(user));
  };

  return (
    <div className={css.container}>
      {isLoading && <Progress />}
      {errorLogin && <Error message={errorLogin} />}
      <LoginForm loginUser={handleLoginUser} />
    </div>
  );
};
