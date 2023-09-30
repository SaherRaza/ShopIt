import React from 'react'
import {
  StyleSheet, TouchableOpacity, Image, Text,
  View,
} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Entypo,Ionicons, MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import HomeScreen from "../screens/HomeScreen";
import FavoriteItem from "../screens/FavoriteItem";
import CartScreen from '../screens/CartScreen';
import ProductDetailsScreen from './ProductDetailsScreen';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
    const screenOptions = {
        headerShown: true,
    };
    return (
        <HomeStack.Navigator screenOptions={screenOptions}>
            <HomeStack.Screen name="Home" component={HomeScreen} /> 
        </HomeStack.Navigator>
    );
}


const FavoriteStack = createNativeStackNavigator();

function FavoriteStackScreen() {
    const screenOptions = {
        headerShown: true,
        tabBarHideOnKeyboard: true
    };
    return (
        <FavoriteStack.Navigator screenOptions={screenOptions}>
            <FavoriteStack.Screen name="Favorites" component={FavoriteItem} />
        </FavoriteStack.Navigator>
    );
}

const CartStack = createNativeStackNavigator();

function CartStackScreen() {
    const screenOptions = {
        headerShown: true,
        tabBarHideOnKeyboard: true
    };
    return (
        <CartStack.Navigator screenOptions={screenOptions}>
            <CartStack.Screen name="Cart Items" component={CartScreen} />
        </CartStack.Navigator>
    );
}



const Tab = createBottomTabNavigator();

function BottomTab() {


    return (
        <Tab.Navigator

            screenOptions={{
                tabBarActiveTintColor:"#000080",
                tabBarInactiveTintColor:"gray",
                lazy: false,
                tabBarStyle: {
                    // justifyContent: 'space-evenly',
                    // backgroundColor: "#F1F1F1",
                     width: wp("100%"),
                    // alignSelf: "center",
                     height: hp("10%"),
                    // bottom: 0,
                },
                headerShown: false,
                tabBarHideOnKeyboard: true,
            }}
        >

<Tab.Screen
        name="HomeScreen"
        component={HomeStackScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Entypo name="home" color={color} size={24} />
          ),
        }}
      />

<Tab.Screen
        name="FavoriteScreen"
        component={FavoriteStackScreen}
        options={{
          tabBarLabel: '',
        //   tabBarLabelPosition:"below-icon",
        //   tabBarLabelStyle:{fontSize:11, top:-9},
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="favorite" size={24} color={color} />
          ),
        }}
      />

<Tab.Screen
        name="CartScreen"
        component={CartStackScreen}
        options={{
          tabBarLabel: '',
        //   tabBarLabelPosition:"below-icon",
        //   tabBarLabelStyle:{fontSize:11, top:-9},
          tabBarIcon: ({ color }) => (
            <Entypo name="shopping-cart" size={24} color={color} />
          ),
        }}
      />

        



        </Tab.Navigator>
    );
}



const styles = StyleSheet.create({
    TabContainer: {
        flexDirection: "row",
        marginHorizontal: 20,
        justifyContent: "space-evenly",
        backgroundColor: "#272E34",
        width: wp("100%"),
        alignSelf: "center",
        height: hp("10%"),
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,

    },
    iconStyle: {
        marginBottom: 3,
        alignSelf: "center",
        width: 22,
        height: 22,
        justifyContent: "center",
        alignItems: "center",
    },
    textStyle: {
        color: "#6C8193",
        textAlign: "center",
        fontSize: 10,
        alignItems:"center"
    }
})


export default BottomTab;