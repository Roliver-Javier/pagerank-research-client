import { SET_THEME, SET_TOGGLE_CHECKED } from '../types';

export const setTheme = (theme) => async (dispatch) =>
  dispatch({
    type: SET_THEME,
    payload: theme,
  });

export const toggleChecked = () => async (dispatch) =>
  dispatch({
    type: SET_TOGGLE_CHECKED,
  });
