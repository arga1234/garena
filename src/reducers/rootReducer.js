import { combineReducers } from 'redux';
import testimony from './testimonyReducer';
import partnerUniversities from './partnerUniversitiesReducer'
import allWebContent from './allWebContentReducer'

export default combineReducers({
    testimony, partnerUniversities, allWebContent
});