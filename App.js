import React from 'react';
import { StyleSheet, View, YellowBox, Platform, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './src/store';
import EntryPoint from './src/containers/Candidates';


// ignore specific yellowbox warnings
YellowBox.ignoreWarnings(["Require cycle:", "Remote debugger"]);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <View style={styles.container}><EntryPoint/></View>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
