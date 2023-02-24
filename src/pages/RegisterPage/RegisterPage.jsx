import { useDispatch, useSelector } from 'react-redux';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { authOperations } from 'redux/auth';
import { Error } from 'components/Error/Error';
import authSelectors from 'redux/auth/auth-selectors';
import { Progress } from 'components/Progress/Progress';
import { FormRegister } from 'components/FormRegister/FormRegister';
import modeConfig from 'configs/mode.config';
import css from './RegisterPage.module.scss';

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const errorRegister = useSelector(authSelectors.getErrorRegister);
  const isLoading = useSelector(authSelectors.getIsLoading);
  const { themeMode } = useSelector(state => state.themeMode);
  const styles = modeConfig.style[themeMode];

  const handleChange = user => {
    dispatch(authOperations.register(user));
  };

  return (
    <section style={{ ...styles.backgroundColorMain }} className={css.main}>
      <div className="container">
        <FormRegister />
        {isLoading && <Progress />}
        {errorRegister && <Error message={errorRegister} />}
      </div>
    </section>
  );
};
