import React, { Component } from "react";
import $ from 'jquery';

class PercentageBar extends Component{
  render(){
    return(
      <div className="c-percentage-block">
        <div className="c-information">
          <div className="c-number">
            {this.props.percentage}<small>%</small>
          </div>
          <div className="c-description">
            <h3>{this.props.title}</h3>
          </div>
        </div>
        <div className="c-progress-bar">
          <div className="c-progress-bar-filler" style={{width: this.props.percentage+"%"}}></div>
        </div>
      </div>
    )
  }
}
class Badge extends Component{
  render(){
    return(
      <div className="flip-badge">
        <div className="flip-badge-inner">
          <div className="flip-badge-front">
            <span className={this.props.icon}/>
          </div>
          <div className="flip-badge-back">
            <p>{this.props.label}</p> 
          </div>
        </div>
      </div>
    );
  }
}
class Skills extends Component {
  componentDidMount(){
    var p = 0
    $(window).bind('mousewheel', function(event) {
      if (event.originalEvent.wheelDelta >= 0) {
        if(p>0){p--;}
      }
      else {
        if(p<5){p++;}
      }
      if ($("#skills-content").length){
        if(p===0){
          $("#skills-content")[0].className = "disapear-content";
          window.location = "/#/about"
        }
        else if(p>0){
          $("#skills-content")[0].className = "disapear-content";
          window.location = "/#/portafolio"
        }
      }
    });
  }

  render() {
    return (
      <div>
        <div className="basic-opacity"></div>
        <div id="skills-content" className="outter fadeIn animated">
          <div className="middle">
            <div className="inner">
              <h4 style={{textAlign: 'center'}}> Skills </h4>
              <div className="row" style={{marginBottom:10}}>
                <div className="col-sm-6">
                  <PercentageBar percentage={90} title={"HTML"}/> 
                  <PercentageBar percentage={80} title={"CSS"}/>   
                  <PercentageBar percentage={60} title={"jQuery"}/>   
                  <PercentageBar percentage={95} title={"Bootstraps"}/>   
                </div>
                <div className="col-sm-6">
                  <PercentageBar percentage={70} title={"React"}/>
                  <PercentageBar percentage={60} title={"React Native"}/>   
                  <PercentageBar percentage={50} title={"Node"}/>   
                  <PercentageBar percentage={65} title={"Python"}/>       
                </div>  
              </div>
              <div className="skills-container">
                <Badge icon={"icon-gears"} label={"Problem solver"}/>
                <Badge icon={"icon-gears"} label={"Problem solver"}/>
                <Badge icon={"icon-gears"} label={"Problem solver"}/>
                <Badge icon={"icon-gears"} label={"Problem solver"}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Skills;
