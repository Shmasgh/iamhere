import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import Modale from '../../Component/Home/Routes/Login';
import Description from '../../Description'
import Footer from '../../Footer'
import Carousel from './Carousel'
import { Button } from "reactstrap"
export default class Navbar extends React.Component {
    // state = {
    //     FirstName: "",
    //     LastName: "",
    //     DateBirth: "",
    //     Email: "",
    //     Password: "",
    //     Phone: "",
    //     Adress: "",
    //     Occupation: "",
    //     Motivation: "",
    //     PhotoIdentity: "",
    //     PieceIdentity: "",
    //     CV: "",
    //     B3: ""
    // }

    // onaddcontact = () => {
    //     axios.post('/profile', {
    //         Firstname: this.state.FirstName, LastName: this.state.LastName, DateBirth: this.state.DateBirth,
    //         Email: this.state.Email, Password: this.state.Password, Phone: this.state.Phone, Adress: this.state.Adress, Occupation: this.state.Occupation, Motivation: this.state.Motivation, PhotoIdentity: this.state.PhotoIdentity, PieceIdentity: this.state.PieceIdentity, CV: this.state.CV, B3: this.state.B3
    //     }).then(res => alert
    //         (res.data)).catch(err => alert(err))
    // }


    // state = {
    //     isLoggedIn: false,
    //     token: ""
    // }

    // componentDidMount() {
    //     var token = localStorage.getItem("Token")
    //     if (token) {
    //         this.setState({
    //             isLoggedIn: true,
    //             token
    //         })
    //     }

    // }
    render() {
        return (
            <div className="title-link">
                <nav >
                    <div className="Navbar" >
                        <h1 className="Title1"> <strong> ISMSITE.tn</strong> </h1>

                        {/* {this.state.isLoggedIn ? <div><Button color="danger" className="nav-link">Signout</Button>
                            <span>{this.state.token}</span></div> : <div> */}
                        <div>

                            <NavLink to={'/Signup'} activeClassName="active" className="nav-item nav-link" href="#"> <strong>S'inscrire</strong> </NavLink>
                            <Modale />

                        </div>

                    </div>
                    <div>
                        <Carousel />
                        <Description />
                        <Footer />
                    </div>

                </nav>

            </div>
        )
    }
} 
