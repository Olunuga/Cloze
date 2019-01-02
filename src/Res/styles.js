import {StyleSheet,Platform } from 'react-native';
import color from './color';

export const NavigationStyles = StyleSheet.create({
  container:{
     
  },
  menuGroup:{
      borderTopWidth: 0.5,
      borderTopColor: color.white70,
      backgroundColor: color.white,
      paddingTop:5,
      paddingBottom:16,
      marginBottom:10
  },

  menuGroupLabel:{
     color: color.gray,
     paddingLeft: 16,
     paddingBottom: 5,
     paddingTop: 5,
     paddingRight: 16
  },
  menuItem:{
      paddingLeft:16,
      paddingRight:16,
      backgroundColor: color.white,
      height:50,
      flex:1,
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'center'
  },
  MenuItemSelected:{
      backgroundColor: color.primaryLight,
      paddingLeft:16,
      paddingRight:16,
      fontSize:20,
      height:50,
      flex:1,
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'center'
  },

  menuItemText:{
      fontSize:14,
      color: color.black70
  },

  menuItemtextSelected:{
      fontSize:16,
      color: color.black
  },
})