import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from './reducers';
import { Provider, useSelector } from 'react-redux';
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase';
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import firebase from "firebase/app";
import "firebase/firestore";
import thunk from 'redux-thunk';
import fbconfig from './config/fbConfig';

//firebase.initializeApp(fbconfig);
firebase.firestore();

const store = createStore(
    rootReducers,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        reduxFirestore(fbconfig, { attachAuthIsReady: true })
));


const rrfConfig = {
    userProfile: "users",
    useFirestoreForProfile: true,
};

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
};

function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <div>Loading...</div>;
    return children
}

ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <AuthIsLoaded>    
                    <App />
                </AuthIsLoaded>
                </ReactReduxFirebaseProvider>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
