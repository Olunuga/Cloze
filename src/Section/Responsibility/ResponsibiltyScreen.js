import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import { createStackNavigator, createDrawerNavigator,createAppContainer } from "react-navigation";

export default class ResponsibilityScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Responsibilities'
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      );
    }
  }