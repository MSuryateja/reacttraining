var React = require('react');

var GreeterMessage = React.createClass({
    render: function () {
      var name = this.props.name;
      var message = this.props.message;
      var email = this.props.email;
      var password = this.props.password;
      var country = this.props.country;

      return (
        <div>
          <h1>Hello {name}!</h1>
          <p>{message}</p>
          <br/>
          <label>Email:{email}</label>
          <br/>
          <label>Password:{password}</label>
          <br/>
          <label>Country:{country}</label>
        </div>
      );
    }
});
module.exports= GreeterMessage;