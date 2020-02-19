import React, { Component } from "react";
import "./LanguageCard.css";

class LanguageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="languagecard">
        <span>
          <img className="icon" alt="" src={this.props.language.logo} />{" "}
          <h1>{this.props.language.name}</h1>
        </span>
        <p>{this.props.language.description}</p>
      </div>
    );
  }
}

export default LanguageCard;
