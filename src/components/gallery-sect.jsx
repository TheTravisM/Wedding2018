"use strict";
console.log('Gallery Section JS loaded');

var React = require('react');
var ReactDom = require('react-dom');

var GallerySection = React.createClass({
	render: function () {
		return (
			<section id="gallery">
				<div className="container">
					<div className="row">
						<div className="col">
							<h2 className="title">Gallery</h2>
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

module.exports = GallerySection;