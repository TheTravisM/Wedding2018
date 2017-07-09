"use strict";
console.log("Count Down Section JS loaded");

const React = require("react");
const ReactDom = require("react-dom");

class CountDownSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weddingDate: "September 1, 2018",
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentWillMount() {
    this.getTimeUntil(this.state.weddingDate);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.state.weddingDate), 1000);
  }

  leading0(num) {
    return num < 10 ? '0' + num : num;
  }

  getTimeUntil(weddingdate) {
    const time = Date.parse(this.state.weddingDate) - Date.parse(new Date());
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours   = Math.floor(time / (1000 * 60 * 60) % 24);
    const days    = Math.floor(time / (1000 * 60 * 60 * 24));
    this.setState({ days, hours, minutes, seconds });
  }

  render() {
    return (
      <section id="count-down">
        <div className="container">
          <div className="row">
            <div className="col">
              <time dateTime="2018-09-01" className="clock-container">
                <div className="clock-block">
                  <span className="time-descriptior">DAYS</span>
                  <span className="ticker">{this.leading0(this.state.days)}</span>
                </div>
                <div className="clock-block">
                  <span className="time-descriptior">HOURS</span>
                  <span className="ticker">{this.leading0(this.state.hours)}</span>
                </div>
                <i> : </i>
                <div className="clock-block">
                  <span className="time-descriptior">MINS</span>
                  <span className="ticker">{this.leading0(this.state.minutes)}</span>
                </div>
                <i> : </i>
                <div className="clock-block">
                  <span className="time-descriptior">SECS</span>
                  <span className="ticker">{this.leading0(this.state.seconds)}</span>
                </div>
              </time>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

module.exports = CountDownSection;
