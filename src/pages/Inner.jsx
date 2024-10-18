import React from "react";
import Navbar from "../components/Navbar"
import About from "../components/About";
import Education from "../components/Education";
import SkillForm from "../components/Skills";
import Experience from "../components/Experience";
import ContactInfo from "../components/ContactInfo";
import FeedbackItem from "../components/Feedback";
import { useSelector } from 'react-redux';
import ThemeToggle from '../components/ThemeToggle';

const Inner = () => {
    const feedbackData = [
        {
            avatar: '../image/cat.jpg',
          content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
          author: "John Doe",
          website: "https://www.citeexample.com"
        },
        {
            avatar: '../image/cat.jpg',
          content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
          author: "John Doe",
          website: "https://www.citeexample.com"
        },
      ];

      const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    return(
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        <div className="inner">
           <Navbar>
           <div className="content">
            <div className="btn-block"><ThemeToggle /></div>
                <div id="About">
                    <About/>
                </div>
                <div id="Education">
                    <Education/>
                </div>
                <div id="Experience">
                    <Experience/>
                </div>
                <div id="Skill"> 
                    <SkillForm/>
                </div>
                <div id="Contacts"> 
                    <ContactInfo/>
                </div>
                <div id="Feedbacks"> 
                    <FeedbackItem feedbacks={feedbackData}/>
                </div>
           </div>
           </Navbar>
           </div>
        </div>
    )
} 

export default Inner