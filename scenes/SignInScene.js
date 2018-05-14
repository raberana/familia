import React from 'react';
import { SafeAreaView, Text, AsyncStorage, Button, StyleSheet } from 'react-native';
import ColorStyle from '../styles/ColorStyle';

export default class SignInScene extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.logoText}>familia</Text>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </SafeAreaView>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Main');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ColorStyle.green
  },
  logoText: {
    color: ColorStyle.white,
    fontFamily: 'pacifico-regular',
    fontSize: 50
  }
});