import React, { Component } from "react";
import "./ProjectCard.css";

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderTags() {
    return this.props.projects.tags.map(tag => <span key={tag}>{tag}</span>);
  }

  render() {
    return (
      <div className="projectscard">
        <div className="title_div">
          <a
            className="title"
            href={this.props.projects.demo_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.projects.name}
          </a>
        </div>

        <div className="projectdesc">
          <div className="projectdescdetails">
            <div className="tags">{this.renderTags()}</div>

            <article>{this.props.projects.description}</article>
            <div className="tags">
              <a
                href={this.props.projects.github_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href={this.props.projects.demo_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
