import React from 'react';

import './Result.css';

const Result = (props) => {
  const { data } = props;

  const averageScore = (data) => {
    const total = data.reduce((acc, item) => acc + item.score, 0);
    const average = Math.round(total / data.length);
    return average; 
  }
  
  return (
    <div className="result-section">
      <h4>Your Result</h4>
      <div className="score-circle">
        <h1>{averageScore(data)}</h1>
        <span>of 100</span>
      </div>
      <h3>Great</h3>
      <p>You scored higher than 65% of the people who have taken these tests.</p>
    </div>
  )
};

export default Result;
