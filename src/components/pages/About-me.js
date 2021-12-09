import React from 'react';

export default function AboutMe() {
  return (
    <section class = "about-me" id="about-me">
        <h2 class = "section__title section__title--about-me">Who I am</h2>
        <p class = "seciton__subtitle section__subtitle--about-me">Developing Web Developer</p>

        <div class = "about-me__body">
            <p>Recent graduate of The Ohio State University Full Stack Web Development Bootcamp, I have gained skills using coding languages such as HTML, CSS, JavaScript, NodeJS, MySQL, MongoDB, React, and many other libraries associated with those. Currently seeking to apply these skills in a new career relative to my experience but one that will allow me to grow using the skills I have gained through my experience in the field of education: communication, collaboration, learning, critical thinking and problem solving.</p>
            <p>Some of my goals include:</p>
            <ul>
              <li>Apply learned web development skills in a collaborative and professional setting</li>
              <li>Develop a functioning website that would be able to host and promote podcast content</li>
              <li>Dive into the world of data anayltics</li>
            </ul>
        </div>
    </section>
  );
}
