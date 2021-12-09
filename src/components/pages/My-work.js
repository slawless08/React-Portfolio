import React from 'react';
import Projects from '../Project';

export default function MyWork() {
  return (
    <section class = "my-work" id = "my-work">
    <h2 class = "section__title section__title--my-work">My Work</h2>
    <p class = "section__subtitle section__subtitle--my-work">Click on the images to view the Github respository page</p>

    <div class = "portfolio">
        <Projects
        name="Node.js Team Generator Application"
        image="https://slawless08.github.io/Draft-Portfolio/assets/images/team_generator.PNG"
        alt="Screenshot of the node.js team Generator application"
        git="https://github.com/slawless08/Team-builder"
        />
        <Projects
        name="PartyRama Website"
        image="https://slawless08.github.io/Draft-Portfolio/assets/images/partyrama.jpg"
        alt="Screenshot of the PartyRama website"
        git="https://github.com/slawless08/Holiday"
        />
        <Projects
        name="Node.js ReadMe Generator Application"
        image="https://slawless08.github.io/Draft-Portfolio/assets/images/readmegen.PNG"
        alt="Screenshot of the node.js ReadMeGenerator Application"
        git="https://github.com/slawless08/ReadMeGenerator"
        />
        <Projects
        name="Book Review website"
        image="https://slawless08.github.io/Draft-Portfolio/assets/images/shelf.png"
        alt="Screenshot of the book review website"
        git="https://github.com/slawless08/book_review"
        />
        
    </div>
</section>
  );
}
