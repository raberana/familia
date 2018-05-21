import React from 'react';
import { SafeAreaView, View, Text, AsyncStorage, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import ColorStyle from '../styles/ColorStyle';

export default class SignInScene extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.form}>
          <View>
            <Text style={styles.logoText}>familia</Text>
          </View>
          <View>
            <Text style={styles.centerText}>Connect with your family.</Text>
            <Text style={styles.centerText}>Anytime and anywhere.</Text>
            <TouchableOpacity onPress={this._signInAsync}>
              <View style={styles.signUpBtn}>
                <Text style={styles.signUpText}>GET STARTED</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Text onPress={this._signInAsync} style={styles.signIntext}>
              Have an account already? LOG IN
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');

    // could be a call to an api
    const families = await AsyncStorage.getItem('families');

    if (families) {
      this.props.navigation.navigate('Main');
    } else {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'FamilyInit' })]
      });
      this.props.navigation.dispatch(resetAction);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ColorStyle.green
  },
  form: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 40
  },
  signUpBtn: {
    backgroundColor: ColorStyle.white,
    alignItems: 'center',
    padding: 10,
    marginTop: 20
  },
  signUpText: {
    color: ColorStyle.green,
    fontFamily: 'lato-regular',
    fontSize: 17
  },
  logoText: {
    color: ColorStyle.white,
    fontFamily: 'pacifico-regular',
    fontSize: 35
  },
  centerText: {
    color: ColorStyle.white,
    fontFamily: 'lato-regular',
    fontSize: 30
  },
  signIntext: {
    color: ColorStyle.white,
    fontFamily: 'lato-regular',
    fontSize: 17
  }
});
