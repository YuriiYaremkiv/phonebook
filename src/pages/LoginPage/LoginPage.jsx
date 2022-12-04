import { useDispatch } from 'react-redux';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { authOperations } from 'redux/auth';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLoginUser = user => {
    dispatch(authOperations.login(user));
    console.log(user);
  };

  return <LoginForm loginUser={handleLoginUser} />;
};
