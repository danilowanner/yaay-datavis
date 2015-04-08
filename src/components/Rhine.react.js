var React = require('react');

var Rhine = React.createClass({

	iconStyle: { marginTop: '-0.15em' },
	textStyle: { marginTop: '1.5em' },

	iconClass: "icon-rhein-cold",

	render: function(){
  	return (
  	  <div>
    	  <div className="col col-1 col-height-1 col-mint col-lg-offset-2 ">
    	    <div className={this.iconClass+" center"} style={this.iconStyle}></div>
    	    <span className="center" style={this.textStyle}>{this.props.temp}° C</span>
    	  </div>
    	  <div className="col col-1 col-height-1 col-white">
    	  	<span className="center">Rhine <br/>temperature</span>
    	  </div>
  	  </div>
    )
	}

});

module.exports = Rhine;
