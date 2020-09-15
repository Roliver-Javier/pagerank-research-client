import React, { useState, useEffect } from 'react';
import ChipInput from 'material-ui-chip-input';
import { Button } from '@material-ui/core';
import styles from '../styles.module.scss';
import { connect } from 'react-redux';
import {
  findMetrics,
  clearMetrics,
  setLoading,
} from '../../../store/actions/metricsAction';

const BottomAction = ({ findMetrics, metrics, clearMetrics, setLoading }) => {
  const [keyNames, setKeyName] = useState([]);
  const handleOnChange = (chip) => {
    setKeyName(chip);
  };
  const handleClick = (e) => {
    setLoading(true);
    findMetrics(keyNames);
  };

  useEffect(() => {
    setLoading(false);
    if (metrics.length > 0 && keyNames.length === 0) {
      clearMetrics();
    }
  }, [clearMetrics, metrics, keyNames]);

  return (
    <section className={styles.bottomContent}>
      <ChipInput
        label='Keywords'
        placeholder='Add a keyword'
        onChange={(chips) => handleOnChange(chips)}
      />
      <div className={styles.buttonGroup}>
        <Button
          variant='contained'
          disabled={keyNames.length === 0}
          size='small'
          onClick={handleClick}
        >
          Save keywords
        </Button>
      </div>
    </section>
  );
};
const mapStateToProps = (state) => ({
  metrics: state.graph.metrics,
});
export default connect(mapStateToProps, {
  findMetrics,
  clearMetrics,
  setLoading,
})(BottomAction);
