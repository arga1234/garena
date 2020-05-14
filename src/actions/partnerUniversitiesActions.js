import API from '../api';
import axios from 'axios';
export const FETCH_PARTNERUNIV_BEGIN   = 'FETCH_PARTNERUNIV_BEGIN';
export const FETCH_PARTNERUNIV_SUCCESS = 'FETCH_PARTNERUNIV_SUCCESS';
export const FETCH_PARTNERUNIV_FAILURE = 'FETCH_PARTNERUNIV_FAILURE';

export const fetchPartnerUnivBegin = () => ({
  type: FETCH_PARTNERUNIV_BEGIN
});

export const fetchPartnerUnivSuccess = (university, faculty ) => ({
  type: FETCH_PARTNERUNIV_SUCCESS,
  payload: { 
    university : university, 
    faculty : faculty
   }
});

export const fetchPartnerUnivFailure = error => ({
  type: FETCH_PARTNERUNIV_FAILURE,
  payload: { error }
});


export function fetchPartnerUniv() {
return dispatch => {
    dispatch(fetchPartnerUnivBegin());
    const univArr = API.get('sea_scholarship_univ?access_token=wahyutampan&fields=*.*')
    const facultyArr = API.get('sea_scholarship_faculty?access_token=wahyutampan')
    axios.all([univArr, facultyArr])
    .then(axios.spread((...res)=>{
      dispatch(fetchPartnerUnivSuccess(res[0].data.data, res[1].data.data))
    }))
    .catch(error => dispatch(fetchPartnerUnivFailure(error)))
};
}