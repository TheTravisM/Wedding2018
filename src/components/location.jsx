"use strict";
console.log('MAP Section JS loaded');

var React = require('react');
var ReactDom = require('react-dom');

var MapSection = React.createClass({
  render: function () {
    return (
      <section id="location">
        <div id="mapDiv"></div>
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="title">Location</h2>
              <p>Church and Reception</p>
              <p>Immaculate Heart of Mary</p>
              <p>7800 Beechmont Ave, Cincinnati, OH 45255</p>
              <p>Pictures</p>
              <p>Directions to IHM</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
});

module.exports = MapSection;
