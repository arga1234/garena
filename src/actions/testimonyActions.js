import API from '../api';

export const FETCH_TESTIMONY_BEGIN   = 'FETCH_TESTIMONY_BEGIN';
export const FETCH_TESTIMONY_SUCCESS = 'FETCH_TESTIMONY_SUCCESS';
export const FETCH_TESTIMONY_FAILURE = 'FETCH_TESTIMONY_FAILURE';

export const fetchTestimonyBegin = () => ({
  type: FETCH_TESTIMONY_BEGIN
});

export const fetchTestimonySuccess = testimony => ({
  type: FETCH_TESTIMONY_SUCCESS,
  payload: { testimony }
});

export const fetchTestimonyFailure = error => ({
  type: FETCH_TESTIMONY_FAILURE,
  payload: { error }
});

export function fetchTestimony() {
return dispatch => {
    dispatch(fetchTestimonyBegin());
     API.get('sea_scholarship_testimoni?access_token=wahyutampan&fields=*.*')
    .then(res=>{
      dispatch(fetchTestimonySuccess(res.data.data)); 
    })
    .catch(error => dispatch(fetchTestimonyFailure(error)))
};
}