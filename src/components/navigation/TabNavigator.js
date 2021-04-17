import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { COLORS, FONTS, SIZES, icons, images, data, } from './../exports'

// import HomeScreen from '../../components/pages/screens/home'
// import BurgersScreen from '../../components/pages/screens/burgers'
// import FavouritesScreen from '../../components/pages/screens/favourites'
// import TrackScreen from '../../components/pages/screens/track'
// import PaymentScreen from '../../components/pages/screens/wallet/Payment'

import HomeStack from './HomeStack'
import BurgersStack from './BurgersStack'
import FavouritesStack from './FavouritesStack'
import TrackStack from './TrackStack'
import WalletStack from './WalletStack'



const Tab = createBottomTabNavigator();

const TabNavigator = ({ params }) => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#ffffff',
                inactiveTintColor: '#606060',
            }}>
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={icons.homebar}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: focused ? COLORS.primary : COLORS.black
                            }}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Burgers"
                component={BurgersStack}
                options={{
                    tabBarLabel: "Burgers",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={icons.insta}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.black
                            }}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Favourites"
                component={FavouritesStack}
                options={{
                    tabBarLabel: "Favourites",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={icons.star}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.black
                            }}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Track"
                component={TrackStack}
                options={{
                    tabBarLabel: "Track",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={icons.pin}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.black
                            }}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Wallet"
                component={WalletStack}
                options={{
                    tabBarLabel: "Wallet",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={icons.email}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.black
                            }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({})
