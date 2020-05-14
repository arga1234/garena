import {
    FETCH_PARTNERUNIV_BEGIN,
    FETCH_PARTNERUNIV_SUCCESS,
    FETCH_PARTNERUNIV_FAILURE
  } from '../actions/partnerUniversitiesActions';
  
  const initialState = {
    university : [], 
    faculty : [],
    loading: false,
    error: null
  };
  
  export default function partnerUniversitiesReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_PARTNERUNIV_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_PARTNERUNIV_SUCCESS:
        return {
          ...state,
          loading: false,
          university : action.payload.university, 
          faculty : action.payload.faculty
        };
  
      case FETCH_PARTNERUNIV_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          university : [], 
          faculty : []
        };
  
      default:
        return state;
    }
  }