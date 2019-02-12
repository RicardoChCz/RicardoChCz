import React, { Component } from "react";
import Swiper from "react-id-swiper";
import iPhone from "../../assets/images/iphone_mask.png"
import iMac from "../../assets/images/macbook_mask.png"

class MobileProyect extends Component{
  render(){
    return(
      <div className="proyect">
        <div className="iphone-wrapper">
          <div className="iphonescreen-mask" style={{background: 'black'}}/>
          <img className="img-responsive iphone-mask" src={iPhone}/>
        </div>
      </div>
    );
  }
}

class DesktopProyect extends Component{
  render(){
    return(
      <div className="proyect">
        <div className="mac-wrapper">
          <div className="background-mask" style={{background: 'black'}}/>
          <img className="img-responsive mac-mask" src={iMac}/>
        </div>
      </div>
    );
  }
}

class MixedProyect extends Component{
  render(){
    return(
      <div className="proyect">
        <div className="iphone-wrapper">
          <div className="iphonescreen-mask" style={{background: 'black'}}/>
          <img className="img-responsive iphone-mask" src={iPhone}/>
        </div>
      </div>
    );
  }
}

class Portafolio extends Component {
  componentDidMount () {}

  render() {
    const params = {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 30,
      keyboard:true,
      mousewheel: true,
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
          <Swiper {...params}>
            <div><MobileProyect/></div>
            <div><DesktopProyect/></div>
            <div><MixedProyect/></div>
          </Swiper>
        </div>
      </div>
    );
  }
}
 
export default Portafolio;