import React from 'react';
import { SafeAreaView, Text, Button, AsyncStorage } from 'react-native';

export default class FamilyInitComponent extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Family Init</Text>
        <Button
          title="Create a Family"
          onPress={() => {
            this.props.navigation.navigate('FamilyInitCreate');
          }}
        />
        <Button
          title="Join a Family"
          onPress={() => {
            this.props.navigation.navigate('FamilyInitJoin');
          }}
        />
      </SafeAreaView>
    );
  }
}
