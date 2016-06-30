var React = require('react');

var Noise = React.createClass({

	iconStyle: { marginTop: '-0.15em' },
	textStyle: { marginTop: '1.5em' },

	render: function(){

		var icon = "icon-sound-silent"
		if (this.props.level>45) {
			icon = "icon-sound-medium"
		}
		else if(this.props.level>55){
			icon = "icon-sound-loud"
		}

  	return (
  	  <div>
			<div className="col col-1 col-height-1 col-cream-gold col-lg-offset-1">
				<div className={icon + " center"} style={this.iconStyle}></div>
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
