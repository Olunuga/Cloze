import React from 'react';
import CollectScreen from '../Section/Collect/CollectScreen';
import { createDrawerNavigator,createBottomTabNavigator,createMaterialTopTabNavigator,createAppContainer, createStackNavigator } from "react-navigation";
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import color from '../Res/color'


const toolbar = ({navigation})=>({
  headerTitle: `${navigation.state.routeName}`,
  headerLeft: <Ionicons style= {{marginLeft:16}} name="ios-menu" size={24} color={color.white} onPress={() => navigation.toggleDrawer()} />,
  headerStyle: {
    backgroundColor: color.primary,
    elevation:0,
    shadowColor: 'transparent',
    borderBottomWidth: 0,
  },
  headerTintColor: color.white,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
})

export default CollectStackNavigator = createStackNavigator({
    Collect : CollectScreen
  },
  {
  defaultNavigationOptions: toolbar
  },
  {
    initialRouteName: 'Collect'
  })