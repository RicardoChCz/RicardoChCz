import React, { Component } from "react";
import mePhoto from "../../assets/images/user-profile.png";
import Swiper from "react-id-swiper";

class Introduction extends Component{
  render(){
    return(
      <div className="row">
      </div>
    );
  }
}
class Experience extends Component{
  render(){
    return(
      <div className="row">
      <div className="col-md-5">
        <img src={mePhoto} className="me-photo"/>
      </div>
      <div className="col-md-7">
        <h2 className="">Hi!, I'm Ricardo</h2>
        <p className="">I'm a mathematician with frontend skills, 
          intrested in data science.</p>
        <p className="">
          Lorem ipsum dolor amet flannel sartorial succulents 
          williamsburg pinterest. Dreamcatcher gluten-free 
          gastropub heirloom banh mi blog iPhone 90's truffaut 
        </p>
      </div>
    </div>
    );
  }
}

class Education extends Component{
  render(){
    return(
      <div className="row">
      <div className="col-md-5">
        <img src={mePhoto} className="me-photo"/>
      </div>
      <div className="col-md-7">
        <h2 className="">Hi!, I'm Ricardo</h2>
        <p className="">I'm a mathematician with frontend skills, 
          intrested in data science.</p>
        <p className="">
          Lorem ipsum dolor amet flannel sartorial succulents 
          williamsburg pinterest. Dreamcatcher gluten-free 
          gastropub heirloom banh mi blog iPhone 90's truffaut 
        </p>
      </div>
    </div>
    );
  }
}

class About extends Component {
  render() {
    const params = {
      direction: 'vertical',
      slidesPerView: 1,
      keyboard:true,
      mousewheel: true,
      lazy: true,
      pagination: {
        el: '.swiper-pagination.customized-swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      spaceBetween: 30
    }
    return (
      <div>
        <div className="basic-opacity"></div>

        <div className="outter">
          <div className="middle">
            <div className="inner">
              <Swiper {...params}>
                <div>Slide 1</div>
                <div>Slide 1</div>
                <div>Slide 1</div>

              </Swiper>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default About;