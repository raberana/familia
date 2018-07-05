import React from 'react';
import { Font } from 'expo';
import { StyleSheet, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import ColorStyle from './styles/ColorStyle';
import SwitchStack from './Navigation';

export default class App extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      'pacifico-regular': require('./assets/fonts/Pacifico-Regular.ttf'),
      'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
      'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf')
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return this.state.fontLoaded ? (
      <SwitchStack />
    ) : (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ColorStyle.green
  }
});
