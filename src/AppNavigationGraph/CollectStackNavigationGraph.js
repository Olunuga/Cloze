import React from 'react';
import CollectScreen from '../Section/Collect/CollectScreen';
import { createDrawerNavigator,createBottomTabNavigator,createMaterialTopTabNavigator,createAppContainer, createStackNavigator } from "react-navigation";
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';


export default CollectStackNavigator = createStackNavigator({
    Collect : CollectScreen
  },{
  defaultNavigationOptions: ({navigation})=>({
    headerTitle:'Collect',
    headerLeft: <Ionicons style= {{marginLeft:16}} name="ios-menu" size={24} color="white" onPress={() => navigation.toggleDrawer()} />,
    headerStyle: {
      backgroundColor: '#f4511e',
      elevation:0,
      shadowColor: 'transparent',
      borderBottomWidth: 0,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }),
  })