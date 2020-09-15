import { combineReducers } from 'redux';
import lookNfeelReducer from './lookNfeelReducer';
import metricsReducer from './metricsReducer';

export default combineReducers({
  lookAndFeel: lookNfeelReducer,
  graph: metricsReducer,
});
