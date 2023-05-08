import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

export default function BookList({ tasks, removebtn }) {
  return (
    <div>
      {tasks.map((value, index) => (
        <Book key="" value={value} index={index} removebtn={removebtn} />
      ))}
    </div>
  );
}

BookList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      Select: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  removebtn: PropTypes.func.isRequired,
};

Book.propTypes = {
  value: PropTypes.shape({
    Select: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  removebtn: PropTypes.func.isRequired,
};
