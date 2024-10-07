import React  from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Image } from "react-native";
import Home from '../../screens/homeScreen';
import Account from '../../screens/accountScreen';
import Favourite from '../../screens/favouriteScreen';
import MenuScreen from '../../screens/menuScreen';
import Icons from '../../assets';
import { Component } from 'react';

import { ScreenNames } from '../screenNames';

const Tab = createBottomTabNavigator();
export default class BottomTab extends Component{
    render(){
        return(
            <Tab.Navigator 
            screenOptions={({route}) =>({
                tabBarIcon:({ focused,color,size}) =>{
                    let iconName ;
                   
                    switch (route.name) {
                        case ScreenNames.Home:
                            iconName = focused ? Icons.homeicon : Icons.home3;
                            break;
                        case ScreenNames.Account:
                            iconName = focused ? Icons.accountSelected : Icons.account;
                            break;
                        case ScreenNames.Favourite:
                            iconName = focused ? Icons.star : Icons.favourites;
                            break;
                        case ScreenNames.Menu:
                            iconName = focused ? Icons.menuSelected : Icons.menu;
                            break;
                        default:
                            iconName = Icons.homeicon;
                            break;
                    }
                   return <Image
                   source = {iconName}
                   style = {{width:20,height:20,}}/>
                }
            })}>
                <Tab.Screen
                component={Home}
                name={ScreenNames.Home}
                options={{headerShown:false}}
                />
                <Tab.Screen
                component={Account}
                name= {ScreenNames.Account}
                options={{headerShown:false}}
                />
                <Tab.Screen
                component={Favourite}
                name={ScreenNames.Favourite}
                options={{headerShown:false}}
                />
                <Tab.Screen
                component={MenuScreen}
                name={ScreenNames.Menu}
                options={{headerShown:false}}
                />
            </Tab.Navigator>
        )
    }
}