import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'


import HeaderRight from '../../components/HeaderRight'
import HeaderBack from '../../components/HeaderBack'

const SuccessScreen = ({ navigation, route }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (<HeaderRight onPress={() => { navigation.navigate('Wallet') }} />),
            headerLeft: ()=> (<HeaderBack onPress={() => {navigation.goBack()}} />)
        })
    })

    return (
        <View style={styles.container}>
            <Text>Success Screen</Text>
        </View>
    )
}

export default SuccessScreen

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }
  })