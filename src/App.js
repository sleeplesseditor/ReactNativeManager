import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
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
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;