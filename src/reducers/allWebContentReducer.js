import {
    FETCH_ALLWEBCONTENT_BEGIN,
    FETCH_ALLWEBCONTENT_SUCCESS,
    FETCH_ALLWEBCONTENT_FAILURE
  } from '../actions/allWebContentActions';
  
  const initialState = {
    items: [],
    loading: false,
    error: null
  };
  
  export default function allWebContentReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_ALLWEBCONTENT_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_ALLWEBCONTENT_SUCCESS:
        return {
          ...state,
          loading: false,
          items: action.payload.allWebContent
        };
  
      case FETCH_ALLWEBCONTENT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          items: []
        };
  
      default:
        return state;
    }
  }