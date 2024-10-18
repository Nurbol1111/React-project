import React from "react";
import { useSelector } from 'react-redux';

const About = () =>{
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);
    return (
        <div className={isDarkMode ? 'about  block-dark-mode' : 'about  block-light-mode'}>
            <h1>About me</h1>
            <p className="about-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo eum quam minus obcaecati voluptatibus delectus nihil veniam quas quia, exercitationem deleniti distinctio sit ducimus dolorem laudantium excepturi hic? Ipsum, dolore?</p>
        </div>
    )
}

export default About