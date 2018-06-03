import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  View,
  Text,
  AsyncStorage,
  TouchableOpacity,
  StyleSheet,
  Button,
  TextInput
} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import { firestore as db } from '../firebase';
import ColorStyle from '../styles/ColorStyle';

export default class SignInScene extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');

    // could be a call to an api
    const families = await AsyncStorage.getItem('families');

    // if signed in
    // if family is already established
    // go to Main
    // else, since already signed in, go to Family Setup
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

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.form} behavior="padding" enabled>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.logoText}>familia</Text>
          </View>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.formText}
              placeholder="Email"
              onChangeText={text => this.setState({ email })}
            />
          </View>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.formText}
              placeholder="Password"
              onChangeText={text => this.setState({ password })}
            />
          </View>
          <View style={styles.btnContainer}>
            <FontAwesome.Button
              name="envelope"
              size={20}
              backgroundColor={ColorStyle.green}
              color={ColorStyle.white}
              onPress={this.signInAsync}
            >
              <Text style={styles.btnText}>Sign in with email</Text>
            </FontAwesome.Button>
          </View>
          <View style={styles.btnContainer}>
            <FontAwesome.Button
              name="facebook"
              size={20}
              backgroundColor={'#39579A'}
              color={ColorStyle.white}
              onPress={this.signInAsync}
            >
              <Text style={styles.btnText}>Sign in with Facebook</Text>
            </FontAwesome.Button>
          </View>
          <View style={styles.btnContainer}>
            <FontAwesome.Button
              name="google"
              size={20}
              backgroundColor={'red'}
              color={ColorStyle.white}
              onPress={this.signInAsync}
            >
              <Text style={styles.btnText}>Sign in with Google</Text>
            </FontAwesome.Button>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: ColorStyle.white
  },
  form: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20
  },
  logoText: {
    color: ColorStyle.green,
    fontFamily: 'pacifico-regular',
    fontSize: 35
  },
  formText: {
    height: 30,
    fontSize: 20
  },
  btnText: {
    fontFamily: 'lato-regular',
    color: ColorStyle.white,
    alignItems: 'center',
    fontSize: 18
  },
  formContainer: {
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E6ECEF'
  },
  btnContainer: {
    margin: 10
  }
});
