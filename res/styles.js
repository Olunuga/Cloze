import {StyleSheet,Platform } from 'react-native';

export const NavigationStyles = StyleSheet.create({
  container:{
      marginTop: Platform.OS == 'Ios'? 0:24
  },
  menuGroup:{
      borderTopWidth: 0.5,
      borderTopColor:'#cccccc',
      backgroundColor:'white',
      paddingTop:5,
      paddingBottom:16,
      marginBottom:10
  },

  menuGroupLabel:{
     color:'gray',
     paddingLeft:16,
     paddingBottom:5,
     paddingTop:5,
     paddingRight:16
  },
  menuItem:{
      paddingLeft:16,
      paddingRight:16,
      backgroundColor:'white',
      height:50,
      flex:1,
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'center'
  },
  MenuItemSelected:{
      backgroundColor:'#feece7',
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
      fontSize:16,
      color:'#525252'
  },

  menuItemtextSelected:{
      fontSize:16,
      color:'#000000'
  },
})