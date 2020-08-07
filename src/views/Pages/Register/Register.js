import React, { Component } from 'react';
import {connect} from 'react-redux';

import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import * as actionTypes from '../../../store/actions/actionTypes';


class Register extends Component {

  onChangeReg=(event)=>{ 
    this.setState({
      [event.target.name]:event.target.value
    });
    if(event.target.name === "username"){
      this.props.onNameSubmit(event.target.value);
    }
    if(event.target.name === "email"){
      this.props.onEmailSubmit(event.target.value);
    }
    if(event.target.name === "password"){
      this.props.onPasswordSubmit(event.target.value);
    }
    if(event.target.name === "repassword"){
      this.props.onRePasswordSubmit(event.target.value);
    }
  
}

registerHandler = () => {
  const regpass = this.props.pswrd[0];
  const reregpass = this.props.repswrd[0];
  
  if(regpass===reregpass){
    alert('Registration Success')
    this.props.history.push("./login")
  }else{
    alert("Password Mismatch")
  }
 

}





  render() {






    return (

      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit={this.registerHandler}>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input 
                      type="text" 
                      name='username' 
                      value={this.props.uname}
                      onChange={this.onChangeReg} 
                      placeholder="Username" 
                     
                      required />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input 
                      type="email" 
                      name='email' 
                      value={this.props.mail}
                      onChange={this.onChangeReg}  
                      placeholder="Email" 
                      autoComplete="email" 
                      required/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input 
                      type="password"
                      name='password' 
                      value={this.props.pswrd}
                      onChange={this.onChangeReg}   
                      placeholder="Password" 
                      autoComplete="new-password" 
                      required/>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input 
                      type="password" 
                      name='repassword' 
                      value={this.props.repswrd}
                      onChange={this.onChangeReg}
                      placeholder="Repeat password" 
                      autoComplete="new-password" 
                      required/>
                    </InputGroup>
                    <Button type="submit"  color="success" block>Create Account</Button>
                  </Form>
                </CardBody>




                <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook mb-1" block><span>facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter mb-1" block><span>twitter</span></Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return{
   uname: state.reg.username,
   mail: state.reg.email,
   pswrd: state.reg.password,
   repswrd: state.reg.repassword,
   
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onNameSubmit: (name) => dispatch({type: actionTypes.SUBMIT_NAME, userData:name}),
    onEmailSubmit: (email) => dispatch({type: actionTypes.SUBMIT_EMAIL, userData:email}),
    onPasswordSubmit: (pwd) => dispatch({type: actionTypes.SUBMIT_PASSWORD, userData:pwd}),
    onRePasswordSubmit: (repwd) => dispatch({type: actionTypes.SUBMIT_REPASSWORD, userData:repwd})
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Register);
