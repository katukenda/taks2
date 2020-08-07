import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import * as actionTypes from '../../../store/actions/actionTypes';




class Login extends Component {

  constructor(props) {
    super(props)
 
        this.state = {
            
            
            showLogin:true
        }
    }






  onChangelog=(event)=>{
      this.setState({
        [event.target.name]:event.target.value
      });
   
      if(event.target.name === "loginname"){
        this.props.onLogNameSubmit(event.target.value);
      }
      if(event.target.name === "loginpassword"){
        this.props.onLogPasswordSubmit(event.target.value);
     
      }

  }



  loginHandler = () => {
  
    if(this.props.pswrd[0]===this.props.lpassword[0] && this.props.uname[0] === this.props.lname[0]){
      
      this.props.history.push("./dashboard")
    }
    
    else{
      alert("User Undifined")
    }
   
  
  }


  render() {



  


    return (
      <div className="app flex-row align-items-center">

       
        <Container>
    {/* <p> welcome:{this.props.uname}</p> */}
    
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                  <Form >
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input 
                        type="text" 
                        name= "loginname"
                        placeholder="Username" 
                        value={this.props.lname}
                        onChange={this.onChangelog} 
                        
                       
                        
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
                        name="loginpassword"
                        placeholder="Password"
                        value={this.props.lpassword}
                        onChange={this.onChangelog} 
                         
                        
                        
                        required/>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button  color="primary" className="px-4" onClick={this.loginHandler}>Login</Button>

                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <Button  color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
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
   pswrd: state.reg.password,
  

   lname: state.log.logname,
   lpassword: state.log.logpassword,

   
  };
}

const mapDispatchToProps = dispatch => {
  return {
   
    onLogNameSubmit: (logn) => dispatch({type: actionTypes.SUBMIT_LOGNAME, loginData:logn}),
    onLogPasswordSubmit: (logps) => dispatch({type: actionTypes.SUBMIT_LOGPASSWORD, loginData:logps})
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);
