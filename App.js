import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator, createSwitchNavigator, createStackNavigator } from "react-navigation";
import HomeComponent from "./components/HomeComponent";
import ChatComponent from "./components/ChatComponent";
import SignInComponent from "./components/SignInComponent";
import ProfileComponent from "./components/ProfileComponent";
import TodoComponent from "./components/TodoComponent";
import AuthLoadingComponent from "./components/AuthLoadingComponent";

const AuthStack = createStackNavigator({ SignIn: SignInComponent });

const RootStack = createBottomTabNavigator(
  {
    Home: HomeComponent,
    Chat: ChatComponent,
    Todo: TodoComponent,
    Profile: ProfileComponent
  },
  {
    initialRouteName: "Home"
  }
);

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingComponent,
    App: RootStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
