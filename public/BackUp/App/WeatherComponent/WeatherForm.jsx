var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var updates = {};
    var city = this.refs.city.value;
    

    if (city.length > 0) {
      this.refs.city.value = '';
      updates.city = city;
    }


    this.props.onNewData(updates);
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="city" placeholder="Enter city"/>
          
        </div>
        
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
});
module.exports= WeatherForm;