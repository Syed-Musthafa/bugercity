import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import OrderMethodScreen from '../../components/pages/screens/burgers/OrderMethod'
import DeliveryAddress from '../../components/pages/screens/burgers/DeliveryAddress'
import DeliveryAddressConfirmed from '../../components/pages/screens/burgers/DeliveryAddressConfirmed'
import Menu from '../../components/pages/screens/burgers/Menu'
import Burgers from '../../components/pages/screens/burgers/Burgers'
import SelectItem from '../../components/pages/screens/burgers/SelectItem'
import Choice from '../../components/pages/screens/burgers/Choice'
import AddToCard from '../../components/pages/screens/burgers/AddToCard'
import MainItem from '../../components/pages/screens/burgers/MainItem'
import FullItems from '../../components/pages/screens/burgers/FullItems'







import HeaderTitle from '../pages/components/HeaderTitle'

const Stack = createStackNavigator();

const BurgersStack = ({ params }) => {



    return (
        <Stack.Navigator initialRouteName="OrderMethodScreen">
            <Stack.Screen name="OrderMethodScreen" component={OrderMethodScreen}
                options={{ headerTitle: props => <HeaderTitle /> }}
            />

            <Stack.Screen name="DeliveryAddress" component={DeliveryAddress}
                options={{ headerTitle: props => <HeaderTitle /> }}
            />

            <Stack.Screen name="DeliveryAddressConfirmed" component={DeliveryAddressConfirmed}
                options={{ headerTitle: props => <HeaderTitle /> }}
            />

            <Stack.Screen name="Menu" component={Menu}
                options={{ headerTitle: props => <HeaderTitle /> }}
            />

            <Stack.Screen name="Burgers" component={Burgers}
                options={{ headerTitle: props => <HeaderTitle /> }}
            />

            <Stack.Screen name="SelectItem" component={SelectItem}
                options={{ headerTitle: props => <HeaderTitle /> }}
            />

            <Stack.Screen name="Choice" component={Choice}
                options={{ headerTitle: props => <HeaderTitle /> }}
            />
            <Stack.Screen name="AddToCard" component={AddToCard}
                options={{ headerTitle: props => <HeaderTitle /> }}
            />
            <Stack.Screen name="MainItem" component={MainItem}
                options={{ headerTitle: props => <HeaderTitle /> }}
            />
            <Stack.Screen name="FullItems" component={FullItems}
                options={{ headerTitle: props => <HeaderTitle /> }}
            />
          
           



        </Stack.Navigator>
    )
}

export default BurgersStack

const styles = StyleSheet.create({})
