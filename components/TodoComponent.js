import React from 'react';
import { View, Text } from 'react-native';

export default class TodoComponent extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>TodoComponent</Text>
      </View>
    );
  }
}
