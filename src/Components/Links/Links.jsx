import React, { Component } from "react";
import "./Links.css";

class Links extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Experience: "link selected",
      Projects: "link"
    };
  }

  toggleLink = linktype => {
    //update the css to display what link is clicked here
    //TODO pass function down to switch between experience and projects that you have worked on
    this.props.onLinkClick(linktype);

    if (linktype === "Experience") {
      this.setState({
        Experience: "link selected",
        Projects: "link"
      });
    } else {
      this.setState({
        Experience: "link",
        Projects: "link selected"
      });
    }
  };

  render() {
    return (
      <div className="links widecard">
        <button
          className={this.state.Experience}
          onClick={() => this.toggleLink("Experience")}
        >
          Experience
        </button>
        <button
          className={this.state.Projects}
          onClick={() => this.toggleLink("Projects")}
        >
          Projects
        </button>
      </div>
    );
  }
}

export default Links;
