import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './index/Index';
import LiveRunningStatus from './liverunning/LiveRunningStatus';
import Pnr from './pnr/Pnr';
import About from './about/About';
import TrainBetweenStations from './trainbetweenstation/TrainBetweenStations';
import Header from './header/Header'


export default class HomePage extends Component {
render() {
 return (
    <Router>
     <div>
        <Header/>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">Clarence Taylor</span>          
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                    Home </Link>
                </li>
                <li className="nav-item">
                    <Link to="/pnr" className="nav-link">
                    PNR Status </Link>
                </li>
                <li className="nav-item">
                    <Link to="/liverunningstatus" className="nav-link">
                    Live Running</Link>
                </li>
                <li className="nav-item">
                    <Link to="/trainbetweenstation" className="nav-link">
                    Train Between Stations</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">
                    About Us</Link>
                </li>
                </ul>
            </div>
        </nav>
        <div>
            <Route exact path="/" component={Index}></Route>
            <Route exact  path="/liverunningstatus" component={LiveRunningStatus}></Route>
            <Route exact  path="/pnr" component={Pnr}></Route>
            <Route exact  path="/about" component={About}></Route>
            <Route exact  path="/trainbetweenstation" component={TrainBetweenStations}></Route>
        </div>
    </div>
    </Router>
        )
    }
}