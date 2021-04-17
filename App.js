import React , { useState, useEffect} from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './src/components/navigation/TabNavigator'

import { COLORS, FONTS, SIZES, icons, images, data,  } from './src/components/exports'


import Onboarding from './src/components/pages/screens/Onboarding';
import Login from './src/components/pages/screens/Login';
import ForgetPassword from './src/components/pages/screens/ForgetPassword';
import Otp from './src/components/pages/screens/Otp';
import MobileNumber from './src/components/pages/screens/MobileNumber';


const App = () => {



 
  
  return (
    <NavigationContainer style={styles.container}>
    <StatusBar translucent backgroundColor={COLORS.primary} />
      <TabNavigator />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
