/* eslint-disable react/display-name */
import React from 'react';
import { Icon, Input, InputBaseProps } from '@mui/material';
import clsx from 'clsx';

import classes from './field-input.module.css';

export type FieldInputProps = {
  iconleft?: string;
  iconright?: string;
  fontSize?: 'small' | 'medium' | 'large';
} & InputBaseProps;

export const FieldInput = React.forwardRef((props: FieldInputProps, ref) => {
  const { className, iconleft, iconright, fontSize = 'small', ...otherProps } = props;
  return (
    <div className={clsx(classes.container, className)}>
      {iconleft && <Icon>{iconleft}</Icon>}
      <Input className={clsx(classes.input, classes[fontSize])} {...otherProps} ref={ref} />
      {iconright && <Icon>{iconright}</Icon>}
    </div>
  );
});
