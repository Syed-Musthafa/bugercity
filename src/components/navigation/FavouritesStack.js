import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import FavouritesScreen from '../../components/pages/screens/favourites'
import HeaderTitle from '../pages/components/HeaderTitle'

const Stack = createStackNavigator();

const FavouritesStack = ({ params }) => {



    return (
        <Stack.Navigator>
            <Stack.Screen name="Favourites" component={FavouritesScreen} 
                options={{headerTitle: props => <HeaderTitle />}}
            />
           
        </Stack.Navigator>
    )
}

export default FavouritesStack

const styles = StyleSheet.create({})