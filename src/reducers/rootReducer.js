import exercisesReducer from './exercisesReducer';
import trainingsReducer from './trainingsReducer';
import favouritesReducer from './favouritesReducer';


import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';


const rootReducer = combineReducers({
    exercises: exercisesReducer,
    trainings: trainingsReducer,
    favourites: favouritesReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;