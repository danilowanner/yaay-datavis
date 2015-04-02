var React = require('react');

var Watch = React.createClass({

	render: function(){
	  var hours = this.props.hours<10 ? "0"+this.props.hours : this.props.hours;
	  var minutes = this.props.minutes<10 ? "0"+this.props.minutes : this.props.minutes;
  	return (
  	  <div>
      	<div className="col col-2 col-height-1 col-salmon">
      	  <div className="watch center"><div className="hours">{hours}</div><div className="dots">:</div><div className="minutes">{minutes}</div></div>
      	</div>
      	<div className="col col-1 col-height-1 col-white">
      		<span className="center">Local time<br/>in Basel</span>
      	</div>
      	<div className="col col-1 col-height-1 col-salmon">
      	  <div className="icon-local-time center"></div>
      	</div>
    	</div>
    )
	}

});

module.exports = Watch;
