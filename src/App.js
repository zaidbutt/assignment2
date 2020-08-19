import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './vali.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import Form from 'react-bootstrap/Form';

import { Button } from 'reactstrap';

export default class App extends Component
{ 
  constructor(){
    super();

    this.state = {
     checkbox: true,
     
     
    }
}

handleCheckbox(e){
   
 
 this.setState({checkbox: e.target.checked,
     
    })
}


  render()
  {
  return (

    <Form>
    <Container>
  <Row id="r1" >
    <Col>Estate</Col>
    <Col>5-6 passengers</Col>
    <Col>7 passengers</Col>
    <Col>8 passengers</Col>
    <Col>9 passengers</Col>
    <Col>14 passengers</Col>
    <Col>16 passengers</Col>
    
  
  </Row>

  <Row id='r2' >
  <Col>
    <input id="c1"  type='checkBox' onChange={this.handleCheckbox.bind(this)} checked={this.state.checkbox}></input>
    <input type='text' class="inputt" pattern="[0-9]{2}" disabled={!this.state.checkbox} ></input>
    <label id="c1">%</label>
    </Col>

    <Col>
    <input id="c1"  type='checkBox' onChange={this.handleCheckbox.bind(this)} checked={this.state.checkbox}></input>
    <input type='text' class="inputt" pattern="[0-9]{2}" disabled={!this.state.checkbox}></input>
    <label id="c1">%</label>
    </Col>
  
    <Col>
    <input id="c1"  type='checkBox' onChange={this.handleCheckbox.bind(this)} checked={this.state.checkbox}></input>
    <input type='text' class="inputt" pattern="[0-9]{2}" disabled={!this.state.checkbox}></input>
    <label id="c1">%</label>
    </Col>
    <Col>
    <input id="c1"  type='checkBox' onChange={this.handleCheckbox.bind(this)} checked={this.state.checkbox}></input>
    <input type='text' class="inputt" pattern="[0-9]{2}" disabled={!this.state.checkbox}></input>
    <label id="c1">%</label>
    </Col>
    <Col>
    <input id="c1"  type='checkBox'onChange={this.handleCheckbox.bind(this)} checked={this.state.checkbox}></input>
    <input type='text' class="inputt" pattern="[0-9]{2}" disabled={!this.state.checkbox}></input>
    <label id="c1">%</label>
    </Col>
    <Col>
    <input id="c1"  type='checkBox' onChange={this.handleCheckbox.bind(this)} checked={this.state.checkbox}></input>
    <input type='text' class="inputt" pattern="[0-9]{2}" disabled={!this.state.checkbox}></input>
    <label id="c1">%</label>
    </Col>
    <Col>
    <input id="c1"  type='checkBox' onChange={this.handleCheckbox.bind(this)} checked={this.state.checkbox}></input>
    <input type='text' class="inputt" pattern="[0-9]{2}" disabled={!this.state.checkbox}></input>
    <label id="c1">%</label>
    </Col>
    




     
  
  </Row>
 

  <Row id='r3' >
  <Col>
    <input id="c1"  type='checkBox' onChange={this.handleCheckbox.bind(this)} checked={!this.state.checkbox}></input>
    <input type='text' class="inputt"  pattern="[0-9]"  disabled={this.state.checkbox}></input>
    <label id="c1">£</label>
    </Col>

    <Col>
    <input id="c1"  type='checkBox' onChange={this.handleCheckbox.bind(this)} checked={!this.state.checkbox}></input>
    <input type='text' class="inputt" pattern="[0-9]{2}"  disabled={this.state.checkbox}></input>
    <label id="c1">£</label>
    </Col>
  
    <Col>
    <input id="c1"  type='checkBox' onChange={this.handleCheckbox.bind(this)} checked={!this.state.checkbox}></input>
    <input type='text' class="inputt" pattern="[0-9]{2}"  disabled={this.state.checkbox}></input>
    <label id="c1">£</label>
    </Col>
    <Col>
    <input id="c1"  type='checkBox' onChange={this.handleCheckbox.bind(this)} checked={!this.state.checkbox}></input>
    <input type='text' class="inputt" pattern="[0-9]{2}"  disabled={this.state.checkbox}></input>
    <label id="c1">£</label>
    </Col>
    <Col>
    <input id="c1"  type='checkBox' onChange={this.handleCheckbox.bind(this)} checked={!this.state.checkbox}></input>
    <input type='text' class="inputt" pattern="[0-9]{2}"  disabled={this.state.checkbox}></input>
    <label id="c1">£</label>
    </Col>
    <Col>
    <input id="c1"  type='checkBox' onChange={this.handleCheckbox.bind(this)} checked={!this.state.checkbox}></input>
    <input type='text' class="inputt" pattern="[0-9]{2}"  disabled={this.state.checkbox}></input>
    <label id="c1">£</label>
    </Col>
    <Col>
    <input id="c1"  type='checkBox' onChange={this.handleCheckbox.bind(this)} checked={!this.state.checkbox}></input>
    <input type='text' class="inputt" pattern="[0-9]{2}"  disabled={this.state.checkbox}></input>
    <label id="c1">£</label>
    </Col>
    
    
    
    
 
     
     
  
  </Row>
 

  <button type="submit" class="btn btn-primary">Submit</button>
</Container>

</Form>
  );

  }
   
}