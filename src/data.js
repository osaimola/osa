import React from "react";
import python_icon from "./icons/python.png";
import javascript_icon from "./icons/javascript-icon.png";
import django_icon from "./icons/django-icon.png";
import react_icon from "./icons/logo.svg";
import api_icon from "./icons/api-icon.png";
import html_icon from "./icons/html-icon.png";
import gm_icon from "./icons/gm-icon.png";
import hng_icon from "./icons/hng-icon.png";
import location_icon from "./icons/location-icon.svg";
import email_icon from "./icons/email-icon.svg";
import phone_icon from "./icons/phone-icon.svg";
import github_icon from "./icons/github-icon.svg";

const data = {
  languages: [
    {
      logo: python_icon,
      name: "Python",
      description:
        "Intermediate experience working with python. Strong grasp of OOP with experience using several python libraries"
    },
    {
      logo: javascript_icon,
      name: "Javscript",
      description:
        "Working experience with javascript. Good grasp of literals, functions and classes"
    },
    {
      logo: django_icon,
      name: "Django",
      description: "Building and debugging websites with the Django framework"
    },
    {
      logo: react_icon,
      name: "React.js",
      description:
        "Good grasp of building fast, and amazing web apps (like this one) with React"
    },
    {
      logo: api_icon,
      name: "APIs",
      description:
        "I have built several awesome projects with API's like the Twitter API, Google Places API, Openweather API and Spotify's API"
    },
    {
      logo: html_icon,
      name: "HTML and CSS",
      description: "Good working knowledge of HTML and CSS"
    }
  ],
  experience: [
    {
      logo: gm_icon,
      date: "August 2019",
      name: "GoodMorning.com",
      description: (
        <React.Fragment>
          Worked as the cooles dude you can ever think of. day to day included
          solving all the technical issues no one else could figure out how to
          solve because they were great marketers but not focused on the
          techniocal side
          <ul>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ul>
        </React.Fragment>
      )
    },
    {
      logo: hng_icon,
      date: "September 2016",
      name: "Hotels.ng",
      description: (
        <React.Fragment>
          Worked as the cooles dude you can ever think of. day to day included
          solving all the technical issues no one else could figure out how to
          solve because they were great marketers but not focused on the
          techniocal side
          <ul>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ul>
        </React.Fragment>
      )
    }
  ],
  projects: [
    {
      name: "Yohaku",
      tags: ["Python", "Django", "Twitter API", "HTML", "CSS"],
      github_link: "https://github.com/osaimola/yohaku",
      demo_link: "http://yooohaku.herokuapp.com/",
      description: (
        <React.Fragment>
          A Django powered web app which allows users to share a single Twitter
          handle. Posts to the website are sent to the twitter handle @yooohaku
          in real time. Poster identity is kept anonymous. A feature has been
          added to keep anonymized tags from users so, for example, offensive
          posts can be deleted and the poster prevented from making future
          posts.
        </React.Fragment>
      )
    },
    {
      name: "Nearme",
      tags: ["React", "Openweather API", "Google Places API"],
      github_link: "https://github.com/osaimola/nearme",
      demo_link: "http://yooohaku.herokuapp.com/",
      description: (
        <React.Fragment>
          A Django powered web app which allows users to share a single Twitter
          handle. Posts to the website are sent to the twitter handle @yooohaku
          in real time. Poster identity is kept anonymous. A feature has been
          added to keep anonymized tags from users so, for example, offensive
          posts can be deleted and the poster prevented from making future
          posts.
        </React.Fragment>
      )
    }
  ],
  profileIcons: {
    location: location_icon,
    phone: phone_icon,
    email: email_icon,
    github: github_icon
  }
};

export default data;
