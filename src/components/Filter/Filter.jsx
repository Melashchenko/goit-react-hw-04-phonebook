import PropTypes from 'prop-types';

import React from 'react';

export const Filter = ({ filter, onFilter }) => (
  <>
    <label>
      Find contacts by name
      <input type="text" value={filter} onChange={onFilter} />
    </label>
  </>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
