import React, { Component } from 'react';
import ProductImage from './images/p.png';

class Product extends Component {
  render() {
    return (
      <div className="Product">
        <div className="container">
          <div className="text-center">
            <h2><strong>Our Product</strong></h2>
          </div>

          <br/><br/>

          <div className="row">
            <div className="col-md-6">
              <img src={ProductImage} className="img-responsive rounded" alt="Product"/>
            </div>
            <div className="col-md-3">
              <h3>myClub</h3>
              <p>
                The largest network of sports providers in Austria.
                Yoga, fitness, climbing, tennis - all included in a monthly membership for the fixed price from 39 €.
              </p>

              <h4>Core Features</h4>
              <ul>
                <li>Full Selection</li>
                <li>Training Individually</li>
                <li>Without Bond</li>
              </ul>

              <small>You maybe wondering what is that mean? Here's the explanation <i className="fa fa-arrow-right"></i></small>
            </div>
            <div className="col-md-3">
              <h3>Full Selection</h3>
              <p>Train at the best fixed prices for the best sports fans in your city.</p>

              <h3>Training Individually</h3>
              <p>Choose from over 30 sports and discover the latest workouts in your area.</p>

              <h3>Without Bond</h3>
              <p>Do not feel like gagging? We neither. myClubs is terminable on a monthly basis.</p>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <a href="/sport_list" className="btn btn-default">Get Started Now <i className="fa fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Product;
