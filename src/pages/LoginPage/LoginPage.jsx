import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth';
import authSelectors from 'redux/auth/auth-selectors';
import { Progress } from 'components/Progress/Progress';
import { FormLogin } from 'components/FormLogin/FormLogin';
import css from './LoginPage.module.scss';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(authSelectors.getIsLoading);
  const errorLogin = useSelector(authSelectors.getErrorLogin);

  const handleLoginUser = user => {
    dispatch(authOperations.login(user));
  };

  return (
    <section className={css.section}>
      <div className="container">
        <FormLogin handleLoginUser={handleLoginUser} error={errorLogin} />
        {isLoading && <Progress />}
      </div>
    </section>
  );
};
