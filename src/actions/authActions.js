import { auth, provider } from '../config/fbConfig';

export const signIn = (credentials) => {
    return (dispatch) => {
        auth.signInWithPopup(provider)
            .then(() => {
                console.log(auth)
                dispatch({ type: 'LOGIN_SUCCESS' })
            }).catch((err) => {
                console.log(auth)
                dispatch({ type: 'LOGIN_ERROR', err })

            })
    }
}

export const signOut = () => {
    return (dispatch) => {
        auth.signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' });
        });
    }
}
