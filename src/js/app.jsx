// JavaScript source code
console.log('App Loaded :)');
 
// SCSS Files 
require('../css/app.scss');

const React    = require('react');
const ReactDOM = require('react-dom');

const Header       = require('../components/header');
const CountDown    = require('../components/count-down');
const Location     = require('../components/location');
const WeddingParty = require('../components/wedding-party');
const OurStory     = require('../components/our-story');
const Regristry    = require('../components/registry');
const RSVP         = require('../components/rsvp');
const Gallery      = require('../components/gallery');
const Footer       = require('../components/footer');

ReactDOM.render (
  <div>
    <Header/>
    <main>
      <CountDown/>
      <Location/>
      <WeddingParty/>
      <OurStory/>
      <Regristry/>
      <RSVP/>
      <Gallery/>
    </main>
    <Footer/>
    <script src="/public/assets/bundle.js"></script>
  </div>,
  document.getElementById('app')
);




 