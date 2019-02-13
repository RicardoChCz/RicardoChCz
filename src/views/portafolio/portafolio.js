import React, { Component } from "react";
import Swiper from "react-id-swiper";
import iPhone from "../../assets/images/iphone_mask.png"
import iMac from "../../assets/images/macbook_mask.png"
import $ from 'jquery';

class ProyectDescription extends Component{
  render(){
    return(
      <div className="proyect-description">
        <div className="outter">
          <div className="middle">
            <div className="description-container">
              <h2> Monas Food and Fun App</h2>
              <p>
                Ut enim ad minim veniam, quis nostrud exerc. 
                Irure dolor in reprehend incididunt labore 
                et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class ProyectDetails extends Component{
  render(){
    return(
      <div className="proyect-details-secondary" id="description">
        <div className="outter">
          <div className="middle">
            <div className="description-container">
              <h2> Aplicación móvil hibirda</h2>
              <p>
                Ut enim ad minim veniam, quis nostrud exerc. 
                Irure dolor in reprehend incididunt labore 
                et dolore magna aliqua.
              </p>
              <ul>
                <li>Ut enim ad minim veniam</li>
                <li>Ut enim ad minim veniam</li>
                <li>Ut enim ad minim veniam</li>
                <li>Ut enim ad minim veniam</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class MobileProyect extends Component{
  render(){
    return(
      <div className="iphone-wrapper">
        <div className="iphonescreen-mask" style={{background: 'white'}}/>
        <img className="img-responsive mask" src={iPhone}/>
      </div>
    );
  }
}

class DesktopProyect extends Component{
  render(){
    return(
      <div className="mac-wrapper">
        <div className="background-mask" style={{background: 'white'}}/>
        <img className="img-responsive mask" src={iMac}/>
      </div>
    );
  }
}

class Portafolio extends Component {
  constructor(props){
    super(props)
    this.state = {
      open: false}
  }

  openDescription = () => {
    if (this.state.open){
      $("#description")[0].style.right = "-450px";
      this.setState({open : false})
    }else{
      $("#description")[0].style.right = "0px";
      this.setState({open : true})
    }
  }
  render() {
    const params = {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 30,
      keyboard:true,
      mousewheel: true,
      loop:true,
      lazy: true,
      pagination: {
        el: '.swiper-pagination.customized-swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next.swiper-button-white',
        prevEl: '.swiper-button-prev.swiper-button-white'
      },
      spaceBetween: 30
    }

    return (
      <div>
          <a className="show-bar" onClick={ () => {this.openDescription()}} >
            <span className="icon-angle-left"></span>
          </a>
        <div className="basic-opacity"></div>
        <div style={{position:'absolute', top:0, left:0, width:"100%", height:"100%"}}>
          <Swiper {...params}>
            <div><MobileProyect/></div>
            <div><DesktopProyect/></div>
          </Swiper>
          <ProyectDescription/>
          <ProyectDetails/>

        </div>
      </div>
    );
  }
}
 
export default Portafolio;