import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'


import HeaderRight from '../../components/HeaderRight'
import HeaderBack from '../../components/HeaderBack'

import Button from '../../components/Button'

const ConfirmedScreen = ({ navigation, route}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (<HeaderRight onPress={() => { navigation.navigate('Wallet') }} />),
            headerLeft: ()=> (<HeaderBack onPress={() => {navigation.goBack()}} />)
        })
    })

    
    return (
        <View style={styles.container}>
            <Text>Confirmed Screen</Text>
            <Button text="Go to Success page"  onPress={() => { navigation.push('Success')}} />
        </View>
    )
}

export default ConfirmedScreen

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }
  })