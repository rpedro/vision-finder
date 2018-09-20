import React, { Component } from 'react';
import classes from './App.css';
import './components/images/AllImages';
import AllImages from './components/images/AllImages';

class App extends Component {
  render() {
    return (
      <div className={classes.box}>
        <div className={classes.container}>
          <div className={classes.left}>
           <a className={classes.image}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMphRwwWYXmPqnLl4wAJkOha0lPRHRMYPX_TUHf2Sy7fqUQ1YiEw" alt=""/>
           </a>
            <div className={classes.profile}>
              <p>Image Recognition AI</p>
              <span>Vision Finder</span>  
            </div>
            <div className={classes.actions}>
              <a className={classes.btn}>Scan</a>
              <a className={classes.btn}>Display</a>
            </div>
          </div>

          <div className={classes.right}>
            <AllImages></AllImages>
            <a className={classes.rightbox}>
              <p>5</p>
              <span>Ok</span>
            </a>
            <a className={classes.rightbox}>
              <p>6</p>
              <span>Alerts</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;