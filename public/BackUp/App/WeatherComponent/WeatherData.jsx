var React = require('react');

var WeatherData = React.createClass({
    render: function () {
      var city = this.props.city;
      var temp = this.props.temp;
      var humidity = this.props.humidity;
      return (
        <div>
          <h1>Hello {city}</h1>
          <span>Location:{city}</span><br/>         
          <span>Temperature:{temp}</span> <br/>        
          <span>Humidity:{humidity}</span>         
        </div>
      );
    }
});
module.exports= WeatherData;