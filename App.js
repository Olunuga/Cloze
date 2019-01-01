import React from 'react';
import { StyleSheet, Text, View , Button, Icon} from 'react-native';
import { createDrawerNavigator,createMaterialTopTabNavigator,createAppContainer, createStackNavigator } from "react-navigation";
import ProjectScreen from './Section/Project/ProjectScreen';
import ResponsibilityScreen from './Section/Responsibility/ResponsibiltyScreen';
import GoalsScreen from './Section/Goal/GoalsScreen';
import { Ionicons } from '@expo/vector-icons';


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


const RunwayTopNavigator = createMaterialTopTabNavigator({
  Work: HomeScreen,
  Personal: SettingsScreen,
},{
  tabBarOptions: {
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: '#f4511e',
    },
  }
});

const RunwayStackNavigator = createStackNavigator({
    Runway : RunwayTopNavigator
  },{
  defaultNavigationOptions: ({navigation})=>({
    headerTitle:'Runway',
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
  Runway:RunwayStackNavigator,
  Projects:ProjectScreen,
  Responsibilty: ResponsibilityScreen,
  Goals:GoalsScreen
},
{
  drawerType:'slide'
}
);

const AppContainer = createAppContainer(MyDrawerNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
