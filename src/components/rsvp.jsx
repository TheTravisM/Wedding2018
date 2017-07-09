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
							<a className="btn btn-primary" target="_blank" role="button" aria-disabled="true" href="https://goo.gl/forms/bYYFJeG4q2TUGntN2">Click to RSVP Now!</a>
						</div>
					</div>
				</div>
			</section>
		);
	}
});

module.exports = RSVPSection;