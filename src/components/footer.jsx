"use strict";
console.log('Footer Section JS loaded');

var React = require('react');
var ReactDom = require('react-dom');

var FooterSection = React.createClass({
	render: function () {
		return (
			{/* -- [Footer] -- */},
			<footer id="footer">
				<ul id="scene" className="scene unselectable" data-friction-x="0.1" data-friction-y="0.1" data-scalar-x="25" data-scalar-y="15">
					<li className="layer" data-depth="0.00"></li>
					<li className="layer" data-depth="0.10">
						<div className="background"></div>
					</li>
					<li className="layer" data-depth="0.10">
						<div className="light orange b phase-4"></div>
					</li>
					<li className="layer" data-depth="0.10">
						<div className="light purple c phase-5"></div>
					</li>
					<li className="layer" data-depth="0.10">
						<div className="light orange d phase-3"></div>
					</li>
					<li className="layer" data-depth="0.15">
						<ul className="rope depth-10">
							<li>
								<img src={require("../img/footer/rope.png")} alt="Rope" />
							</li>
							<li className="hanger position-2">
								<div className="board cloud-2 swing-1"></div>
							</li>
							<li className="hanger position-4">
								<div className="board cloud-1 swing-3"></div>
							</li>
							<li className="hanger position-8">
								<div className="board birds swing-5"></div>
							</li>
						</ul>
					</li>
					<li className="layer title-flex-box" data-depth="0.20">
						<hgroup>
							<h1>Jackie <small>&amp;</small> Travis</h1>
							<h2>Wedding</h2>
							<time dateTime="2018-09-01">Sept 1st 2018</time>
						</hgroup>

						{ /*<h1 className="title">Jackie &amp; Travis
					<br />
							<small>Wedding Sept 1st 2018</small>
						</h1>*/ }
					</li>
					<li className="layer" data-depth="0.30">
						<ul className="rope depth-30">
							<li>
								<img src={require("../img/footer/rope.png")} alt="Rope" />
							</li>
							<li className="hanger position-1">
								<div className="board cloud-1 swing-3"></div>
							</li>
							<li className="hanger position-5">
								<div className="board cloud-4 swing-1"></div>
							</li>
						</ul>
					</li>
					<li className="layer" data-depth="0.30"><div className="wave paint depth-30"></div></li>
					<li className="layer" data-depth="0.40"><div className="wave plain depth-40"></div></li>
					<li className="layer" data-depth="0.50"><div className="wave paint depth-50"></div></li>
					<li className="layer" data-depth="0.60"><div className="lighthouse depth-60"></div></li>
					<li className="layer" data-depth="0.60">
						<ul className="rope depth-60">
							<li>
								<img src={require("../img/footer/rope.png")} alt="Rope" />
							</li>
							<li className="hanger position-3">
								<div className="board birds swing-5"></div>
							</li>
							<li className="hanger position-6">
								<div className="board cloud-2 swing-2"></div>
							</li>
							<li className="hanger position-8">
								<div className="board cloud-3 swing-4"></div>
							</li>
						</ul>
					</li>
					<li className="layer" data-depth="0.60"><div className="wave plain depth-60"></div></li>
					<li className="layer" data-depth="0.80"><div className="wave plain depth-80"></div></li>
					<li className="layer" data-depth="1.00"><div className="wave paint depth-100"></div></li>
				</ul>
				<script>
					var scene = $('#scene');
					scene.parallax();
				</script>
			</footer>
		);
	}
});

module.exports = FooterSection;
