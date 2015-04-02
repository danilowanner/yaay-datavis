var React = require('react');

var Noise = React.createClass({

	iconStyle: { marginTop: '-0.15em' },
	textStyle: { marginTop: '1.5em' },

	render: function(){
  	return (
  	  <div>
			<div className="col col-1 col-height-1 col-salmon col-lg-offset-1">
				<div className="icon-sound-medium center" style={this.iconStyle}></div>
				<span className="center" style={this.textStyle}>{this.props.level} dB</span>
			</div>
			<div className="col col-1 col-height-1 col-white">
    	  	<span className="center">{this.props.text}</span>
    	  </div>
  	  </div>
    )
	}

});

module.exports = Noise;
