import React, { Component } from 'react';

class Service extends Component {
  render() {
    return (
      <div className="Service">
        <h2 className="text-center">
          <strong>Our Services</strong>
        </h2>

        <br/><br/>

        <div className="col-md-4 text-center">
          <i className="fa fa-code fa-4x"></i>
          <h3>Web Development</h3>
          <p>
            You probably haven't heard of them hot chicken live-edge, disrupt single-origin coffee pinterest wolf la croix ramps stumptown.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <i className="fa fa-desktop fa-4x"></i>
          <h3>Web Design</h3>
          <p>
            You probably haven't heard of them hot chicken live-edge, disrupt single-origin coffee pinterest wolf la croix ramps stumptown.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <i className="fa fa-mobile fa-4x"></i>
          <h3>Mobile Development</h3>
          <p>
            You probably haven't heard of them hot chicken live-edge, disrupt single-origin coffee pinterest wolf la croix ramps stumptown.
          </p>
        </div>
      </div>
    )
  }
}

export default Service;
