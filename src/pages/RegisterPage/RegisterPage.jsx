import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth';
import authSelectors from 'redux/auth/auth-selectors';
import { Progress } from 'components/Progress/Progress';
import { FormRegister } from 'components/FormRegister/FormRegister';
import css from './RegisterPage.module.scss';

export const RegisterPage = () => {
  const errorRegister = useSelector(authSelectors.getErrorRegister);
  const isLoading = useSelector(authSelectors.getIsLoading);
  const dispatch = useDispatch();

  const handleUserRegister = user => {
    console.log(user);
    dispatch(authOperations.register(user));
  };

  return (
    <section className={css.section}>
      <div className="container">
        <FormRegister
          handleUserRegister={handleUserRegister}
          error={errorRegister}
        />
        {isLoading && <Progress />}
      </div>
    </section>
  );
};
