import React from 'react';
import { View, Text, AsyncStorage, Button } from 'react-native';

export default class ProfileComponent extends React.Component {

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>ProfileComponent</Text>
        <Button title="SIGN OUT" onPress={this._signOutAsync} />
      </View>
    );
  }
}
