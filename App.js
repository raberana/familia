import React from 'react';
import { Font } from 'expo';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import ColorStyle from './styles/ColorStyle';
import SwitchStack from './Navigation';

export default class App extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      'pacifico-regular': require('./assets/fonts/Pacifico-Regular.ttf'),
      'lato-regular': require('./assets/fonts/Lato-Regular.ttf')
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return this.state.fontLoaded ? <SwitchStack /> : null;
  }
}
