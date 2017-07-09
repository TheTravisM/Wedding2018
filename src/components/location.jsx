"use strict";
console.log('MAP Section JS loaded');

const React = require('react');
const ReactDom = require('react-dom');

class MapSection extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      srcUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12389.822580515747!2d-84.3402157!3d39.0733179!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x300fbc78ad6878e3!2sImmaculate+Heart+of+Mary+Church!5e0!3m2!1sen!2sus!4v1499560017228"
    }
  }

  render() {
    return (
      <section id="location">
        <div className="container">
          <h2 className="title">Location</h2>
          <div className="row">
            <div className="col col-12 col-md-5">
              <div className="card">
                <div className="card-block">
                  <h3 className="card-title">Church and Reception</h3>
                  <h4 className="card-title">Immaculate Heart of Mary</h4>
                  <p className="card-text">7800 Beechmont Ave,<br />Cincinnati, OH 45255</p>
                </div>
              </div>
            </div>
            <div className="col col-12 col-md-7">
              <div className="img-thumbnail">
                <iframe className="map" frameBorder="0" src={this.state.srcUrl}>
                  Map to Chruch and Wedding
                </iframe>
              </div>
            </div>r
          </div>
        </div>
      </section>
    );
  }
}

module.exports = MapSection;
