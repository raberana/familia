import React from 'react';
import { SafeAreaView, Text, AsyncStorage, Button, StyleSheet } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
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

    // could be a call to an api
    const families = await AsyncStorage.getItem('families');

    if (families) {
      this.props.navigation.navigate('Main');
    } else {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'FamilyInit' })]
      });
      this.props.navigation.dispatch(resetAction);
    }
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
