import companyLogo from '../../../assets/vite.svg';
import avatar from '../../../assets/react.svg';
import classes from './navbar.module.css';

export const NavBar = () => {
  return (
    <div className={classes.root}>
      <img alt="logo" src={companyLogo} className={classes.logo} />
      <img alt="avatar" src={avatar} className={classes.logo} />
    </div>
  );
};
