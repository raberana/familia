import React from 'react';
import { SafeAreaView, Text } from 'react-native';

export default class TodoScene extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>TodoComponent</Text>
      </SafeAreaView>
    );
  }
}
