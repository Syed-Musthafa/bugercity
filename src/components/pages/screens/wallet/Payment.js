import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'


import HeaderRight from '../../components/HeaderRight'
import HeaderBack from '../../components/HeaderBack'

import Button from '../../components/Button'

const PaymentScreen = ({ navigation, route}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (<HeaderRight onPress={() => { navigation.navigate('Wallet') }} />),
            headerLeft: ()=> (<HeaderBack onPress={() => {navigation.navigate('Home')}} />)
        })
    })
    
    return (
        <View style={styles.container}>
            <Text>Payment Screen</Text>
            <Button text="Go to Confirmed page"  onPress={() => { navigation.push('Confirmed')}} />
        </View>
    )
}

export default PaymentScreen

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }
  })