import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class Admin extends Component {
    render() {
        return (
            <div>
                <Button color="primary">Voir toutes les annonces au monde</Button>{' '}
                <Button color="primary">voir les profils des utilisateur de mon joli site</Button>{' '}
            </div>
        )
    }
}
