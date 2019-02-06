import React from 'react';
import { Button, Fade, Alert, FormGroup, Label } from 'reactstrap';

import './User.css'
import ModalAnnonce from './ModalAnnonce'
import UserAds from '../Ads/UserAds'
import { Link } from 'react-router-dom'


export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fadeIn: false };
        this.toggle = this.toggle.bind(this);
    }
    render() {
        return (
            <div>
                <div className="UserProfile">
                    <h3 className='big-title'> FI 3INAYA  </h3>
                    <div className="mini-title">
                        <h5 className="find"> Mon Profil</h5>
                    </div>


                </div>

                <div className="image-infos">
                    <div >
                        <img className="image-container1" src="https://i.pinimg.com/originals/f8/56/7b/f8567b1ef137b01c99056c5212a49335.png" />
                        <div className="Modifier">
                            <Button className="button perfect"  > <strong>Modifier mon profil</strong></Button>{' '}
                        </div>
                    </div>



                    <div className="profile-card">


                        <Alert color="dark" >Nom: Ghribi </Alert>
                        <Alert color="dark">  Prénom : Chaima </Alert>
                        <Alert color="dark"> Date de naissance : 16/12/1995 </Alert>
                        <Alert color="dark"> Téléphone : 52892846 </Alert>
                        <Alert color="dark"> Adresse : Route soukra , TUNIS  </Alert>
                        <div className="modale-annonce">

                            <div className="annonces">
                                <Button className="button1" onClick={this.toggle}> <strong>Mes Annonces</strong></Button>

                                <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
                                    <UserAds />
                                </Fade>
                            </div>
                        </div>


                    </div>
                    <div className="clickme" >
                        <div>
                            <Link to="/list" style={{ textDecoration: "none", color: "white" }}>
                                <Button className="leme" >
                                    <i class="fas fa-search fa-5x"></i>
                                    Chercher une annonce
                            </Button>{' '}
                            </Link>
                        </div>
                        <div className="modale">
                            < ModalAnnonce />
                        </div>


                    </div>
                </div>



            </div>





        )
    }
    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }
}