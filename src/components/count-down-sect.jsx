"use strict";
console.log('Count Down Section JS loaded');

var React = require('react');
var ReactDom = require('react-dom');

var CountDownSection = React.createClass({
  render: function () {
    return (
      <section id="count-down">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="title">Count Down</h2>
              <p>Thank you family and friends for checking out our webpage. We are very excited for the big day.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
});

module.exports = CountDownSection;

