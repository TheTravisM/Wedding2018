"use strict";
console.log('Header Section JS loaded');

const React = require('react');
const ReactDom = require('react-dom');

var BridalPartySection = React.createClass({
  render: function () {
    return (
      <section id="wedding-party">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-start">
            <div className="col">
              <h2 className="title">Bridal Party</h2>
            </div>
            <div className="w-100"></div>
            {/* -- Titles -- */}
            <div className="col">
              <h3>Bridesmaids</h3>
            </div>
            <div className="col">
              <h3>Groomsmen</h3>
            </div>
            <div className="w-100"></div>
            <div className="col">
              <picture>
                <img src={require(`../img/wedding-party/ashden.jpg`)} className="picture img-thumbnail" alt="..." />
              </picture>
              <h4>Megan Barker</h4>
              <h5>The Bad Ass</h5>
            </div>
            <div className="col">
              <picture>
                <img src={require(`../img/wedding-party/ashden.jpg`)} className="picture img-thumbnail" alt="..." />
              </picture>
              <h4>Bryan Mikolay</h4>
            </div>
            <div className="w-100"></div>
            <div className="col">
              <picture>
                <img src={require(`../img/wedding-party/ashden.jpg`)} className="picture img-thumbnail" alt="..." />
              </picture>
              <h4>Kim Klump</h4>
              <h5>The Heavy Hitter</h5>
            </div>
            <div className="col">
              <picture>
                <img src={require(`../img/wedding-party/ashden.jpg`)} className="picture img-thumbnail" alt="..." />
              </picture>
              <h4>James Mikolay</h4>
            </div>
            <div className="w-100"></div>
            <div className="col">
              <picture>
                <img src={require(`../img/wedding-party/ashden.jpg`)} className="picture img-thumbnail" alt="..." />
              </picture>
              <h4>Ashden Stark</h4>
            </div>
            <div className="col">
              <picture>
                <img src={require(`../img/wedding-party/ashden.jpg`)} className="picture img-thumbnail" alt="..." />
              </picture>
              <h4>John Mikolay</h4>
            </div>
            <div className="w-100"></div>
            <div className="col">
              <picture>
                <img src={require(`../img/wedding-party/ashden.jpg`)} className="picture img-thumbnail" alt="..." />
              </picture>
              <h4>Jeanette</h4>
            </div>
            <div className="col">
              <picture>
                <img src={require(`../img/wedding-party/ashden.jpg`)} className="picture img-thumbnail" alt="..." />
              </picture>
              <h4>Joe Mikolay</h4>
            </div>
            <div className="w-100"></div>
            <div className="col">
              <picture>
                <img src={require(`../img/wedding-party/ashden.jpg`)} className="picture img-thumbnail" alt="..." />
              </picture>
              <h4>Brittany Beard</h4>
            </div>
            <div className="col">
              <picture>
                <img src={require(`../img/wedding-party/ashden.jpg`)} className="picture img-thumbnail" alt="..." />
              </picture>
              <h4>Jerry Barker</h4>
            </div>
            <div className="w-100"></div>
            <div className="col">
              <picture>
                <img src={require(`../img/wedding-party/ashden.jpg`)} className="picture img-thumbnail" alt="..." />
              </picture>
              <h4>Jackie Tannreuther</h4>
            </div>
            <div className="col">
              <picture>
                <img src={require(`../img/wedding-party/ashden.jpg`)} className="picture img-thumbnail" alt="..." />
              </picture>
              <h4>Tommy Barker</h4>
            </div>
            <div className="w-100"></div>
            <div className="col">
              <h4>Jr Bridesmaids</h4>
            </div>
            <div className="w-100"></div>
            <div className="col">
              <picture>
                <img src={require(`../img/wedding-party/ashden.jpg`)} className="picture img-thumbnail" alt="..." />
              </picture>
              <h4>Hailey Barker</h4>
            </div>
            <div className="col">
              <picture>
                <img src={require(`../img/wedding-party/ashden.jpg`)} className="picture img-thumbnail" alt="..." />
              </picture>
              <h4>Grace Barker</h4>
            </div>
          </div>
        </div>
      </section>
    );
  }
});

module.exports = BridalPartySection;