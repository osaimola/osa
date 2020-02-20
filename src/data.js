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
        "Good grasp of building fast, and responsive web apps (like this one) with React"
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
          Worked as a Digital MArketing Specialist with the GoodMorning.com
          adteam. I was responsible for creating and managing campaigns on the
          Google Ads and Facebook Business Manager platforms. I was also
          responsible for analyzing data to draw actionable insights.
          <ul>
            <li>
              Successfully deployed profitable French campaigns on Google Ads
              with the use of Gooogle Sheets + Google Translate to analyze
              hundreds of foreign language search terms daily.
            </li>
            <li>
              Sped up the process of detecting root cause and resolving
              technical issues with shopping feeds; which normally takes several
              days of back and forth communication with the Google support team.
            </li>
            <li>
              Created a custom reporting dashboard for Facebook advertising with
              Google Datastudio which provided insight previously inacessible
              from the Facebook platform alone.
            </li>
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
          Worked as a Digital marketer with hotels.ng. I was responsible
          creating and managing Google Ads campaigns, reporting performance, and
          implemeting technical SEO changes for the hotels.ng online properties.
          I also successfully designed and launched the hotels.ng/guides/
          wordpress blog.
          <ul>
            <li>
              Boosted SERP position of hotels by up to 2 positions, by using
              database entries and modular templates to generate content.
            </li>
            <li>
              Increased conversion rates on long-tail keywords by up to 33% by
              using search filters to dynamically generate pages catering to
              unique queries.
            </li>
            <li>
              Monetized the hotels.ng content sites, and achieved 20% monthly
              revenue growth by  leveraging SEO techniques to: grow traffic; and
              capture top 3 SERP positions for over 1000 keywords.
            </li>
            <li>
              Carried out keyword research, developed content strategy and
              managed a team of  writers to successfully launch the
              hotels.ng/guides blog.
            </li>
          </ul>
        </React.Fragment>
      )
    }
  ],
  projects: [
    {
      name: "nearME",
      tags: ["React", "Openweather API", "Google Places API", "AWS Lambda"],
      github_link: "https://github.com/osaimola/nearme",
      demo_link: "https://osaimola.github.io/nearme",
      description: (
        <React.Fragment>
          A responsive web app built with React on the frontend and AWS Lambda
          on the backend (to enable API calls while keeping API keys secret).
          nearME helps a user find places of interest and provides information
          on the current weather conditions. Users will also see if a POI is
          currently open for business.
        </React.Fragment>
      )
    },
    {
      name: "Yohaku",
      tags: ["Python", "Django", "Twitter API", "HTML", "CSS"],
      github_link: "https://github.com/osaimola/yohaku",
      demo_link: "https://yooohaku.herokuapp.com/",
      description: (
        <React.Fragment>
          A Django powered web app which allows users to anonymously share
          information via a single Twitter handle. Posts to the website are sent
          to the twitter handle @yooohaku in real time. Poster identity is kept
          secret. A feature has been added to keep anonymized tags for each user
          so, for example, offensive posts can be deleted in batches and the
          perpetrator prevented from creating further posts.
        </React.Fragment>
      )
    },
    {
      name: "Honest",
      tags: ["Python", "Django", "HTML", "CSS"],
      github_link: "https://github.com/osaimola/honestapp_project",
      demo_link: "https://honestng.herokuapp.com/",
      description: (
        <React.Fragment>
          A Django powered web app with sign up, sign in and logout features.
          Users can create an account and add information on freelancers who's
          work they are impressed with. Freelancers are also categorized by area
          of specialization and location to make finding someone relevant
          easier.
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
