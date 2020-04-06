import React, { Component, Fragment } from 'react';
import  Frontpage from './components/Frontpage';
import  './vendors/slick/slick.css';
import  './vendors/aos/aos.css';
import  './vendors/multi-select/bootstrap-multiselect.css';
import  './style.css';

import './App.css';

//require('./vendors/jquery/jquery-min');
//require('./vendors/slick/slick.min');
//require('./vendors/aos/aos');
//require('./vendors/multi-select/bootstrap-multiselect');
//require('./vendors/typed/typed.min');
//require('./js/main');

/*function App() {
  return (
    <Fragment>
      <Frontpage/>
    </Fragment>
  );
}*/
//import jquery from 'jquery';
//import './vendors/jquery/jquery-min.js';


class App extends Component {
  componentDidMount() {
    //const script = document.createElement("script");
    //script.async = true;
    //script.src = "./vendors/jquery/jquery-min.js";
    //script.onload = () => this.scriptLoaded();
    //For head
    //document.head.appendChild(script);

    // For body
    //document.body.appendChild(script);

    //const scriptMain = document.createElement("script");
    //scriptMain.async = true;
    //scriptMain.src = "./js/main.js";
    //scriptMain.onload = () => this.scriptLoaded();
    //For head
    //document.body.appendChild(scriptMain);

    //require('./vendors/jquery/jquery-min.js');
    //import './vendors/jquery/jquery-min.js';
    //require('./vendors/slick/slick.min');
    //require('./vendors/aos/aos');
    //require('./vendors/multi-select/bootstrap-multiselect');
    //require('./vendors/typed/typed.min');
    //require('./js/main');
  }
  render() {
    return (
      <Fragment>
        <Frontpage/>
      </Fragment>
    );
  }
}

export default App;
