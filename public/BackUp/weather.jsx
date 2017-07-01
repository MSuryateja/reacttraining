var Welcome = React.createClass({
    getDefaultProps: function(){
        return{
      name: 'satya',
      city: 'hyderabad',
      dept: 'development'
        }
    },
    getInitialState: function(){
        return{
        name: this.props.name,
        dept: this.props.dept
        };
    },
    onBtnClick: function(e){
        e.preventDefault();
        var user = this.refs.user.value;
        var dept = this.refs.user.value;
        //alert(user);
        this.setState({
            name: user,
            dept: dept
             
        });
    },
    render: function(){
        var name = this.state.name;
        var city = this.props.city;
        var dept = this.state.dept;
        return(
            <div>
            <h3>Hello, {name}! </h3>
                <b>City: </b>{city} 
                <br/>
                <b>Dept: </b>{dept}
            <form onSubmit={this.onBtnClick}>
                <input type="text" ref="user"/>
                <button>Set Name</button>
                </form>
            </div>
        );
    }
});

var name = "venkat";
ReactDOM.render(<Welcome name={name} />,
document.getElementById('app'));