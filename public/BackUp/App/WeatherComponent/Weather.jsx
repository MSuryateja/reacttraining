var React = require('react');
var WeatherData = require('WeatherData');
var WeatherForm = require('WeatherForm');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    // return {
    //     city: 'Hyderabad',
    //     temp: 88
    // };
    return {
      isLoading: false
    }
  },
  handleNewData: function (updates) {
    //this.setState(updates);
    var that = this;

    this.setState({isLoading: true});
    OpenWeatherMap.getTemp(updates.city).then(function(data){
      that.setState({
        //city: updates.city,
        city: data.name,
        temp: data.main.temp,
        humidity: data.main.humidity,
        isLoading: false
      });
    }, function(err){
      this.setState({isLoading: false});
      alert(err);
    });
  },
  render: function () {
    // var city = this.state.city;
    // var temp = this.state.temp;
    var {isLoading, city, temp, humidity } = this.state;

    function renderMessage(){
    if(isLoading){
      return <h3>Fetching weather...</h3>;
    }
    else if(temp && city){
      return <WeatherData temp={temp} city={city} humidity={humidity}/>
    }
    }
    return (
      <div>
        <h3>Weather Component</h3>
        {renderMessage()}
        <WeatherForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

module.exports= Weather;