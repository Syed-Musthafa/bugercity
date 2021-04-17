import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import HeaderTitle from '../pages/components/HeaderTitle'

import PaymentScreen from '../../components/pages/screens/wallet/Payment'
import ConfirmedScreen from '../../components/pages/screens/wallet/Confirmed'
import SuccessScreen from '../../components/pages/screens/wallet/Success'



const WalletStack = ({ params }) => {

    const Stack = createStackNavigator();


    return (
        <Stack.Navigator
        initialRouteName = "Payment"
        >
            <Stack.Screen name="Payment" component={PaymentScreen} 
                options={{headerTitle: props => <HeaderTitle />}}
            />
            <Stack.Screen name="Confirmed" component={ConfirmedScreen} 
                options={{headerTitle: props => <HeaderTitle />}}
            />
            <Stack.Screen name="Success" component={SuccessScreen} 
                options={{headerTitle: props => <HeaderTitle />}}
            />
            
        </Stack.Navigator>
    )
}

export default WalletStack

const styles = StyleSheet.create({})