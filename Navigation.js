import React from 'react';
import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator
} from 'react-navigation';
import { Feather } from '@expo/vector-icons';
import ColorStyle from './styles/ColorStyle';
import HomeScene from './scenes/HomeScene';
import ChatScene from './scenes/ChatScene';
import FamilyInitScene from './scenes/FamilyInitScene';
import FamilyInitCreateScene from './scenes/FamilyInitCreateScene';
import FamilyInitJoinScene from './scenes/FamilyInitJoinScene';
import SignInScene from './scenes/SignInScene';
import ProfileScene from './scenes/ProfileScene';
import TodoScene from './scenes/TodoScene';
import AuthLoadingScene from './scenes/AuthLoadingScene';

const InitStack = createStackNavigator(
  {
    SignIn: SignInScene,
    FamilyInit: FamilyInitScene,
    FamilyInitCreate: FamilyInitCreateScene,
    FamilyInitJoin: FamilyInitJoinScene
  },
  {
    initialRouteName: 'SignIn',
    header: null
  }
);

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

export default (SwitchStack = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScene,
    Main: MainStack,
    Init: InitStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
));
