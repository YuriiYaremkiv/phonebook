import css from './Error.module.scss';

export const Error = ({ message }) => {
  return <div className={css.container}>{message}</div>;
};
