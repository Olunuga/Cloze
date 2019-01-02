import React from 'react';
import { StyleSheet, Text, View , Platform} from 'react-native';
import { createDrawerNavigator,createBottomTabNavigator,createMaterialTopTabNavigator,createAppContainer, createStackNavigator } from "react-navigation";
import ProjectScreen from '../Section/Project/ProjectScreen';
import ResponsibilityScreen from '../Section/Responsibility/ResponsibiltyScreen';

import CollectStackNavigator from './CollectStackNavigationGraph';
import FocusBottomNavigator from './FocusBottomTabNavigationGraph';
import NonActionableBottomNavigator from './NonActionableBottomTabNavigationGraph';
import GoalsStackNavigator from './GoalStackNavigationGraph';

import NavigationMenu from '../Components/DrawerNavigationMenu';
  
  
  const MyDrawerNavigator = createDrawerNavigator({
    Collect:CollectStackNavigator,
    Focus:FocusBottomNavigator,
    NonActionable:NonActionableBottomNavigator,
    Projects:ProjectScreen,
    Responsibilty: ResponsibilityScreen,
    Goals:GoalsStackNavigator
  },
  {
    contentComponent: NavigationMenu,
    drawerType:'slide'
  }
  );
  
  export default createAppContainer(MyDrawerNavigator);