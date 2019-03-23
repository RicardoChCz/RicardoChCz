import React, { Component } from "react";
import Swiper from "react-id-swiper";
import iPhone from "../assets/images/iphone_mask.png"
import iMac from "../assets/images/macbook_mask.png"
import $ from 'jquery';
import swipe from "../assets/images/swipe.gif";
import scroll from "../assets/images/scroll.gif";

var portafolio=[
  {"title":"Monas Fun & Food App",
   "description":"Simple mobile app to do reservations vía email. Provides contact information.",
   "type":"mobile",
   "image":"/images/monas.png",
   "subtitle":"Hybrid App",
   "details":"Generated in React Native for iOS and Android. Simple mobile aplication that allows the user to contact the different branches in CDMX",
   "link":"http://monasff.com/"
  },
  {"title":"Piñon 360",
   "description":"Mockup of web app Pinon 360",
   "type":"desktop",
   "image":"/images/pinon.png",
   "subtitle":"Responsive Web App",
   "details":"Pure HTML, CSS, JS, mockup for web app dedicated to manage Health Care Information for Hospitals in USA.",
   "link":"http://ricardochcz.com/test/Pinon360"
  },
  {"title":"About Me",
   "description":"This awesome About me web page",
   "type":"desktop",
   "image":"/images/ricardochcz.png",
   "subtitle":"Responsive Web Page",
   "details":"React SPA for personal info.",
   "link":"http://ricardochcz.com/"
  },
  {"title":"Weenjoy Partner Platform",
   "description":"Front-end development for Weenjoy Partners Web App.",
   "type":"desktop",
   "image":"/images/partners.png",
   "subtitle":"Responsive Web App",
   "details":"Collaboration. Mock up in HTML, CSS, JS, node.js for Weenjoy Partners Web platform. API implementation. (Currently in maintenance)",
   "link":"http://partners.weenjoy.com/"
  },
  {"title":"WIN platform",
   "description":"Front-end development for WIN Web App.",
   "type":"desktop",
   "image":"/images/win.png",
   "subtitle":"Responsive Web App",
   "details":"Collaboration. Mock up in React.js and node.js for WIN Web platform. API implementation. (Currently in maintenance)",
   "link":"http://win.weenjoy.com/"
  },
  {"title":"Weenjoy Site",
    "description":"Responsive Static SPA for Weenjoy App promotion",
    "type":"desktop",
    "image":"/images/weenjoy.png",
    "subtitle":"Responsive Web Page",
    "details":"Collaboration. Mock up in Vue.js for SPA with SSR (nuxt) to be SEO friendly. (Currently on develop)",
    "link":"http://weenjoy.com/"
   },
]

class CoverFront extends Component{
  render(){
    return(
      <div className="proyect-description">
        <div className="outter">
          <div className="middle">
            <div className="description-container" style={{textAlign: 'center'}}>
              <h2> {this.props.title} </h2>
              <img src={scroll} className="scroll-portafolio" alt="Scroll down"/>
              <img src={swipe} className="swipe-portafolio" alt="Swipe right"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CoverLast extends Component{
  render(){
    return(
      <div className="proyect-description">
        <div className="outter">
          <div className="middle">
            <div className="description-container" style={{textAlign: 'center'}}>
              <h2> {this.props.title} </h2>
              <a className="button" href="/#/contact">Contact me</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class ProyectDescription extends Component{
  render(){
    return(
      <div className="proyect-description">
        <div className="outter">
          <div className="middle">
            <div className="description-container">
              <h2> {this.props.title} </h2>
              <p>{ this.props.description} </p>
              <span className="link" onClick={this.props.openDetails}>
                More details
              </span>
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
        <div className="fadelayer" 
          onClick={ this.props.closeDetails}/>
        <div className="proyect-details">
          <span className="close-bar-button"
             onClick={ this.props.closeDetails}>
            <span className="icon-angle-right"></span>
          </span>
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
      <div className="mobile-proyect-wrapper">
        <div className="iphone-wrapper">
          <div className="iphonescreen-mask"
            style={{backgroundImage: `url(${this.props.image}`}}/>
          <img className="img-responsive mask" src={iPhone} alt="iphone-mask"/>
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
      <div className="desktop-proyect-wrapper">
        <div className="mac-wrapper">
          <div className="background-mask"
            style={{backgroundImage: `url(${this.props.image}`}}/>
          <img className="img-responsive mask" src={iMac} alt="mac mask" />
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
    }

    return (
      <div>
        <div className="basic-opacity"></div>
        <div id="portafolio-content">
          <div className="solid-left-back fadeIn animated"/>
            <Swiper {...params}>
              <div className="cover-slide"> 
                <CoverFront title={"Portafolio"}/>
              </div>

              {(portafolio.length === 0) ? <div/> :
                portafolio.map(({type, title, subtitle,image, description, details, link}) => (
                  <div key={title}>
                    {(type === "mobile") ?
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
              <div> 
                <CoverLast title={"Liked something?"}/>
              </div>
            </Swiper>
        </div>
      </div>
    );
  }
}
 
export default Portafolio;