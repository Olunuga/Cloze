import React from 'react';
import { StyleSheet, Text, View , Platform} from 'react-native';
import { createDrawerNavigator,createMaterialTopTabNavigator,createAppContainer, createStackNavigator } from "react-navigation";
import ProjectScreen from './Section/Project/ProjectScreen';
import ResponsibilityScreen from './Section/Responsibility/ResponsibiltyScreen';
import RunwayScreen from './Section/Runway/RunwayScreen';
import { Ionicons } from '@expo/vector-icons';
import NavigationMenu from './Common/NavigationMenu';


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
      backgroundColor: '#f4511e',
    },
  }
});

const GoalsStackNavigator = createStackNavigator({
    Goals : GoalsTopNavigator
  },{
  defaultNavigationOptions: ({navigation})=>({
    headerTitle:'Goals',
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

const MyDrawerNavigator = createDrawerNavigator({
  Runway:RunwayScreen,
  Projects:ProjectScreen,
  Responsibilty: ResponsibilityScreen,
  Goals:GoalsStackNavigator
},
{
  contentComponent: NavigationMenu,
  drawerType:'slide'
}
);

const AppContainer = createAppContainer(MyDrawerNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
