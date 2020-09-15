import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './customTooltip.scss';

const CustomTooltip = ({ active, payload, label }) => {
  return active ? (
    <div className='tooltip__customTooltip'>
      {payload.map((tool, index) => (
        <Fragment key={label + index}>
          <h4 className='tooltip__title'>{tool.name.split(':')[0]}</h4>
          <small className='tooltip__label'>Date: {`${label}`}</small>
          <br />
          <small className='tooltip__intro'>Value: {tool.value}</small>
          <hr />
        </Fragment>
      ))}
    </div>
  ) : null;
};
CustomTooltip.propTypes = {
  payload: PropTypes.array,
  label: PropTypes.string,
};

export default CustomTooltip;
