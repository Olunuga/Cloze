import React from 'react';
import CollectScreen from '../Section/Collect/CollectScreen';
import { createDrawerNavigator,createBottomTabNavigator,createMaterialTopTabNavigator,createAppContainer, createStackNavigator } from "react-navigation";
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import FocusScreen from '../Section/Focus/FocusScreen';
import CalenderScreen from '../Section/Focus/CalenderScreen';



    //Todo: change this to Next actions Navigator
    const FocusStackNavigator = createStackNavigator({
      Focus : FocusScreen
    },{
    defaultNavigationOptions: ({navigation})=>({
      headerTitle:'Focus',
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

    const CalenderStackNavigator = createStackNavigator({
      Calender : CalenderScreen
    },{
    defaultNavigationOptions: ({navigation})=>({
      headerTitle:'Calender',
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

    //Todo: Add waiting for Navigator

    export default FocusBottomNavigator = createBottomTabNavigator({
      'Next Action': FocusStackNavigator,
      Calender: CalenderStackNavigator,
      'Waiting For': FocusStackNavigator,
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          switch(routeName){
            case 'Next Action':
            iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
            break;
            case 'Calender':
            iconName = `clipboard-text${focused ? '' : '-outline'}`;
            return <MaterialCommunityIcons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
            break;
            case 'Waiting For':
            iconName = `people${focused ? '' : '-outline'}`;
            return <MaterialIcons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
            break;
          }
          return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 12,
          textTransform: 'uppercase'
        },
      },
    }
    );