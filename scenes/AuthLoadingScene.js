import React from 'react';
import {
  SafeAreaView,
  Text,
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  AsyncStorage
} from 'react-native';

export default class AuthLoadingScene extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
