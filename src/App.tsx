import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

import { FlashcardScreen } from './components/FlashcardScreen';

export default class App extends Component<{}> {
  render() {
    return (
      <FlashcardScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// TODO:
// make interface/base component for "external" layout stuff
// screen component
// better linting for RN?
// tests, tests, tests
// Splash, launch icons, etc.
// global style solution: fullscreen, theme, etc.
// navigation, redux, etc.
