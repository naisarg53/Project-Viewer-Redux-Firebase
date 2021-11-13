export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        // make async call to database
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch(err => {
            dispatch({ type: 'LOGIN_ERROR', err });
        });
    }
};

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        // make async call to database
        const firebase = getFirebase();
        firebase.auth().signOut()
        .then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' });
        }).catch(err => {
            dispatch({ type: 'SIGNOUT_ERROR', err });
        });
    }
};

export const SignUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                first_name: newUser.first_name,
                last_name: newUser.last_name,
                initials: newUser.first_name[0] + newUser.last_name[0]
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'SIGNUP_FAILED', err })
        })
    }
};


