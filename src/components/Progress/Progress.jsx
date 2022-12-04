import { CircularProgress } from '@mui/material';
import css from './Progress.module.scss';

export const Progress = () => {
  return (
    <div className={css.progress__container}>
      <CircularProgress />
    </div>
  );
};
