import React, { Component } from "react";
import "./ExperienceCard.css";

class ExperienceCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="experiencecard">
        <div className="date">{this.props.experience.date}</div>
        <div className="description">
          <div className="descriptiondetails">
            <span>
              <img alt="" src={this.props.experience.logo} />
              <h2>{this.props.experience.name}</h2>
            </span>
            <article>{this.props.experience.description}</article>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default ExperienceCard;
