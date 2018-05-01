import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyAVmDlifiPiAFdkuNsVWtX5Nb2t79oiooo",
            authDomain: "manager-7c1c4.firebaseapp.com",
            databaseURL: "https://manager-7c1c4.firebaseio.com",
            projectId: "manager-7c1c4",
            storageBucket: "manager-7c1c4.appspot.com",
            messagingSenderId: "103072223618"
        };

        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;