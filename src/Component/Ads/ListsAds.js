import React, { Component } from 'react'
import { Button, Alert } from 'reactstrap';
import './ListsAds.css'

export default class ListsAds extends Component {

    render() {
        return (
            <div>
                <div className="Title">
                    <h2> Liste des annonces </h2>

                </div>
                <div className='imageandinformation'>
                    <div>
                        <img className="image-container" with="20px;" src="data:image/jpeg;base64,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" />
                        <div className="stars">
                            <i class="fas fa-star fa-2x"></i> <i class="fas fa-star  fa-2x"></i> <i class="fas fa-star fa-2x"></i><i class="fas fa-star fa-2x"></i>
                        </div>
                    </div>

                    <div className="classes" >
                        <Alert color="success">

                            <Alert className="Alert" > <h3> Titre de l'annonce : </h3> </Alert>
                            <h5 className="alert-heading ">Description </h5>
                            <p>
                                Aww yeah, you successfully read this important alert message.
                            </p>
                            <hr />
                            <div className="jarebni" >
                                <p className="mb-0">

                                    <h6>Date: </h6> <h6>Réumunération:</h6>
                                </p>
                                <div className="Modifini ">
                                    <Button className="clickme1" >Envoyer un mail</Button>{' '}
                                </div>
                            </div>
                        </Alert>
                    </div>
                </div>



            </div>
        )
    }
}