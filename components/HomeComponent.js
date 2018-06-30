import React from 'react';
import { SafeAreaView, Text } from 'react-native';

export default class HomeComponent extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Component</Text>
      </SafeAreaView>
    );
  }
}
