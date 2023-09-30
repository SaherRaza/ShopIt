import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './src/components/BottomTab';
import {Provider} from "react-redux"
import store from './src/context/store';
import ProductDetailsScreen from './src/components/ProductDetailsScreen';
const Stack = createNativeStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
     <Provider store={store}>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="Product Details" component={ProductDetailsScreen}/>
      </Stack.Navigator>
     </Provider>
    </NavigationContainer>
  )
}

export default App