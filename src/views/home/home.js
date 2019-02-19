import React, { Component } from "react";
import scroll from "../../assets/images/scroll.gif";
import $ from 'jquery';

class Home extends Component {
  componentDidMount(){
    var p = 0
    $(window).bind('mousewheel', function(event) {
      if (event.originalEvent.wheelDelta >= 0) {
        if(p>0){p--;}
      }
      else {
        if(p<5){p++;}
      }

      if ($("#home").length){
        if(p>0){
          $("#home")[0].className = "disapear-content";
          $("#transition1")[0].className = "full-opacity";
          setTimeout(function(){ 
            window.location = "/#/about" }, 
            2000);
        }
      }
    });
  }

  render() {
    return (
      <div id="home">
        <div className="animations">
          <div className="initial-line" id="transition1"></div>
        </div>
        <div className="outter">
          <div className="middle">
            <div className="row">
            {/*Left side*/}
            <div id="home-text" className="col-sm-6">
                <h1 className="fadeIn animated slow">RicardoChCz</h1>
                <p className="description fadeIn animated slow"> 
                  <i>Hi, I'm Ricardo a Front-end developer</i>
                </p>
            </div>
            {/*Right side*/}
            <div className="col-sm-6">
            </div>
          </div>
        </div>
        </div>
        <img src={scroll} className="scroll"/>
      </div>
    );
  }
}
 
export default Home;