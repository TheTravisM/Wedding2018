"use strict";
console.log('RSVP Section JS loaded');

var React = require('react');
var ReactDom = require('react-dom');

var RSVPSection = React.createClass({
	render: function () {
		return (
			<section id="RSVP">
				<div className="container">
					<div className="row">
						<div className="col">
							<h2 className="title">RSVP</h2>
							Name (first & last)
							Number Adults
							Number of kids
						</div>
					</div>
				</div>
			</section>
		);
	}
});

module.exports = RSVPSection;