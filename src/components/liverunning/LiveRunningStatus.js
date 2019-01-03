import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class LiveRunningStatus extends Component {
  render() {
    return (
        <div className="container-fluid p-0">
        <section className="resume-section p-3 p-lg-5 d-flex flex-column">
        <div className="my-auto">
                <h2 className="mb-5">Live Running Status</h2>
                <Form className="container">
                    <div className="row">
                        <div className="col-md">
                        <FormGroup>
                             <Label for="trainno">Please enter train number</Label>
                            <Input type="text" name="trainno" id="trainno" placeholder="12368" />
                         </FormGroup>
                        </div>
                        <div className="col-md">
                        <FormGroup>
                        <Label for="date">Select Date</Label>
                        <Input type="select" name="dateselect" id="date">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                        </FormGroup>
                        </div>
                        <div className="col-md submitbtn">
                            <Button color="info">Submit</Button>
                        </div>
                    </div>
                    </Form>
        </div>
        </section>
    </div>
    )
  }
}
