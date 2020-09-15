import React from 'react';
import styles from '../styles.module.scss';
import Typography from '@material-ui/core/Typography';
import SwitchTheme from '../../../components/switchTheme/switchTheme';
const TopSection = () => {
  return (
    <div className={styles.topContent}>
      <Typography variant='h5' gutterBottom>
        Keyword Tracking
      </Typography>
      <SwitchTheme></SwitchTheme>
    </div>
  );
};

export default TopSection;
