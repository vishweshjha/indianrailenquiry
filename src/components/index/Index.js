import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";

export default class Index extends Component {
  render() {
    return (
        <div className="container-fluid p-0">
        <section className="resume-section p-3 p-lg-5 d-flex flex-column">
        <p>Please click on the below buttons to check the PNR, Live Running Status and train between Stations</p>
        <div className="row">
            <div className="col-sm">
            <Link to="/pnr"><Button color="info" >Check PNR</Button></Link>
            </div>
            <div className="col-sm">
             <Link to="/liverunningstatus"> <Button color="info">Check Live Running Status</Button> </Link>
            </div>
            <div className="col-sm">
            <Link to="/trainbetweenstation"><Button color="info">Train Between Stations</Button></Link>
            </div>
        </div>
        </section>
    </div>
    )
  }
}
