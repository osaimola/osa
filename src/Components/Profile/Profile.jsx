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
            </div>
          </div>
          <div className="intro">
            <p>
              Hi, I'm Osa. I'm passionate about building great things with code.
            </p>
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>
                Digital Marketing: Handled campaiggns for thousands of dollars
                in daily spend.
              </li>
              <li>
                SEO: experience carying out keyword research and
                technical/onsite SEO changes
              </li>
              <li>
                Web Design: experience building websites on both the front and
                backend
              </li>
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Profile;
