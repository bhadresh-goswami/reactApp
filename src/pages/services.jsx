import React, { Component } from "react";

import ServiceBox from "./servicesbox";

class Services extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">At Your Service</h2>
            <hr className="primary" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <ServiceBox
              title="my first Serv1"
              description="this is mini description of services! this is mini description of services! this is mini description of services!"
            />
            <ServiceBox
              title="my first Serv2"
              description="this is mini description of services! this is mini description of services! this is mini description of services!"
            />
            <ServiceBox
              title="my first Serv3"
              description="this is mini description of services! this is mini description of services! this is mini description of services!"
            />
            <ServiceBox
              title="my first Serv4"
              description="this is mini description of services! this is mini description of services! this is mini description of services!"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
