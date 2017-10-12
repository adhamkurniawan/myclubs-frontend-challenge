import React, { Component } from 'react';
import Service from './Service';
import Product from './Product';

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <div className="container">
          <div className="row">
            <Service />
          </div>
        </div>
        <Product />
      </div>
    )
  }
}

export default Content;
