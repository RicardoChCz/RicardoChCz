import React, { Component } from "react";

class Skills extends Component {
  componentDidMount(){
    this.setState({
      screen: 'skills'
    })
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <div className="basic-opacity"></div>
        <div className="outter">
          <div className="middle">
            <div className="inner">
              <div className="row">
                <h2>Contact me</h2>
                <div className="col-sm-4 scene first-card">
                  <div className="panel skills-card">
                    <div className="body-card">
                      <span className="icon-phone"></span>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 scene second-card">
                  <div className="panel skills-card">
                    <div className="body-card">

                    </div>
                  </div>
                </div>

                <div className="col-sm-4 scene third-card">
                  <div className="panel skills-card">
                    <div className="body-card">

                    </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Skills;
