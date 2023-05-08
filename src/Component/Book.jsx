import PropTypes from 'prop-types';
import React from 'react';

export default function Book({ value, index, removebtn }) {
  return (
    <div className="valuesContainer">
      <div className="blocks" key={value.id}>
        <div className="input-div">
          <p className="categories-value">{value.Select}</p>
          <div className="book-title-div">
            <h3 className="book">{value.name}</h3>
            <p className="title">{value.author}</p>
          </div>
          <div className="btns-div">
            <button className="btn" type="button">Comments</button>
            <button onClick={() => removebtn(index)} className="remove-btn btn" type="button">Remove</button>
            <button className="btn" type="button">Edit</button>
          </div>
        </div>
        <div className="chapterItems">
          <div>
            <svg>
              <circle cx="70" cy="70" r="60" strokeWidth="10" fill="transparent" stroke="#ccc" />
              <circle cx="70" cy="70" r="60" strokeWidth="10" fill="transparent" stroke="#0290ff" strokeDasharray="440" strokeDashoffset="180" strokeLinecap="round" className="progress-circle">
                <animate attributeName="stroke-dashoffset" from="440" to="180" dur="0.5s" />
              </circle>
              <text fontSize="24" x="170" y="60" textAnchor="middle" stroke="black" strokeWidth="1px" dy=".3em">70%</text>
              <text className="a" x="195" y="60%" textAnchor="middle" fill="rgba(0, 0, 0, 0.338)" strokeWidth="1px" dy=".3em" style={{ fontSize: '16px' }}>Completed</text>
            </svg>

          </div>
          <div>
            <p>CURRENT CHAPTER</p>
            <h6>CHAPTER3:&ldquo;A Lesson Learned&rdquo;</h6>
            <button className="updated-prograss-btn" type="button">Updated progress</button>
          </div>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  value: PropTypes.shape({
    Select: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  removebtn: PropTypes.func.isRequired,
};
