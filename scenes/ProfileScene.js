import React from 'react';
import { SafeAreaView, Text, AsyncStorage, Button } from 'react-native';

export default class ProfileScene extends React.Component {
  signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Init');
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>ProfileComponent</Text>
        <Button title="SIGN OUT" onPress={this.signOutAsync} />
      </SafeAreaView>
    );
  }
}
