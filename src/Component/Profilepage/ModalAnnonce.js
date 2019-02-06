import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './ModalAnnonce.css'

class ModalAnnonce extends React.Component {
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

    render() {
        return (
            <div >
                <Button className="leme " onClick={this.toggle}> <i class="fas fa-plus fa-5x"></i>Ajouter une annonce </Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>

                    <ModalHeader className="title-form" toggle={this.toggle}>Veuillez remplir les champs</ModalHeader>
                    <ModalBody>

                        <FormGroup>
                            <Label className="title-form" for="exampleEmail">Ajouter le titre de l'annonce</Label>
                            <Input />
                            <Label className="title-form" for="exampleText">Ajouter une description</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                            <Label className="title-form" for="exampleNumber">Prix horaire en dinars</Label>
                            <Input
                                type="number"
                                name="number"
                                id="exampleNumber"
                                placeholder=""
                            />
                            <Label className="title-form" for="exampleDate">Date </Label>
                            <Input
                                type="date"
                                name="date"
                                id="exampleDate"
                                placeholder="date placeholder"
                            />
                            <Label className="title-form padding" for="exampleSelect">Selectionnez le type de l'annonce</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option></option>
                                <option>Garde enfants</option>
                                <option>Garde animaux</option>
                                <option>Assistance personnes agées</option>

                            </Input>
                        </FormGroup>

                    </ModalBody>

                    <ModalFooter>
                        <Button color="changecolor" onClick={this.toggle}>Enregistrer </Button>{' '}
                        <Button color="changecolor" onClick={this.toggle}>Annuler</Button>
                    </ModalFooter>

                </Modal>
            </div>

        );
    }
}

export default ModalAnnonce;