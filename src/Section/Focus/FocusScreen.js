import React from 'react';
import {View , Button} from 'react-native';
import {createDrawerNavigator,createAppContainer } from "react-navigation";

export default class FocusScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Focus'
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