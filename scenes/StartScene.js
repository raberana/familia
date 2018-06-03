import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  AsyncStorage,
  TouchableOpacity,
  StyleSheet,
  Button
} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import ColorStyle from '../styles/ColorStyle';

import { firestore as db } from '../firebase';

export default class StartScene extends React.Component {
  static navigationOptions = {
    header: null
  };

  getStarted = async () => {
    this.props.navigation.navigate('SignIn');
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
            <TouchableOpacity onPress={this.getStarted}>
              <View style={styles.getStartedBtn}>
                <Text style={styles.getStartedText}>GET STARTED</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.footer}>Terms and Conditions</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
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
  getStartedBtn: {
    backgroundColor: ColorStyle.green,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: ColorStyle.white,
    alignItems: 'center',
    padding: 10,
    marginTop: 20
  },
  getStartedText: {
    color: ColorStyle.white,
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
  footer: {
    color: ColorStyle.white,
    fontFamily: 'lato-regular',
    fontSize: 15
  }
});
