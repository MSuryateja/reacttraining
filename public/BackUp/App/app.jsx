var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Locators = require('Locators');
var Services = require('Services');

var firstName = 'Hyderabad';
ReactDOM.render(
  <Router history={hashHistory}>
  <Route path="/" component={Main}>
   <Route path="/About" component={About}/>
   <Route path="/Services" component={Services}/>
   <Route path="/Locators" component={Locators}/>
   <IndexRoute component={Weather}/>
  </Route>
  </Router>,  
  // <Weather city={firstName}/>,
  document.getElementById('app')
);
