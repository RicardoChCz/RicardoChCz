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
      
      if ($("#home").length && $("#line-container").length && $(".scroll").length){
        if (p>0){$("#hb")[0].style.left = (-25)*p + "px";}
      
        if(p==0){
          $("#home")[0].style.opacity = 1;
          $(".scroll")[0].style.opacity = 1;
          $("#line-container")[0].className = "linea-b";
        }
        else if (p>0){
          $("#home")[0].style.opacity = 0;
          $(".scroll")[0].style.opacity = 0;
          $("#line-container")[0].className = "linea2";
        }
      }
    });
  }

  render() {
    return (
      <div>
        <div className="animations">
          <div className="linea" id="line-container"></div>
        </div>
        <div className="outter">
          <div className="middle">
            <div className="row">
            {/*Left side*/}
            <div id="home" className="col-sm-6">
                <h1>RicardoChCz</h1>
                <p className="description"> 
                  <i>Hi, I'm Ricardo a Front-end developer</i>
                </p>
            </div>
            {/*Right side*/}
            <div className="col-sm-6">
              <div id="hb"></div> 
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