import React from 'react';
import { SafeAreaView, Text, Button, AsyncStorage } from 'react-native';

export default class FamilyInitCreateScene extends React.Component {
  continueToMainAsync = async () => {
    await AsyncStorage.setItem('families', 'wow');
    this.props.navigation.navigate('Main');
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Create Family</Text>
        <Button title="CONTINUE" onPress={() => this.continueToMainAsync()} />
      </SafeAreaView>
    );
  }
}
