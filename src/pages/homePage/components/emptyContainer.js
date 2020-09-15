import React from 'react';
import Typography from '@material-ui/core/Typography';
const EmptyContainer = () => {
  return (
    <div
      style={{
        width: '100%',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <img
        width='200px'
        height='200px'
        src='https://cdn.icon-icons.com/icons2/1724/PNG/512/4023883-bot-head-robot-robotics_112865.png'
        alt='robot'
      />

      <Typography variant='h6' gutterBottom>
        <p>Choose a keyword!</p>
      </Typography>
    </div>
  );
};

export default EmptyContainer;
