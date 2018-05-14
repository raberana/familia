import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Font } from 'expo';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator
} from 'react-navigation';
import HomeScene from './scenes/HomeScene';
import ChatScene from './scenes/ChatScene';
import SignInScene from './scenes/SignInScene';
import ProfileScene from './scenes/ProfileScene';
import TodoScene from './scenes/TodoScene';
import AuthLoadingScene from './scenes/AuthLoadingScene';
import ColorStyle from './styles/ColorStyle';

const InitStack = createStackNavigator({ SignIn: SignInScene });

const MainStack = createBottomTabNavigator(
  {
    Home: HomeScene,
    Chat: ChatScene,
    Todo: TodoScene,
    Profile: ProfileScene
  },
  {
    initialRouteName: 'Home',
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        switch (routeName) {
          case 'Home':
            iconName = 'home';
            break;
          case 'Chat':
            iconName = 'message-circle';
            break;
          case 'Todo':
            iconName = 'calendar';
            break;
          case 'Profile':
            iconName = 'user';
            break;
          default:
            iconName = 'home';
        }

        return <Feather name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: ColorStyle.green,
      inactiveTintColor: ColorStyle.gray,
      showLabel: false
    }
  }
);

const SwitchStack = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScene,
    Main: MainStack,
    Init: InitStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

export default class App extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      'pacifico-regular': require('./assets/fonts/Pacifico-Regular.ttf')
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      this.state.fontLoaded ? <SwitchStack /> : null
    );
  }
}
