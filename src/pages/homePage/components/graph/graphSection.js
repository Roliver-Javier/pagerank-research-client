import React, { useEffect, useState, Fragment } from 'react';
import {
  AreaChart,
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  Legend,
  Area,
} from 'recharts';
import EmptyContainer from '../emptyContainer';
import { connect } from 'react-redux';
import CustomTooltip from './customTooltip/customTooltip';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from '../../styles.module.scss';
const GraphSection = ({
  label,
  colors,
  metrics,
  keywords,
  sections,
  loading,
}) => {
  const [initSection, setInitSection] = useState([]);

  useEffect(() => {
    const sect = getKeywordInfo(sections);
    setInitSection(sect);
  }, [keywords]);

  const getKeywordInfo = (sections) => {
    let keyNameInfo = [];
    keywords.map((parent) => {
      sections.map((section) => {
        keyNameInfo.push(`${parent}.${section}`);
        return section;
      });
      return parent;
    });

    return keyNameInfo;
  };
  const labelReplaced = (name) => {
    let textName = name.replaceAll('_', ' ').split('.')[0];
    return textName.charAt(0).toUpperCase() + textName.slice(1);
  };
  return (
    <div className={styles.graphArea}>
      <h4>{label}</h4>
      {metrics.length == 0 && <EmptyContainer />}
      {loading && <CircularProgress />}
      {metrics.length > 0 && (
        <ResponsiveContainer width='100%' height={300}>
          <AreaChart
            data={metrics}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            {initSection.map((keyword, index2) => {
              console.log(colors[index2]);
              return (
                <linearGradient
                  key={'linear' + index2}
                  id={`${keyword}`}
                  x1='0'
                  y1='0'
                  x2='0'
                  y2='1'
                >
                  <stop
                    offset='5%'
                    stopColor={colors[index2]}
                    stopOpacity={0.8}
                  />
                  <stop
                    offset='95%'
                    stopColor={colors[index2]}
                    stopOpacity={0}
                  />
                </linearGradient>
              );
            })}
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              layout='vertical'
              align='right'
              verticalAlign='middle'
              height={36}
            />
            {initSection.map((keyword, index2) => {
              return (
                <Area
                  key={index2}
                  name={labelReplaced(keyword)}
                  dataKey={`${keyword}`}
                  fill={`url(#${keyword}})`}
                  stroke={colors[index2 % colors.length]}
                ></Area>
              );
            })}
            {/* <GradientSection data={initSection} colors={colors} /> */}
            {/* <AreaSection data={initSection} colors={colors} /> */}
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

GraphSection.propTypes = {
  sections: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
  metrics: state.graph.metrics,
  keywords: state.graph.keywords,
  loading: state.graph.loading,
  colors: state.lookAndFeel.colors,
});
export default connect(mapStateToProps, {})(GraphSection);
