import React from 'react';
import { StyleSheet, Text, View , Platform} from 'react-native';
import CollectScreen from '../Section/Collect/CollectScreen';
import { createDrawerNavigator,createBottomTabNavigator,createMaterialTopTabNavigator,createAppContainer, createStackNavigator } from "react-navigation";
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import color from '../Res/color';



class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}


const GoalsTopNavigator = createMaterialTopTabNavigator({
  Work: HomeScreen,
  Personal: SettingsScreen,
},{
  swipeEnabled: Platform.OS == 'ios'? false:true,
  tabBarOptions: {
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: color.primary,
    },
  }
});

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

export default GoalsStackNavigator = createStackNavigator({
    Goals : GoalsTopNavigator
  },{
  defaultNavigationOptions: toolbar
})
