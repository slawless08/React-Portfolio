import React from 'react'

const Projects = (props) => {
    return (
        <div class = "item">
                <h3>{props.name}</h3>
                {/* <p> Add subtitle or other information if needed</p> */}
                <a href={props.git} class = "item__link">
                    <img src={props.image} alt={props.alt} class = "item__img"/>
                </a>
            </div>
    )
}

export default Projects