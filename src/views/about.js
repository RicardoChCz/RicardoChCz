import React, { Component } from "react";
import mePhoto from "../assets/images/RCC.jpeg";
import Swiper from "react-id-swiper";
import $ from 'jquery';

var jobs=[
  {"initialDate":"March 2018",
   "finalDate":"Current",
   "jobTitle":"Front-end developer",
   "company":"Weenjoy",
   "description":"Bridge between UI/UX design team to meet technical requirements for Web Scalable Applications. API implementation."
  },
  {"initialDate":"Aug 2016",
   "finalDate":"Dec 2016",
   "jobTitle":"Front-end developer",
   "company":"Pinon 360",
   "description":"Translation of UI/UX design wireframes to code (HTML/CSS/JavaScript)"
  }
]

var schools=[
  {"initialDate":"Aug 2016",
   "finalDate":"June 2018",
   "jobTitle":"M.S in Mathematics",
   "company":"UNAM - UMSNH",
   "description":"Specialized in  Algebraic Topology, Graph Theory and Algebra.One semester at CIMAT Probability and Statistics program. "
  },
  {"initialDate":"Aug 2011",
   "finalDate":"June 2016",
   "jobTitle":"B.S in Physics and Mathematics",
   "company":"UMSNH",
   "description":"Focused in pure Mathematics. Thesis in Algebraic Topology: 'Whitehead Torsión' (ES). Graduated with honors."
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
                <img src={mePhoto} className="me-photo" alt="Myself"/>
              </div>
              <div className="col-sm-7">
                <h2 className="shake animated">Hi!</h2>
                <p className="who-am-i">
                  I'm Ricardo Chávez, a <strong> Mathematician </strong> with <strong>Front-end</strong> skills, 
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
          <div className="middle middle-t">
            <h4>{this.props.title}</h4>
            <div className="timeline">
              {(this.props.cvList.length ===0) ? <div/> :
                this.props.cvList.map(({
                  initialDate,
                  finalDate,
                  jobTitle,
                  company,
                  description,
                }) => (
                <div className="row" key={initialDate}>
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
            {(this.props.action === 'download')?
              <a className="button" href="/resources/Frontend_CV_RCC_EN.pdf" download>
                Download Resumé
              </a>:
              <a className="button" href="/#/skills/">
                Continue
              </a>
            }
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
        if(p===0){
          $("#about")[0].className = "disapear-content";
          setTimeout(function(){ window.location = "/#/" }, 1000);
        }
      }
    });
  }

  render() {
    const params = {
      direction: 'horizontal',
      slidesPerView: 1,
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
        prevEl: '.swiper-button-prev.swiper-button-white',
      },
      spaceBetween: 30
    }

    return (
      <div id="about">
        <div className="basic-opacity about-content"></div>
        <div id="about-swipper" className="about-content">
          <Swiper {...params}>
            <div>
              <Introduction/>
            </div>
            <div>
              <Timeline 
                title="Experience" 
                cvList={jobs} 
                action={"download"}
                />
            </div>
            <div>
              <Timeline 
                title="Education" 
                cvList={schools} 
                action={"next"}/>
            </div>
          </Swiper>
        </div>
      </div>
    );
  }
}

export default About;