import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import HomeComponent from "./components/HomeComponent";
import ChatComponent from "./components/ChatComponent";
import SignInComponent from "./components/SignInComponent";
import ProfileComponent from "./components/ProfileComponent";
import TodoComponent from "./components/TodoComponent";

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

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
