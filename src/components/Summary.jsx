import React from 'react';

import images from '../assets/images';
import './Summary.css';

const Summary = (props) => {
  const { data } = props;

  return (
    <div className="summary-section">
      <h3>Summary</h3>
      <ul className="summary-list">
        {data.map((item, index) => (
          <li className={`summary-list-item ${item.category.toLowerCase()}`} key={`item-${index}`}>
            
              <img src={images[item.icon]} alt={item.category} />
              <h4>{item.category}</h4>
              <p>
                {item.score} <span>/ 100</span>
              </p>
            
          </li>
        ))}
      </ul>
      <button>Continue</button>
    </div>
  );
};

export default Summary;
