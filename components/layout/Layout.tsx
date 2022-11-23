import React = require('react');
import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

interface Props {
  children: JSX.Element
}

const Layout = ({children}: Props): React.ReactElement => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}> {children} </main>
    </div>
  );
};

export default Layout;
