import React from 'react';
import './SearchController.css';

const SearchController = ({ onChange }) => (
  <div className="ControllerWrapper">
    <input
      type="text"
      placeholder="Enter product name"
      className="controller-input"
      onChange={onChange}
    />
  </div>
);

export default SearchController;
