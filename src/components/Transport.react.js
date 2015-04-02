var React = require('react');

var Transport = React.createClass({

	iconStyle: { marginTop: '-0.25em' },
	textStyle: { marginTop: '2.5em' },

	render: function(){
	  var timeText = "–", blinkClass = "";
		if(this.props.minutes==0) {
			timeText = "NOW";
			blinkClass = " blink";
		}
		else if(this.props.minutes>0) {
			timeText = this.props.minutes+" min"
		}

  	return (
  	  <div>
      	<div className="col col-1 col-height-1 col-blue col-lg-offset-2 ">
      	  <div className={"icon-tram center"+blinkClass} style={this.iconStyle}></div>
      	  <span className={"center"} style={this.textStyle}>{timeText}</span>
      	</div>
      	<div className="col col-1 col-height-1 col-white">
      		<span className="center">Next tram 8 from Basel&nbsp;SBB</span>
      	</div>
    	</div>
    )
	}

});

module.exports = Transport;
