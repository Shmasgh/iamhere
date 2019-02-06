import React, {Component} from "react"
import './App.css'
export default class Footer extends Component {
    render() {
      return (
        <div className="footer">
              <div className="footer-left">
              <h1 className="Ttl"><strong> ISMELSITE.tn</strong> </h1>
              </div>
  
        <div className="footer-center">
          <div className="fafa">
            <i className="fa fa-map-marker"></i>
            <p><span>Rue du lac lochness</span>Les Berges du Lac</p>
          </div>
  
          <div className="fafa"> 
            <i className="fa fa-phone"></i>
            <p>+216 70 037 578</p>
          </div>
  
          <div className="fafa">
            <i className="fa fa-envelope"></i>
           <p>ghribichayma@gmail.com</p>
          </div>
  
        </div>
  
        <div className="footer-right">
  
          <p className="footer-company-about">
           <span ><strong className="a-propos">A propos </strong></span><br/>
           notre site est génial, il est trop cool, vous allez adorer, moi je l'aime, je vais l'épouser l'été prochain, et vous êtes tous invités, bisous. bon voyage!
           
         </p>
       </div>
    </div>
      )
    }
  }