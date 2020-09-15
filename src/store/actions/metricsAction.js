import { FIND_METRICS, SET_KEYWORDS, CLEAR_METRICS, LOADING } from '../types';
import { endpoints } from '../../global/environment';
import axios from 'axios';

export const findMetrics = (keywords) => async (dispatch) => {
  const sendData = await axios.post(
    `${endpoints.BACKEND_API}${endpoints.KEYWORD}`,
    {
      keywords: keywords,
    }
  );
  const dataSent = await sendData;
  if (dataSent) {
    const metrics = await axios.get(
      `${endpoints.BACKEND_API}${endpoints.METRICS}`
    );
    const data = metrics.data;
    const dataFormatted = formatMetrics(keywords, data);
    keywords = renameKeywords(keywords);
    dispatch({
      type: SET_KEYWORDS,
      payload: keywords,
    });
    dispatch({
      type: LOADING,
      payload: false,
    });
    return dispatch({
      type: FIND_METRICS,
      payload: [...dataFormatted],
    });
  }
};

export const clearMetrics = () => async (dispatch) => {
  return dispatch({
    type: CLEAR_METRICS,
  });
};

export const setLoading = (showLoading) => async (dispatch) => {
  return dispatch({
    type: LOADING,
    payload: showLoading,
  });
};

const renameKeywords = (keywords) => {
  return keywords.map((val) => val.replaceAll(' ', '_'));
};
const formatMetrics = (keywords, responseData) => {
  const makeObj = (values) => {
    let strObj = [];
    keywords = renameKeywords(keywords);
    keywords.map((val, index) => {
      strObj.push(`"${val}":{"absolute_position":${values[index]}}`);
      return val;
    });
    return JSON.parse('{' + strObj.join(',') + '}');
  };
  const convertion = (values, timeFormatted) => {
    let dataKeywords = {};
    values.map((val) => {
      const sectionObject = makeObj(values);
      dataKeywords = {
        ...dataKeywords,
        ...sectionObject,
      };
      return val;
    });

    return { ...dataKeywords, name: timeFormatted };
  };

  const { timelineData } = responseData.default;
  const data = timelineData.map((timeData) =>
    convertion(timeData.value, timeData.formattedTime)
  );
  return data;
};
