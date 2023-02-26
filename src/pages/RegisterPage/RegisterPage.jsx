import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth';
import { Error } from 'components/Error/Error';
import authSelectors from 'redux/auth/auth-selectors';
import { Progress } from 'components/Progress/Progress';
import { FormRegister } from 'components/FormRegister/FormRegister';
import css from './RegisterPage.module.scss';

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const errorRegister = useSelector(authSelectors.getErrorRegister);
  const isLoading = useSelector(authSelectors.getIsLoading);

  const handleUserRegister = user => {
    console.log(user);
    dispatch(authOperations.register(user));
  };

  return (
    <section className={css.main}>
      <div className="container">
        <FormRegister handleUserRegister={handleUserRegister} />
        {isLoading && <Progress />}
        {errorRegister && <Error message={errorRegister} />}
      </div>
    </section>
  );
};
