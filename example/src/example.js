var React = require('react');
var ReactDOM = require('react-dom');
var SuperResponsiveTable = require('react-super-responsive-table');

var App = React.createClass({
	render () {
		return (
			<div>
				<SuperResponsiveTable />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
