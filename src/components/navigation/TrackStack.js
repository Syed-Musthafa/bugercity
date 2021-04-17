import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import TrackScreen from '../../components/pages/screens/track'
import HeaderTitle from '../pages/components/HeaderTitle'

const Stack = createStackNavigator();

const TrackStack = ({ params }) => {



    return (
        <Stack.Navigator>
            <Stack.Screen name="Track" component={TrackScreen}
            options={{headerTitle: props => <HeaderTitle />}}

            />

           
        </Stack.Navigator>
    )
}

export default TrackStack

const styles = StyleSheet.create({})