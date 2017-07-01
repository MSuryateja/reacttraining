var React = require('react');
var NavBar = require('NavBar');

var Main = React.createClass({
    render: function(){
        return (
            <div>
            <NavBar/>
            <h2>Main</h2><br/>
           {this.props.children}
            </div>
        )
    }
});

module.exports = Main;