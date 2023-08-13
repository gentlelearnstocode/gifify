import avatar from '../../../assets/react.svg';
import classes from './navbar.module.css';

export const NavBar = () => {
  return (
    <div className={classes.root}>
      <img alt="avatar" src={avatar} className={classes.logo} />
    </div>
  );
};
