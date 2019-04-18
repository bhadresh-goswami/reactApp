import React, { Component } from "react";

class ServiceBox extends Component {
  state = {};
  render() {
    return (
      <div className="col-lg-3 col-md-6 text-center">
        <div className="service-box">
          <i className="fa fa-4x fa-diamond text-primary sr-icons" />
          <h3>{this.props.title}</h3>
          <p className="text-muted">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default ServiceBox;
