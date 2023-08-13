import logo from '../../../assets/logo.png';
import classes from './navbar.module.css';

export const NavBar = () => {
  return (
    <div className={classes.root}>
      <img alt="avatar" src={logo} className={classes.logo} />
    </div>
  );
};
