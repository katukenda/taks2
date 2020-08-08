import React, { Component, useState } from 'react';
import {connect} from 'react-redux';
import Modal from 'react-modal';

import { Button, Card, CardBody, Col,  Form, Input, InputGroup, InputGroupAddon, InputGroupText,  } from 'reactstrap';
import * as actionTypes from '../../store/actions/actionTypes';



class Profile extends Component {

  constructor(props) {
    super(props)

 this.state ={
   viewModal: true
 }

 }



  onChangeReg=(event)=>{ 

    event.preventDefault()
    this.setState({
        
      [event.target.name]:event.target.value
    });
    if(event.target.name === "username"){
      this.props.onNameSubmit(event.target.value);
    }
    if(event.target.name === "email"){
      this.props.onEmailSubmit(event.target.value);
    }
  
  
}

registerHandler = () => {
 

    alert('Succesfully Updated')
    this.setState({
      viewModal:true
    })
}

modalHandler=()=>{

  this.setState({
    viewModal:false
  })

}
modalHandlerBack=()=>{

  this.setState({
    viewModal:true
  })

}




  render() {

    



    return (
      <div>
      
      { this.state.viewModal === true?
      


        <div>

<Card>
  <header>
  <h2>User Name:{this.props.uname}</h2>
  </header>
  <h3>Email:{this.props.mail}</h3>
  
</Card>
<button color="danger" onClick={this.modalHandler}>Update</button>  
        
        



    </div>

      :
      <Modal isOpen={true} >
      <h2>Update Datails</h2>
      <div >
      <div className="app flex-row " style={{ alignItems:'right' }}>
            
                <Col md="9" lg="25" xl="0">
                  <Card className="mx-4" style={{ width: '100%', alignItems:'right' }}>
                    <CardBody className="p-4">
                      <Form style={{ alignItems:'right' }}>
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
                          placeholder={this.props.uname} 
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
                          placeholder={this.props.mail} 
                          required/>
                        </InputGroup>
                    
                        <Button color="success" onClick={this.registerHandler} block>Comfirm</Button>
                        <Button  onClick={this.modalHandlerBack} block>Back</Button>
                      </Form>
                    </CardBody>
                   
                  </Card>
                 
                </Col>
         
                
          </div>
      </div>
      
      </Modal>
  }
      </div>

    )
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


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
