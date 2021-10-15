import React from 'react';

export default function MyWork() {
  return (
    <section class = "my-work" id = "my-work">
    <h2 class = "section__title section__title--my-work">My Work</h2>
    <p class = "section__subtitle section__subtitle--my-work">Coming soon! Images will eventually be linked to my applications.</p>

    <div class = "portfolio">

        <div class = "first-item">
            <h3>Node.js Team Generator Application</h3>
            <p>Click the image to view the Github link</p>
            <a href = "https://github.com/slawless08/Team-builder" class = "item__link">
                <img src="https://slawless08.github.io/Draft-Portfolio/assets/images/team_generator.PNG" alt="Screenshot of the node.js team Generator application" class = "first-item__img"/>
            </a>
        </div>

        <div class = "item">
            <h3>PartyRama Website</h3>
            <p>Click on the image to view the Github link</p>
            <a href="https://github.com/slawless08/Holiday" class = "item__link">
                <img src="https://slawless08.github.io/Draft-Portfolio/assets/images/partyrama.jpg" alt="Screenshot of the PartyRama website" class = "item__img"/>
            </a>
        </div>

        <div class = "item">
            <h3>Node.js ReadMe Generator Application</h3>
            <p>Click on the image to view the Github link</p>
            <a href="https://github.com/slawless08/ReadMeGenerator" class = "item__link">
                <img src="https://slawless08.github.io/Draft-Portfolio/assets/images/readmegen.PNG" alt="Screenshot of the node.js ReadMeGenerator Application" class = "item__img"/>
            </a>
        </div>

        <div class = "item">
            <h3>Book Review website</h3>
            <p>This project is still under development. Click the image to view the Github</p>
            <a href="https://github.com/slawless08/book_review" class = "item__link">
                <img src="https://slawless08.github.io/Draft-Portfolio/assets/images/shelf.png" alt="Screenshot of the book review website" class = "item__img"/> 
            </a>
        </div>
    </div>
</section>
  );
}
