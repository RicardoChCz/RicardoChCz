import React, { Component } from "react";

class Social extends Component {
  render() {
    return (
    <div className="social-media">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/ricardochcz/">
            <span className="icon-linkedin"></span>
          </a>
        </li>
        <li>
          <a href="https://github.com/RicardoChCz">
            <span className="icon-git"></span>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/RicardoChCz">
            <span className="icon-twitter"></span>
          </a>
        </li>
      </ul>
    </div>
    );
  }
}
 
export default Social;