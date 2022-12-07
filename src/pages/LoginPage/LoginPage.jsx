import { useDispatch } from 'react-redux';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { authOperations } from 'redux/auth';
import css from './LoginPage.module.scss';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLoginUser = user => {
    dispatch(authOperations.login(user));
    console.log(user);
  };

  return (
    <div className={css.container}>
      <LoginForm loginUser={handleLoginUser} />
    </div>
  );
};
