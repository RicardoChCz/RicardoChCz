import React, { Component } from "react";
import mePhoto from "../../assets/images/RCC.jpeg";
import Swiper from "react-id-swiper";
import $ from 'jquery';

var jobs=[
  {"initialDate":"March 2018",
   "finalDate":"Current",
   "jobTitle":"Frontend developer",
   "company":"Weenjoy",
   "description":"Ut enim ad minim veniam, quis nostrud exerc. Irure dolor in reprehend incididunt labore et dolore magna aliqua."
  },
  {"initialDate":"Aug 2016",
   "finalDate":"March 2018",
   "jobTitle":"Frontend developer",
   "company":"Weenjoy",
   "description":"Ut enim ad minim veniam, quis nostrud exerc. Irure dolor in reprehend incididunt labore et dolore magna aliqua."
  }
]

var schools=[
  {"initialDate":"Aug 2016",
   "finalDate":"June 2018",
   "jobTitle":"M.S in Mathematics",
   "company":"UNAM - UMSNH",
   "description":"Ut enim ad minim veniam, quis nostrud exerc. Irure dolor in reprehend incididunt labore et dolore magna aliqua."
  },
  {"initialDate":"Aug 2011",
   "finalDate":"June 2016",
   "jobTitle":"B.S in Physics and Mathematics",
   "company":"UMSNH",
   "description":"Ut enim ad minim veniam, quis nostrud exerc. Irure dolor in reprehend incididunt labore et dolore magna aliqua."
  }
]

class Introduction extends Component{
  render(){
    return(
      <div className="about-slide">
        <div className="outter">
          <div className="middle">
            <div className="row fadeIn animated">
              <div className="col-sm-5">
                <img src={mePhoto} className="me-photo"/>
              </div>
              <div className="col-sm-7">
                <h2 className="shake animated">Hi!</h2>
                <p className="who-am-i">
                  I'm Ricardo Chávez, a <strong> Mathematician </strong> with <strong>Frontend</strong> skills, 
                  intrested in Data science.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
class Timeline extends Component{
  render(){
    return(
      <div className="about-slide">
        <div className="outter">
          <div className="middle" style={{paddingBottom:150}}>
            <h4>{this.props.title}</h4>
            <div className="time-line">
            
              {(this.props.cvList.length ==0) ? <div/> :
                this.props.cvList.map(({
                  initialDate,
                  finalDate,
                  jobTitle,
                  company,
                  description
                }) => (
                <div className="row">
                  <div className="col-sm-6">
                    <p className="exp-bullet">
                      <span className="date">{initialDate} - </span> 
                      {(finalDate === "Current") ? 
                        <span className="current">Current</span>
                        :
                        <span className="date">{finalDate}</span>
                      }
                      <br/>
                      <span className="job-position"> {jobTitle}</span> – 
                      <span className="company"> {company}</span>
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="job-description">
                      {description}
                    </p>
                  </div>
                </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class About extends Component {
  componentDidMount(){
    var p = 0
    $(window).bind('mousewheel', function(event) {
      if (event.originalEvent.wheelDelta >= 0) {
        if(p>0){p--;}
      }
      else {
        if(p<5){p++;}
      }

      if ($("#about").length){
        if(p==0){
          $("#about")[0].className = "disapear-content";
          setTimeout(function(){ 
            window.location = "/#/" }, 
            1000);
          }
        }
    });
  }

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
      spaceBetween: 30
    }

    return (
      <div id="about">
        <div className="basic-opacity about-content"></div>
        <div className="about-content">
          <Swiper {...params}>
            <div><Introduction/></div>
            <div><Timeline title="Experience" cvList={jobs}/></div>
            <div><Timeline title="Education" cvList={schools}/></div>
          </Swiper>
        </div>
      </div>
    );
  }
}

export default About;