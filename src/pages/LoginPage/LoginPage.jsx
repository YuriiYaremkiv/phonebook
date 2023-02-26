import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth';
import authSelectors from 'redux/auth/auth-selectors';
import { Progress } from 'components/Progress/Progress';
import { Error } from 'components/Error/Error';
import { FormLogin } from 'components/FormLogin/FormLogin';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(authSelectors.getIsLoading);
  const errorLogin = useSelector(authSelectors.getErrorLogin);

  const handleLoginUser = user => {
    dispatch(authOperations.login(user));
  };

  return (
    <section>
      <div className="container">
        <FormLogin handleLoginUser={handleLoginUser} />
        {isLoading && <Progress />}
        {errorLogin && <Error message={errorLogin} />}
      </div>
    </section>
  );
};
