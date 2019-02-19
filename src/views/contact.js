import React, { Component } from "react";
 
class Contact extends Component {
  render() {
    return (
      <div>
      <div className="basic-opacity"></div>
      <div className="outter fadeIn animated">
        <div className="middle">
          <div className="inner" style={{maxWidth:700}}>
            <div className="row contact-me">
              <h4>Contact me</h4>
              <div className="row">
                <div className="col-sm-4">
                  <div className="card">
                    <h5>Email </h5>
                    <p> ricardo.ch.cz@gmail.com</p>
                    <span className="icon-envelope"></span>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card">
                    <h5> Phone </h5>
                    <p> +52 44 33 06 23 90</p>
                    <span className="icon-phone"></span>
                  </div>
                </div>
                <div className="col-sm-4">
                  <a href="http://localhost:8888/blog">
                    <div className="card">
                      <h5> Blog </h5>
                      <p> Morelia, Mich</p>
                      <span className="icon-comment"></span>
                    </div>
                  </a>
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
 
export default Contact;

      /*
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
              
      <div>
        <div className="basic-opacity"></div>
        <div className="outter">
          <div className="middle">
            <div className="inner">
            <h2 className="contact">Contact me</h2>
            <form action="/action_page.php">
              <div className="form-group">
                <label for="name">Name:</label>
                <input type="text" className="form-control" name="name"/>
              </div>
              <div className="form-group">
                <label for="email">Email address:</label>
                <input type="email" className="form-control" name="email"/>
              </div>
              <div className="form-group">
                <label for="message">Message:</label>
                <textarea rows="3" className="form-control" name="message"></textarea>
              </div>
              <button type="submit" style={{float:'right'}}className="btn btn-primary">Submit</button>
            </form>

            </div>
          </div>
        </div>
      </div>*/