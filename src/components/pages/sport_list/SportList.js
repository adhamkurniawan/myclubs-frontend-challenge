import React, { Component } from 'react';

class SportList extends Component {
  render() {
    return (
      <div className="SportList">
        <div className="jumbotron bg-jumbotron">
          <div className="text-center">
            <h1>Crossfit</h1>
            <p>MyClubs Crossfit Studio</p>
          </div>
        </div>
        <div className="container">
          <div className="row margin-bottom">
            <div className="col-md-6">
              <div className="panel panel-default">
                <div className="panel-body">
                  <h4>A high-intensity fitness programme incorporating elements from several sports and types of exercise.</h4>
                  <h5><strong>Type:</strong> Course</h5>
                  <h5><strong>Categories:</strong> Crosstraining</h5>
                  {/* <h5><strong>Reservation Email:</strong> office@myclubs.com</h5> */}
                  <h5><strong>Note:</strong> For advanced users only, please be early, bring a towel</h5>
                  <button type="button" data-toggle="modal" data-target="#modalConfirmation" className="btn btn-primary">Book Now</button>
                </div>
              </div>
              <address>
                <strong>Crossfit</strong> <br/>
                Nordring 8, wien-sued <br/>
                Vösendorf, AT 2334 <br/>
              </address>
            </div>
            <div className="col-md-6">
              <img src="https://files.myclubs.com/img_2c8352871c8e12db4244dd016d746377.jpg" className="img-responsive rounded" alt="Crossfit"/>
            </div>
          </div>
          <div className="row margin-bottom">
            <div className="col-md-12">
              <iframe title="Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d941.7939385876793!2d16.31745436776779!3d48.11418009827227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476daf2b0fd3e42d%3A0x42c6c726e24b1076!2sNordring+8%2C+2334+V%C3%B6sendorf%2C+Austria!5e0!3m2!1sen!2sid!4v1507805263465" width="100%" height="450" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
        </div>

        <div className="modal fade" id="modalConfirmation" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel">Book this course now?</h4>
              </div>
              <div className="modal-footer">
                <button id="btnConfirm" type="button" className="btn btn-primary" data-dismiss="modal">Yes</button>
                <button type="button" className="btn btn-default" data-dismiss="modal">No</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SportList;
