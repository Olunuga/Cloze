import React from 'react';
import CollectScreen from '../Section/Collect/CollectScreen';
import { createDrawerNavigator,createBottomTabNavigator,createMaterialTopTabNavigator,createAppContainer, createStackNavigator } from "react-navigation";
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import FocusScreen from '../Section/Focus/FocusScreen';
import CalenderScreen from '../Section/Focus/CalenderScreen';
import color from '../Res/color';



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

  
    const NextActionStackNavigator = createStackNavigator({
      'Next Action' : FocusScreen
    },
    {
    defaultNavigationOptions: toolbar
    },
    {
      initialRouteName: 'Next Action'
    }
    )

    const WaitingForStackNavigator = createStackNavigator({
      'Waiting For' : FocusScreen
    },
    {
    defaultNavigationOptions: toolbar
    },
    {
      initialRouteName: 'Waiting For'
    }
    )

    const CalenderStackNavigator = createStackNavigator({
      Calender : CalenderScreen
    },
    {
    defaultNavigationOptions: toolbar
    },{
      initialRouteName: 'Calender'
    }
    )

  

    export default FocusBottomNavigator = createBottomTabNavigator({
      'Next Action': NextActionStackNavigator,
      Calender: CalenderStackNavigator,
      'Waiting For': WaitingForStackNavigator,
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
        activeTintColor: color.primary,
        inactiveTintColor: color.gray,
        labelStyle: {
          fontSize: 12,
          textTransform: 'uppercase'
        },
      },
    }
    );