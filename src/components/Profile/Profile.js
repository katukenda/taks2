import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import { Button, Card, CardBody, Col, Form, Input, InputGroup, InputGroupAddon, InputGroupText, } from 'reactstrap';
import * as actionTypes from '../../store/actions/actionTypes';
import Detail from '../Details/detail';


class Profile extends Component {

  constructor(props) {
    super(props)

    this.state = {

      details: [
        { id: 'id1', name: 'Devoloping' },
        { id: 'id2', name: 'Bug Fixing' },
        { id: 'id3', name: 'BA' },
        { id: 'id4', name: 'QA' }
      ],
      showDetails: true,
      viewModal: true



    }

  }



  onChangeReg = (event) => {

    event.preventDefault()
    this.setState({

      [event.target.name]: event.target.value
    });
    if (event.target.name === "username") {
      this.props.onNameSubmit(event.target.value);
    }
    if (event.target.name === "email") {
      this.props.onEmailSubmit(event.target.value);
    }


  }

  registerHandler = () => {


    alert('Succesfully Updated')
    this.setState({
      viewModal: true
    })
  }

  modalHandler = () => {

    this.setState({
      viewModal: false
    })

  }
  modalHandlerBack = () => {
    this.setState({
      viewModal: true
    })

  }
  deletePersonHandler = (detailIndex) => {
    // const persons = this.state.persons.slice();
    const details = [...this.state.details];
    details.splice(detailIndex, 1);
    this.setState({ details: details });
  }

  toggleDetailHandler = () => {
    const doesShow = this.state.showDetails;
    this.setState({ showDetails: !doesShow });
  }




  render() {


    let details = null;

    if (this.state.showDetails) {
      details = (
        <div>
          {this.state.details.map((detail, index) => {
            return <Detail
              click={() => this.deletePersonHandler(index)}
              name={detail.name}
              key={detail.id}
              changed={(event) => this.nameChangedHandler(event, detail.id)} />
          })}
        </div>
      );
    }




    return (
      <div>

        {this.state.viewModal === true ?



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
              <div classNameName="app flex-row " style={{ alignItems: 'right' }}>

                <Col md="9" lg="25" xl="0">
                  <Card classNameName="mx-4" style={{ width: '100%', alignItems: 'right' }}>
                    <CardBody classNameName="p-4">
                      <Form style={{ alignItems: 'right' }}>
                        <InputGroup classNameName="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i classNameName="icon-user"></i>
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
                        <InputGroup classNameName="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>@</InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="email"
                            name='email'
                            value={this.props.mail}
                            onChange={this.onChangeReg}
                            placeholder={this.props.mail}
                            required />
                        </InputGroup>

                        <Button color="success" onClick={this.registerHandler} block>Comfirm</Button>
                        <Button onClick={this.modalHandlerBack} block>Back</Button>
                      </Form>
                    </CardBody>

                  </Card>

                </Col>

              </div>
            </div>

          </Modal>
        }

        <div>
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Task Type</h5>
                  <p className="card-text">{details}</p>


                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Selected</h5>
                  <p className="card-text">{details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button
            onClick={this.toggleDetailHandler}>Toggle Details</button>


        </div>
      </div>

    )
  }

}






const mapStateToProps = state => {
  return {
    uname: state.reg.username,
    mail: state.reg.email,
    pswrd: state.reg.password,
    repswrd: state.reg.repassword,

  };
}

const mapDispatchToProps = dispatch => {
  return {
    onNameSubmit: (name) => dispatch({ type: actionTypes.SUBMIT_NAME, userData: name }),
    onEmailSubmit: (email) => dispatch({ type: actionTypes.SUBMIT_EMAIL, userData: email }),
    onPasswordSubmit: (pwd) => dispatch({ type: actionTypes.SUBMIT_PASSWORD, userData: pwd }),
    onRePasswordSubmit: (repwd) => dispatch({ type: actionTypes.SUBMIT_REPASSWORD, userData: repwd })
  };


};


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
