import React from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import './Signup.css'
import axios from "axios"
export default class Example extends React.Component {
    state = {
        FirstName: "",
        LastName: "",
        DateBirth: "",
        Email: "",
        Password: "",
        Phone: "",
        Adress: "",
        Occupation: "",
        Motivation: "",
    }

    handlechange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    onaddcontact = () => {
        axios.post("/api/users", {
            Firstname: this.state.FirstName, LastName: this.state.LastName, DateBirth: this.state.DateBirth,
            Email: this.state.Email, Password: this.state.Password, Phone: this.state.Phone, Adress: this.state.Adress, Occupation: this.state.Occupation, Motivation: this.state.Motivation
        }).then(res => console.log(res.data))
    }
    componentDidMount() {
        axios.get("/api/users").then(res => this.setState({
            person: res.data
        })).catch(err => console.log("error"))


    }
    render() {
        return (
            <div className="center">
                <div className="formulaire">
                    <Form>

                        <FormGroup>
                            <Label className="title-form" for="exampleFirstName">Nom</Label>
                            <Input type="text" name="FirstName" id="FirstName" placeholder="Nom" onChange={this.handlechange} value={this.state.FirstName} />

                        </FormGroup>
                        <FormGroup>
                            <Label className="title-form" for="exampleLastName">Prénom</Label>
                            <Input type="text" name="LastName" id="exampleLastName" placeholder="Prénom" onChange={this.handlechange} value={this.state.LastName} />
                        </FormGroup>
                        <FormGroup>
                            <Label className="title-form" for="exampleDateBirth"> Date de naissance </Label>
                            <Input type="text" name="DateBirth" id="DateBirth" placeholder="Date de naissance" onChange={this.handlechange} value={this.state.DateBirth} />
                        </FormGroup>
                        <FormGroup>
                            <Label className="title-form" for="exampleEmail"> Email</Label>
                            <Input type="text" name="Email" id="exampleEmail" placeholder="email " onChange={this.handlechange} value={this.state.Email} />
                        </FormGroup>
                        <FormGroup>
                            <Label className="title-form" for="examplePhone"> Mot de passe </Label>
                            <Input type="text" name="Password" id="examplepassword" placeholder="mot de passe " onChange={this.handlechange} value={this.state.Password} />
                        </FormGroup>
                        <FormGroup>
                            <Label className="title-form" for="examplePhone"> Téléphone</Label>
                            <Input type="text" name="Phone" id="examplePhone" placeholder="téléphone" onChange={this.handlechange} value={this.state.Phone} />
                        </FormGroup>
                        <FormGroup>
                            <Label className="title-form" for="exampleAdress"> Adresse</Label>
                            <Input type="text" name="Adress" id="exampleAdress" placeholder="email" onChange={this.handlechange} value={this.state.Adress} />
                        </FormGroup>
                        <FormGroup>
                            <Label className="title-form" for="exampleOccupation"> Occupation</Label>
                            <Input type="text" name="Occupation" id="exampleOccupation" placeholder="" onChange={this.handlechange} value={this.state.Occupation} />
                        </FormGroup>

                        <FormGroup>
                            <Label className="title-form" for="exampleMotivation">Motivation</Label>
                            <Input type="text" name="Motivation" id="exampleMotivation" onChange={this.handlechange} value={this.state.Motivation} />
                        </FormGroup>

                        <Row>
                            <Col xs={6} md={4}>
                                <img alt="" src="/https://cdn3.iconfinder.com/data/icons/e-commerce-8/91/account-512.png" rounded />
                            </Col>

                        </Row>

                        <FormGroup>
                            <Label className="title-form" for="examplePieceIdentity">Pièce d'identité</Label>
                            <Input type="file" name="PieceIdentity" id="examplePieceIdentity" onChange={this.handlechange} value={this.state.PieceIdentity} />

                        </FormGroup>
                        <FormGroup>
                            <Label className="title-form" for="exampleCV">Curriculum Vitae</Label>
                            <Input type="file" name="CV" id="exampleCV" onChange={this.handlechange} value={this.state.CV} />

                        </FormGroup>
                        <FormGroup>
                            <Label className="title-form" for="exampleB3"> bulletin 3</Label>
                            <Input type="file" name="B3" id="exampleB3" onChange={this.handlechange} value={this.state.B3} />
                        </FormGroup>

                        {/* <FormGroup check>
                            <Label vérifier>
                                <Input type="checkbox" />{' '}
                                Confirmer
            </Label>
                        </FormGroup> */}
                        <Button className="colorme">Retour</Button>                   <Button
                            onClick={this.onaddcontact} className="colorme">Créer mon profil</Button>

                    </Form>
                </div>
            </div >
        );
    }
}
