import React from 'react';
import { SafeAreaView, Text, Button, AsyncStorage } from 'react-native';

export default class FamilyInitJoinScene extends React.Component {
  continueToMainAsync = async () => {
    await AsyncStorage.setItem('families', 'wow');
    this.props.navigation.navigate('Main');
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Join Family</Text>
        <Button title="CONTINUE" onPress={() => this.continueToMainAsync()} />
      </SafeAreaView>
    );
  }
}
