import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

export default class TrainBetweenStations extends Component {
  render() {
    return (
        <div className="container-fluid p-0">
        <section className="resume-section p-3 p-lg-5 d-flex flex-column">
        <div className="my-auto">
            <h2 className="mb-5">Train Between Stations</h2>
            <Form className="container">
            <div className="row">
                <div className="col-md">
                <FormGroup>
                     <Label for="fromstation">From Station</Label>
                    <Input type="text" name="fromstation" id="fromstation" placeholder="From Station" />
                 </FormGroup>
                </div>
                <div className="col-md">
                <FormGroup>
                <Label for="tostation">To Station</Label>
                <Input type="text" name="tostation" id="tostation" placeholder="To Station" />
                </FormGroup>
                </div>
                <div className="col-md">
                <FormGroup>
                <Label for="date">Select Date</Label>
                <Input type="text" name="date" id="date" placeholder="Select Date" />
                </FormGroup>
                </div>
                <div className="col-md submitbtn">
                    <Button color="info">Check Trains</Button>
                </div>
            </div>
        </Form>   
        </div>
        </section>
    </div>
    )
  }
}
