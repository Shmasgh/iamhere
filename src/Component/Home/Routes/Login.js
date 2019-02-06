import React from 'react';
import { Button, Modal, FormGroup, Label, Input, ModalFooter
    , Form} from 'reactstrap';
import { Link } from "react-router-dom"
import './Login.css'
class Modale extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }


    setToken = (token) => {
        localStorage.setItem("Token", token);
    }

    render() {
        return (
            <div>
                <Button className="LoginButton" onClick={this.toggle}><strong> Connexion</strong></Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                   <div className="mybackground">
                    <div className="loginme">
                    <Form inline>
                    <div className="email">
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label  for="exampleEmail" className="mr-sm-2">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="" />
        </FormGroup>
        </div>
        <div className="password">
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 ">
          <Label  for="examplePassword" className="mr-sm-2">Mot de passe</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="" />
        </FormGroup>
        
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 confirmer">
          <Label  for="examplePassword" className="mr-sm-2">Confirmer</Label>
          <Input type="password" name="" id="examplePassword" placeholder="" />
        </FormGroup>
        </div>
      </Form>
                    </div>
                    <ModalFooter>
                        <Button className="colorme" color="primary" onClick={ () => {this.toggle()
                        this.setToken("chaima")}} >
                        <Link to="/user/user/" style={{textDecoration : "none", color : "white"}}>
                        Connexion
                        
                        </Link>
                        </Button>{' '}
                        <Button className="colorme" color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                    </div>
                </Modal>


            </div>
        );
    }
}



export default Modale;