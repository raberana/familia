import React from 'react';
import {
  SafeAreaView,
  Text,
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  AsyncStorage
} from 'react-native';
import ColorStyle from '../styles/ColorStyle';

export default class AuthLoadingComponent extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    // plus get families
    this.props.navigation.navigate(userToken ? 'Main' : 'Init');
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
    justifyContent: 'center',
    backgroundColor: ColorStyle.green
  }
});
