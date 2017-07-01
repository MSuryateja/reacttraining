var Welcome = React.createClass({
    render: function(){
        return(
            <div>
<h3>Hello, Welcome to react App</h3>
<span>This is from component</span>
            </div>
        );
    }
});


ReactDOM.render(<Welcome/>,
document.getElementById('app'));