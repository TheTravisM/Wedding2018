"use strict";
console.log('Our Story Section JS loaded');

var React = require('react');
var ReactDom = require('react-dom');

var HeaderSection = React.createClass({
  render: function () {
    return (
      <section id="our-story">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="title">Our Story</h2>
              <p>Travis and I met through a mutual friend Ashden Stark. We hit it off right away. Our first date was at Bella Lunas. Travis was planning on taking me to Terry�s turf club, but I was too fancy for burgers. So he was forced to step his game up. At Bella Luna, the waitress asked them if we were celebrating anything. Travis told her, �Yes we are. She is celebrating she is pregnant, and I am celebrating it is not mine!� Jackie knew at this moment, he was definitely the one for her. That poor waitress, he never let up the whole date. The waitress would ask if they wanted anything to drink, his reply was, �go ahead hun, it�s not bad for the baby if you have just one glass.� Or at the end when he told the waitress, �Better finish that, you are eating for two.� After the entertaining dinner, we went to Game Works and I smoked him in every game. After that first date, we couldn't get enough of one another.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
});

module.exports = HeaderSection;




