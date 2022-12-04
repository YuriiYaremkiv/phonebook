import { Progress } from '../Progress/Progress';
import { Div } from './Layout.styled.js';
import css from './Layout.module.scss';

export const Layout = ({ progress, children }) => {
  return (
    <div className={css.container}>
      <h2>Contacts</h2>
      <div className={css.container__progress}>
        <Progress />
      </div>
      <div className={css.container__contacts}>
        <Div progress={progress}>{children}</Div>
      </div>
    </div>
  );
};
