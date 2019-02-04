import exercisesReducer from './exercisesReducer';
import trainingsReducer from './trainingsReducer';

import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';


const rootReducer = combineReducers({
    exercises: exercisesReducer,
    trainings: trainingsReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;