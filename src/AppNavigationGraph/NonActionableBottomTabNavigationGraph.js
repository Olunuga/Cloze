import React from 'react';
import CollectScreen from '../Section/Collect/CollectScreen';
import { createDrawerNavigator,createBottomTabNavigator,createMaterialTopTabNavigator,createAppContainer, createStackNavigator } from "react-navigation";
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import FocusScreen from '../Section/Focus/FocusScreen';
import color from '../Res/color';



const NonActionableStackNavigator = createStackNavigator({
  NonActionable : FocusScreen
},{
defaultNavigationOptions: ({navigation})=>({
  headerTitle:'Non Actionable',
  headerLeft: <Ionicons style= {{marginLeft:16}} name="ios-menu" size={24} color={color.white} onPress={() => navigation.toggleDrawer()} />,
  headerStyle: {
    backgroundColor: color.primary
  },
  headerTintColor: color.white,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}),
})

export default NonActionableBottomNavigator = createBottomTabNavigator({
   Someday: NonActionableStackNavigator,
   Reference: NonActionableStackNavigator,
   Trash: NonActionableStackNavigator,
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      switch(routeName){
        case 'Someday':
        iconName = `comment-question${focused ? '' : '-outline'}`;
        break;
        case 'Reference':
        iconName = `folder${focused ? '' : '-outline'}`;
        break;
        case 'Trash':
        iconName = `trash-can${focused ? '' : '-outline'}`;
        break;
      }
      return <MaterialCommunityIcons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: color.primary,
    inactiveTintColor: color.gray,
    labelStyle: {
      fontSize: 12,
      textTransform: 'uppercase'
    },
  },
}
);