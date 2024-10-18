import React from 'react';
import { useSelector } from 'react-redux';

const Feedback = ({ feedbacks }) => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <div className="feedback-container">
      <h2 className="feedback-title">Feedbacks</h2>
      {feedbacks.map((feedback, index) => (
        <div className="feedback-item" >
        <div className={isDarkMode ? 'feedback-content  block-dark-mode' : 'feedback-content block-light-mode'}>
          <p>{feedback.content}</p>
        </div>
        <div className="feedback-author">
          <img src={feedback.avatar} alt={feedback.author} className="author-avatar" />
          <div className="author-info">
            <span className="author-name">{feedback.author}</span>
            <span className="author-separator">,</span>
            <a href={feedback.website} className="author-website">{feedback.website}</a>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Feedback;