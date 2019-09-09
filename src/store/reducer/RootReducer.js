import AuthReducer from './AuthReducer';
import ProjectReducer from './ProjectReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';


const rootReducers = combineReducers({
    auth: AuthReducer,
    project: ProjectReducer,
    firestore: firestoreReducer
});

export default rootReducers;