import React, { Component } from "react";
 
class Contact extends Component {
  componentDidMount () {
    var isHome = false;
    console.log(isHome);
  }
  render() {
    return (
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
      </div>
    );
  }
}
 
export default Contact;