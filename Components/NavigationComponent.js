
import React from 'react';
import { Text, View , TouchableOpacity} from 'react-native';
import {NavigationStyles} from '../Res/styles';

export class MenuItem extends React.Component{
    constructor(props) {
        super(props)
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() { 
        this.props.handleOnClick(this.props.open,this.props.menuId);
    }


    render () {
        return (
        <TouchableOpacity onPress={this.handleOnClick}>
            <View style={this.props.selected? NavigationStyles.MenuItemSelected: NavigationStyles.menuItem}>
                {this.props.icon}
                {this.props.children}
                <Text style={this.props.selected? NavigationStyles.menuItemtextSelected: NavigationStyles.menuItemText}>{this.props.label}</Text>
            </View>
       </TouchableOpacity>
       )
    }
}


export class MenuGroup extends React.Component{
    render () {
        return (
           <View style={NavigationStyles.menuGroup}>
           <Text style={NavigationStyles.menuGroupLabel}>{this.props.label}</Text>
           {this.props.children}
           </View>
        )
    }
}
