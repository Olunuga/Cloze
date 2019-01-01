import React from 'react';
import { View , Image, ScrollView, SafeAreaView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {NavigationActions} from 'react-navigation';
import {NavigationStyles} from '../Res/styles';
import {MenuGroup, MenuItem}  from '../Components/NavigationComponent';

export default class NavigationMenu extends React.Component{
    constructor(props) {
        super(props)
        this.navigateToScreen = this.navigateToScreen.bind(this);

        this.state= {
            selectedMenuId:1
        }
    }

    navigateToScreen(route, menuId) { 
        const navigateAction = NavigationActions.navigate({
        routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
        this.state.selectedMenuId = menuId
    }
    
    render () {
        return (
        <SafeAreaView>
            <View style={NavigationStyles.container}>
                <ScrollView>

                   <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}} style={{width: 300, height: 150}} />

                   <MenuGroup label={'Runway'}>
                        <MenuItem 
                        menuId = {1}
                        handleOnClick = {this.navigateToScreen}
                        open = {'Goals'}
                        selected = {this.state.selectedMenuId == 1 ? true:false} 
                        icon = {<Ionicons style= {{marginRight:20}} name="md-create" size={18} color="#f4511e"/>}
                        label = {'Collect'}/>

                       <MenuItem 
                       menuId = {2}
                       handleOnClick = {this.navigateToScreen}
                       open = {'Goals'}
                       selected = {this.state.selectedMenuId == 2 ? true:false} 
                       icon={<Ionicons style= {{marginRight:20}} name="ios-aperture" size={18} color="#f4511e"/>}
                       label = {'Focus'}/>

                       <MenuItem 
                       menuId = {3}
                       handleOnClick = {this.navigateToScreen}
                       open = {'Goals'}
                       selected = {this.state.selectedMenuId == 3 ? true:false} 
                       icon={<Ionicons style= {{marginRight:20}} name="md-albums" size={18} color="#f4511e"/>}
                       label = {'Organise'}/>
                   </MenuGroup>



                   <MenuGroup label={'Take Control'}>
                       <MenuItem 
                       menuId = {4}
                       handleOnClick = {this.navigateToScreen}
                       open = {'Projects'}
                       selected = {this.state.selectedMenuId == 4 ? true:false} 
                       icon={<Ionicons style= {{marginRight:20}} name="ios-briefcase" size={18} color="#f4511e"/>}
                       label = {'Projects'}/>

                       <MenuItem 
                       menuId = {5}
                       handleOnClick = {this.navigateToScreen}
                       open = {'Responsibilty'}
                       selected = {this.state.selectedMenuId == 5 ? true:false} 
                       icon={<Ionicons style= {{marginRight:20}} name="ios-person" size={18} color="#f4511e"/>}
                       label = {'Responsibilities'}/>

                       <MenuItem 
                       menuId = {6}
                       handleOnClick = {this.navigateToScreen}
                       open = {'Goals'}
                       selected = {this.state.selectedMenuId == 6 ? true:false} 
                       icon={<Ionicons style= {{marginRight:20}} name="ios-flag" size={18} color="#f4511e"/>}
                       label = {'Goals'}/>
                   </MenuGroup>


                   <MenuGroup label={'Manage'}>
                       <MenuItem label = {'Context'}/>
                       <MenuItem label = {'Priority'}/>
                   </MenuGroup>

                </ScrollView>
            </View>
        </SafeAreaView>
        );
    }
}

 


   

   
