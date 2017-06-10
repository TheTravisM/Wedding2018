// JavaScript source code
console.log('App Loaded :)');
 
// SCSS Files 
require('../css/app.scss');

var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('../components/header');
var CountDown = require('../components/count-down');
var Map = require('../components/location');
var WeddingParty = require('../components/wedding-party');
var OurStory = require('../components/our-story');
var Regristry = require('../components/registry');
var RSVP = require('../components/rsvp');
var Gallery = require('../components/gallery');
var Footer = require('../components/footer');

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




 