import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

export default class Pnr extends Component {
  render() {
    return (
        <div className="container-fluid p-0">
        <section className="resume-section p-3 p-lg-5 d-flex flex-column">
        <div className="my-auto">
                <h2 className="mb-5">Check PNR</h2>
            <Form className="container">
                 <div className="row">
                 <div className="col-md">
                 <FormGroup>
                      <Label for="pnr">Please enter PNR No.</Label>
                     <Input type="text" name="pnr" id="pnr" placeholder="1212123232" />
                  </FormGroup>
                 </div>
                 <div className="col-md submitbtn">
                            <Button color="info">Check PNR</Button>
                    </div>
                 </div>
            </Form>    
        </div>
        </section>
    </div>
    )
  }
}
