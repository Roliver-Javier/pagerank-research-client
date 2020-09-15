import { FIND_METRICS, SET_KEYWORDS, CLEAR_METRICS, LOADING } from '../types';

const initialState = {
  metrics: [],
  keywords: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FIND_METRICS:
      return {
        ...state,
        metrics: [...state.metrics, ...action.payload],
      };

    case SET_KEYWORDS:
      return {
        ...state,
        keywords: [...action.payload],
      };

    case CLEAR_METRICS: {
      return {
        ...state,
        metrics: [],
      };
    }
    case LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default:
      return state;
  }
};
