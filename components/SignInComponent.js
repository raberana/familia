import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  View,
  Text,
  AsyncStorage,
  StyleSheet,
  TextInput
} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import { firebase } from '../firebase';
import config from '../config';
import ColorStyle from '../styles/ColorStyle';

export default class SignInComponent extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      mode: props.navigation.getParam('mode', 'SIGNUP')
    };
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

  signInEmailAsync = async () => {};

  signInFacebookAsync = async () => {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      config.facebookAppId,
      {
        permissions: ['public_profile']
      }
    );
    if (type === 'success') {
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      this.signInAsync();
    }
  };

  signInGoogleAsync = async () => {
    const result = await Expo.Google.logInAsync({
      androidClientId: config.androidClientId,
      iosClientId: config.iosClientId,
      scopes: ['profile', 'email']
    });

    if (result.type === 'success') {
      firebase.auth.GoogleAuthProvider.credential(result.accessToken)
        // result.accessToken;
        .this.signInAsync();
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
              onChangeText={email => this.setState({ email })}
            />
          </View>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.formText}
              placeholder="Password"
              onChangeText={password => this.setState({ password })}
            />
          </View>
          {this.state.mode == 'SIGNUP' && (
            <View style={styles.formContainer}>
              <TextInput
                style={styles.formText}
                placeholder="Confirm Password"
                onChangeText={confirmPassword => this.setState({ confirmPassword })}
              />
            </View>
          )}
          <View style={styles.btnContainer}>
            <FontAwesome.Button
              name="envelope"
              size={20}
              borderRadius={20}
              backgroundColor={ColorStyle.green}
              color={ColorStyle.white}
              onPress={this.signInEmailAsync}
            >
              <Text style={styles.btnText}>
                {this.state.mode == 'SIGNUP' ? 'SIGN UP' : 'SIGN IN'} WITH EMAIL
              </Text>
            </FontAwesome.Button>
          </View>
          <View style={styles.btnContainer}>
            <FontAwesome.Button
              name="facebook"
              size={20}
              borderRadius={20}
              backgroundColor={'#3C5A9A'}
              color={ColorStyle.white}
              onPress={this.signInFacebookAsync}
            >
              <Text style={styles.btnText}>FACEBOOK</Text>
            </FontAwesome.Button>
          </View>
          <View style={styles.btnContainer}>
            <FontAwesome.Button
              name="google"
              size={20}
              borderRadius={20}
              backgroundColor={'red'}
              color={ColorStyle.white}
              onPress={this.signInGoogleAsync}
            >
              <Text style={styles.btnText}>GOOGLE</Text>
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
  formContainer: {
    margin: 10,
    borderRadius: 5,
    padding: 7,
    backgroundColor: '#E6ECEF'
  },
  formText: {
    height: 25,
    fontSize: 18
  },
  btnContainer: {
    margin: 10
  },
  btnText: {
    fontFamily: 'roboto-regular',
    color: ColorStyle.white,
    alignItems: 'center',
    fontSize: 15
  }
});
