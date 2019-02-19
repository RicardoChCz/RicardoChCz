import React, { Component } from "react";
import Swiper from "react-id-swiper";
import iPhone from "../../assets/images/iphone_mask.png"
import iMac from "../../assets/images/macbook_mask.png"
import $ from 'jquery';


var portafolio=[
  {"title":"Monas Fun & Food App",
   "description":"Ut enim ad minim veniam, quis nostrud exerc. Irure dolor in reprehend incididunt labore et dolore magna aliqua.",
   "type":"mobile",
   "image":"/images/ricardochcz-movil.png",
   "subtitle":"Apliación hibrida",
   "details":"Details",
   "link":"http://monasff.com/"
  },
  {"title":"Piñon 360",
   "description":"Ut enim ad minim veniam, quis nostrud exerc. Irure dolor in reprehend incididunt labore et dolore magna aliqua.",
   "type":"desktop",
   "image":"/images/pinon.png",
   "subtitle":"Apliación web",
   "details":"Details",
   "link":"http://monasff.com/"
  },
]

class ProyectDescription extends Component{
  render(){
    return(
      <div className="proyect-description">
        <div className="outter">
          <div className="middle">
            <div className="description-container">
              <h2> {this.props.title} </h2>
              <p>{ this.props.description} </p>
              <a onClick={this.props.openDetails}>
                More details
              </a>
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
      <div className="sidebar">
        <div className="fadelayer"/>
        <div className="proyect-details">
          <a className="close-bar-button"
             onClick={ this.props.closeDetails}>
            <span className="icon-angle-right"></span>
          </a>
          <div className="outter">
            <div className="middle">
              <div className="description-container">
                <h2> {this.props.subtitle}</h2>
                <p>
                  {this.props.details}
                </p>
              </div>
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
      <div>
        <div className="iphone-wrapper">
          <div className="iphonescreen-mask"
            style={{backgroundImage: `url(${this.props.image}`}}/>
          <img className="img-responsive mask" src={iPhone}/>
        </div>
        <ProyectDescription
          title={this.props.title}
          description={this.props.description}
          openDetails={this.props.openDetails}/>
        <ProyectDetails
          subtitle={this.props.subtitle}
          details={this.props.details}
          closeDetails={this.props.closeDetails}/>
      </div>
    );
  }
}

class DesktopProyect extends Component{
  render(){
    return(
      <div>
        <div className="mac-wrapper">
          <div className="background-mask"
            style={{backgroundImage: `url(${this.props.image}`}}/>
          <img className="img-responsive mask" src={iMac}/>
        </div>
        <ProyectDescription
          title={this.props.title}
          description={this.props.description}
          openDetails={this.props.openDetails}/>
        <ProyectDetails
          subtitle={this.props.subtitle}
          details={this.props.details}
          closeDetails={this.props.closeDetails}/>
      </div>
    );
  }
}

class Portafolio extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false
    }
    this.openDetails = this.openDetails.bind(this);
    this.closeDetails = this.closeDetails.bind(this);
  }

  openDetails = () => {
    $('body','html')[0].className= "with-sidebar"
    this.setState({isOpen : true})
  }

  closeDetails = () => {
    $('body','html')[0].className= ""
    this.setState({isOpen : false})
  }
  
  render() {
    const params = {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 30,
      keyboard:true,
      mousewheel: true,
      loop:false,
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
        <div className="basic-opacity"></div>
        <div style={{position:'absolute', top:0, left:0, width:"100%", height:"100%"}}>
          <div className="solid-left-back"/>
            <Swiper {...params}>
              {(portafolio.length ==0) ? <div/> :
                portafolio.map(({type, title, subtitle,image, description, details, link}) => (
                  <div>
                    {(type == "mobile") ?
                      <MobileProyect
                        title = {title}
                        image = {image}
                        subtitle = {subtitle}
                        description = {description}
                        details = {details}
                        link = {link}
                        closeDetails={this.closeDetails}
                        openDetails={this.openDetails}/>
                      :
                      <DesktopProyect
                        title = {title}
                        subtitle = {subtitle}
                        image = {image}
                        description = {description}
                        details = {details}
                        link = {link}
                        closeDetails={this.closeDetails}
                        openDetails={this.openDetails}/>
                    }
                  </div>
                ))}
            </Swiper>
        </div>
      </div>
    );
  }
}
 
export default Portafolio;