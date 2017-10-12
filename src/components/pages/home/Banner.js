import React, { Component } from 'react';


class Banner extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="text-center">
            <h1>Welcome to myClub Sport Centre!</h1>
            <p>We're leading sport centre training course in Vienna and Switzerland.</p>
            <p><strong>Ready to start?</strong></p>
            <p><a className="btn btn-primary btn-lg" to="" role="button">Get Started Now</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Banner;
