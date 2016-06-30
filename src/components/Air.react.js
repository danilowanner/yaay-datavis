var React = require('react');

var Air = React.createClass({

	iconStyle: { marginTop: '0.35em' },
	textStyle: { marginTop: '-2.5em' },

	render: function(){
  	return (
  	  <div>
    	  <div className="col col-1 col-height-1 col-cream-gold col-lg-offset-1">
    	    <div className="icon-co2 center" style={this.iconStyle}></div>
    	    <span className="center" style={this.textStyle}>{this.props.co2} ppm CO₂</span>
    	  </div>
    	  <div className="col col-1 col-height-1 col-white">
    	  	<span className="center">{this.props.text}</span>
    	  </div>
  	  </div>
    )
	}

});

module.exports = Air;
