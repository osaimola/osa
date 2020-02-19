import React, { Component } from "react";
import "./Content.css";
import LanguageCard from "../LanguageCard/LanguageCard";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import ProjectCard from "../ProjectCard/ProjectCard";
import Links from "../Links/Links";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayContent: "Experience"
    };
  }

  //handle clicks on LINKS component and set the Content state appropriately
  handleLinkClick = linkValue => {
    this.setState({
      displayContent: linkValue
    });
  };

  //Take the state's displayContent value and use switch case to  render the appropriate page - projects or experiences
  renderPage() {
    switch (this.state.displayContent) {
      case "Experience":
        return (
          <React.Fragment>
            <div className="widecard">
              <strong>I have experience with...</strong>
            </div>
            {this.renderLanguages()}
            <div className="widecard">
              <strong>Previous work activity</strong>
            </div>
            {this.renderExperience()}
          </React.Fragment>
        );
      case "Projects":
        return <React.Fragment>{this.renderProjects()}</React.Fragment>;
      default:
        return <div>Yikes, Something went wrong.</div>;
    }
  }

  //parse and return all programing languages
  renderLanguages() {
    return this.props.data.languages.map(language => (
      <LanguageCard key={language.name} language={language} />
    ));
  }

  //parse and render all previous work experience
  renderExperience() {
    return this.props.data.experience.map(experience => (
      <ExperienceCard key={experience.name} experience={experience} />
    ));
  }

  //parse and render all projects
  renderProjects() {
    return this.props.data.projects.map(project => (
      <ProjectCard key={project.name} projects={project} />
    ));
  }

  //return the links component and call the renderPAge function
  render() {
    return (
      <div className="cardarea">
        <Links onLinkClick={this.handleLinkClick} />
        {this.renderPage()}
      </div>
    );
  }
}

export default Content;
