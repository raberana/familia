import React from 'react';
import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator
} from 'react-navigation';
import { Feather } from '@expo/vector-icons';
import ColorStyle from './styles/ColorStyle';
import HomeComponent from './components/HomeComponent';
import ChatComponent from './components/ChatComponent';
import FamilyInitComponent from './components/FamilyInitComponent';
import FamilyInitCreateComponent from './components/FamilyInitCreateComponent';
import FamilyInitJoinComponent from './components/FamilyInitJoinComponent';
import SignInComponent from './components/SignInComponent';
import SignInEmailComponent from './components/SignInEmailComponent';
import StartComponent from './components/StartComponent';
import ProfileComponent from './components/ProfileComponent';
import TodoComponent from './components/TodoComponent';
import AuthLoadingComponent from './components/AuthLoadingComponent';

const InitStack = createStackNavigator(
  {
    Start: StartComponent,
    SignIn: SignInComponent,
    SignInEmail: SignInEmailComponent,
    FamilyInit: FamilyInitComponent,
    FamilyInitCreate: FamilyInitCreateComponent,
    FamilyInitJoin: FamilyInitJoinComponent
  },
  {
    initialRouteName: 'Start',
    header: null
  }
);

const MainStack = createBottomTabNavigator(
  {
    Home: HomeComponent,
    Chat: ChatComponent,
    Todo: TodoComponent,
    Profile: ProfileComponent
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
    AuthLoading: AuthLoadingComponent,
    Main: MainStack,
    Init: InitStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
));
