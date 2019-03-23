import React, { Component } from "react";
/*
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

*/
class Skills extends Component {
  render() {
    return (
      <div>
        <div className="basic-opacity"></div>
        <div id="skills-content" className="outter fadeIn animated">
          <div className="middle">
            <div className="inner">
              <h4 style={{textAlign: 'center'}}> Skills </h4>
              <div className="row" style={{marginBottom:10}}>
                <div className="col-sm-12">
                  <p>
                    Advanced
                  </p>
                  <ul className="skills-bullets">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                    <li>JQuery</li>                    
                    <li>Sass</li>
                    <li>Less</li>
                    <li>LaTeX</li>
                    <li>Bootstrap</li>
                  </ul>
                  <p>
                    Intermediate
                  </p>
                  <ul className="skills-bullets">
                    <li>Python</li>
                    <li>React</li>
                    <li>React Native</li>
                    <li>Vue</li>
                    <li>Git</li>
                    <li>Node.js</li>
                    <li>Data Visualization</li>
                    <li>Ajax</li>
                    <li>Wordpress</li>
                    <li>Express.js</li>
                  </ul>
                  <p>
                    Beginner
                  </p>
                  <ul className="skills-bullets" style={{marginBottom:25}}>
                    <li>Photoshop</li>
                    <li>Illustrator</li>
                    <li>Php </li>
                    <li>SEO</li>
                    <li>Java</li>
                  </ul>
                </div>
              </div>
              <a className="button" href="/#/portafolio/">
                Check out my work!
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Skills;
