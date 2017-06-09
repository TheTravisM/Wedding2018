// JavaScript source code
console.log('App Loaded');
 
// SCSS Files 
require('../css/app.scss');

var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('../components/header-sect');
var CountDown = require('../components/count-down-sect');
var Map = require('../components/location-sect');
var WeddingParty = require('../components/wedding-party-sect');
var OurStory = require('../components/our-story-sect');
var Regristry = require('../components/registry-sect');
var RSVP = require('../components/rsvp-sect');
var Gallery = require('../components/gallery-sect');
var Footer = require('../components/footer-sect');

ReactDOM.render (
  <div>
    <Header/>
    <main>
      <CountDown/>
      <Map/>
      <WeddingParty/>
      <OurStory/>
      <Regristry/>
      <RSVP/>
      <Gallery/>
    </main>
    <Footer />
    <script src="/public/assets/bundle.js"></script>
  </div>,
  document.getElementById('app')
);




 