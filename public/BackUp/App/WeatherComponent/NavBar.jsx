var React = require('react');
var {Link, IndexLink} = require('react-router');

var NavBar = React.createClass({
    render: function(){
        return (
            <div>
            <Link to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>&nbsp;
            <Link to="/Services" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Services</Link>&nbsp;
            <Link to="/Locators" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Locators</Link>&nbsp;
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Weather</IndexLink>
            </div>
        )
    }
});

module.exports = NavBar;