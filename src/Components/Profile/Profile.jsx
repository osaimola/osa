import React, { Component, Fragment } from "react";
import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="profile">
          <div className="bio">
            <div>
              <img
                className="bio image"
                src="https://avatars2.githubusercontent.com/u/39202977?s=460&v=4"
                alt="oops"
              />
            </div>
            <div>
              <h1>Osa Aimola</h1>
              Osaebekwin Aimola
              <div className="bio cards">
                <img
                  src={this.props.icons.location}
                  alt=""
                  className="bio icon"
                ></img>{" "}
                Edmonton
              </div>
              <div className="bio cards">
                <img
                  src={this.props.icons.phone}
                  alt=""
                  className="bio icon"
                ></img>{" "}
                +1 (587) 298-8048
              </div>
              <div className="bio cards">
                <img
                  src={this.props.icons.email}
                  alt=""
                  className="bio icon"
                ></img>{" "}
                <a href="mailto:osaimola@gmail.com">osaimola@gmail.com</a>
              </div>
              <div className="bio cards">
                <img
                  src={this.props.icons.github}
                  alt=""
                  className="bio icon"
                ></img>{" "}
                <a
                  href="https://github.com/osaimola"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
              </div>
              <div className="bio cards">
                <img
                  src={this.props.icons.resume}
                  alt=""
                  className="bio icon"
                ></img>{" "}
                <a
                  href="https://drive.google.com/file/d/1sJmainVEYmDBdamR2QKI8NwZ5GCaxG4h/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  download my resume
                </a>
              </div>
            </div>
          </div>
          <div className="intro">
            <p>
              Hi, I'm Osa! I'm an aspiring developer with a digital marketing
              background. I'm passionate about building awesome things with
              code. Feel free to contact me to chat or ask questions about my
              interests.
            </p>
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>
                Web Design: experience building websites on both the front and
                backend.
              </li>
              <li>
                Digital Marketing: Handled campaigns with thousands of dollars
                in daily spend.
              </li>
              <li>
                SEO: experience carying out keyword research and
                technical/onsite SEO changes.
              </li>
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Profile;
