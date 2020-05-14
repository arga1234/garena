import {
    FETCH_TESTIMONY_BEGIN,
    FETCH_TESTIMONY_SUCCESS,
    FETCH_TESTIMONY_FAILURE
  } from '../actions/testimonyActions';
  
  const initialState = {
    items: [],
    loading: false,
    error: null
  };
  
  export default function testimonyReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_TESTIMONY_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_TESTIMONY_SUCCESS:
        return {
          ...state,
          loading: false,
          items: action.payload.testimony
        };
  
      case FETCH_TESTIMONY_FAILURE:
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