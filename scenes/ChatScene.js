import React from 'react';
import { SafeAreaView, Text } from 'react-native';

export default class ChatScene extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Chat Scene</Text>
      </SafeAreaView>
    );
  }
}
