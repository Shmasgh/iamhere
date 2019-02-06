import React, { Component } from 'react'
import { Button } from 'reactstrap';
import './App.css'
import five from './Component/Home/Image/five.png';
import six from './Component/Home/Image/six.png';
import { Link } from 'react-router-dom'
export default class Description extends Component {
    state = {
        isLoggedIn: false
    }

    componentDidMount() {
        var token = localStorage.getItem("Token")
        if (token) {
            this.setState({
                isLoggedIn: true
            })
        }

    }
    render() {
        return (
            <div className="description">
                <p className="site-description"><strong>ISMELSITE.tn est un site qui permet de faciliter le contact entre les personnes étant à la recherche de services de garde d'enfants, d'animaux ou d'assistance aux personnes âgées et les personnes souhaitant offrir ces services.</strong></p>
                <div className="cas">
                    <div className="cas-1">
                        <p className="explication"> <strong>Bech t7ot annonce</strong></p>
                        <div className="image">
                            <div className="img">
                                <img src={five} width="500px" />
                            </div>
                            <div className="button-ajouter">
                                {this.state.isLoggedIn ? <Link to="/user/user/">
                                    <Button className="btn-ajouter">
                                        <strong>Ajouter une annonce</strong>
                                    </Button>
                                </Link> :
                                    <Link to="/Signup">
                                        <Button className="btn-ajouter">
                                            <strong>Ajouter une annonce</strong>
                                        </Button>
                                    </Link>}
                            </div>


                        </div>

                    </div>
                    <div className="cas-2">
                        <p className="explication"><strong>Bech tfarkes 3ala annonce</strong></p>
                        <div className="image">
                            <div className="button-cherche">
                                <Button className="btn-cherche"><strong>Je cherche un travail</strong></Button>
                            </div>
                            <div className="img">
                                <img src={six} width="500px" />
                            </div>
                        </div>

                    </div>


                </div>
                <div className="etapes">
                    <p className="explication"> <strong>Étape 1:</strong> Créer un compte </p>
                    <p className="explication"><strong>Étape 2: </strong>Offrer un service ou publier une annonce </p>
                    <p className="explication"><strong>Étape 3: </strong> Ce que vous cherchez viendra à vous</p>
                </div>
            </div>
        )
    }
}