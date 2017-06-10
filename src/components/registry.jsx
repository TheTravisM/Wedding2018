"use strict";
console.log('Registry Section JS loaded');

var React = require('react');
var ReactDom = require('react-dom');

var RegristrySection = React.createClass({
  render: function () {
    return (
      <section id="registry">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="title">Registry</h2>
              <p>Registry</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
});

module.exports = RegristrySection;


