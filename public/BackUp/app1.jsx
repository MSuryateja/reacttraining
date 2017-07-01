var Welcome = React.createClass({
    getDefaultProps: function(){
        return{
      name: 'satya',
      city: 'hyderabad'
        }
    },
    render: function(){
        var name = this.props.name;
        var city = this.props.city;
        return(
            <div>
<h3>Hello, {name}! {city}</h3>

            </div>
        );
    }
});

var name = "venkat";
ReactDOM.render(<Welcome name={name} />,
document.getElementById('app'));