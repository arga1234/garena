import API from '../api';

export const FETCH_ALLWEBCONTENT_BEGIN   = 'FETCH_ALLWEBCONTENT_BEGIN';
export const FETCH_ALLWEBCONTENT_SUCCESS = 'FETCH_ALLWEBCONTENT_SUCCESS';
export const FETCH_ALLWEBCONTENT_FAILURE = 'FETCH_ALLWEBCONTENT_FAILURE';

export const fetchAllWebContentBegin = () => ({
  type: FETCH_ALLWEBCONTENT_BEGIN
});

export const fetchAllWebContentSuccess = allWebContent => ({
  type: FETCH_ALLWEBCONTENT_SUCCESS,
  payload: { allWebContent }
});

export const fetchAllWebContentFailure = error => ({
  type: FETCH_ALLWEBCONTENT_FAILURE,
  payload: { error }
});

export function fetchAllWebContent() {
return dispatch => {
    dispatch(fetchAllWebContentBegin());
     API.get('sea_scholarship?access_token=wahyutampan&fields=*.*')
    .then(res=>{
      dispatch(fetchAllWebContentSuccess(res.data.data)); 
    })
    .catch(error => dispatch(fetchAllWebContentFailure(error)))
};
}