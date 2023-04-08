import { useSelector } from 'react-redux';
import { Progress } from '../Progress/Progress';
import { Div } from './Layout.styled.js';
import { getIsLoading } from 'redux/contacts/selectors';
import modeConfig from 'configs/mode.config';
import css from './Layout.module.scss';

export const Layout = ({ title, blockLayoutValue = false, children }) => {
  const inProgress = useSelector(getIsLoading);
  const { themeMode } = useSelector(state => state.themeMode);
  const styles = modeConfig.style[themeMode];

  return (
    <div className={css.layout__container}>
      <h2 style={{ ...styles.textColor }} className={css.layout__title}>
        {title}
      </h2>
      <div className={css.layout__progress}>{inProgress && <Progress />}</div>
      <div className={css.container__contacts}>
        <Div progress={inProgress || blockLayoutValue}>{children}</Div>
      </div>
    </div>
  );
};
