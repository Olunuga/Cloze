import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import { createStackNavigator, createDrawerNavigator,createAppContainer } from "react-navigation";

export default class ProjectScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Projects'
    };
  
    render() {
      return (
        <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}> 
        <Button
          onPress={() => this.props.navigation.navigate('Runway')}
          title="Go to Runway"
        />
        </View>
      );
    }
  }