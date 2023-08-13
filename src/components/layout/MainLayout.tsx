import React from 'react';
import { NavBar } from '../common';
import classes from './layout.module.css';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;
  return (
    <div className={classes.root}>
      <NavBar />
      {children}
    </div>
  );
};
