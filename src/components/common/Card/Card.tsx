import { Card as MuiCard, CardProps as MuiCardProps, CardContent } from '@mui/material';
import clsx from 'clsx';

import { Text } from '../../core';
import classes from './card.module.css';

//Todo: review this component and make it generic
export type CardProps = {
  description?: string;
} & MuiCardProps;

export const Card = (props: CardProps) => {
  const { description, children, className, ...otherProps } = props;
  return (
    <MuiCard {...otherProps} className={clsx(classes.root, className)}>
      <Text textSize="large">{description}</Text>
      <CardContent className={classes.content}>{children}</CardContent>
    </MuiCard>
  );
};
