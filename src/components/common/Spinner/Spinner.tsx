import clsx from 'clsx';

import { CircularProgress, CircularProgressProps } from '@mui/material';
import classes from './spinner.module.css';

type SpinnerProps = {
  className?: string;
} & CircularProgressProps;

export const Spinner = (props: SpinnerProps) => {
  const { color, className } = props;

  return <CircularProgress className={clsx(className, classes.root)} color={color} {...props} />;
};
