var React = require("react");

var Main = React.createClass({
	render: function(){
		return (
			<div>
				<h1>Hello World</h1>
			</div>
		);
	}
});

React.render(<Main />, document.getElementById("container"))