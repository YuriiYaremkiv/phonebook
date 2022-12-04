import { useDispatch } from 'react-redux';
import { UserOutlined } from '@ant-design/icons';
import css from './UserMenu.module.scss';

export const UserMenu = ({ userName, funcAPI }) => {
  const dispatch = useDispatch();

  const add = () => {
    dispatch(funcAPI());
  };

  return (
    <div className={css.userMenu}>
      <UserOutlined />
      <p className={css.userMenu__name}>Hi, {userName}!</p>
      <button onClick={add}>Logout</button>
    </div>
  );
};
