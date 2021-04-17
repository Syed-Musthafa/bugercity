import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../components/pages/screens/home'
import HeaderTitle from '../pages/components/HeaderTitle'

const Stack = createStackNavigator();

const HomeStack = ({ params }) => {



    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen}
            options={{headerTitle: props => <HeaderTitle />}}
             />
           
        </Stack.Navigator>
    )
}

export default HomeStack

const styles = StyleSheet.create({})
