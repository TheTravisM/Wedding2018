"use strict";
console.log('Header Section JS loaded');

var React = require('react');
var ReactDom = require('react-dom');

var HeaderSection = React.createClass({
  render: function () {
    return (
      <header id="header">
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <hgroup>
          <h1>Jackie <small>&amp;</small> Travis</h1>
          <h2>Wedding</h2>
          <time dateTime="2018-09-01">Sept 1st 2018</time>
        </hgroup>
      </header>
    );
  }
});

module.exports = HeaderSection;