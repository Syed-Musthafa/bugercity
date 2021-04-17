import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HeaderBack from '../../components/HeaderBack'


import HeaderRight from '../../components/HeaderRight'

const TrackScreen = ({ navigation, route }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (<HeaderRight onPress={() => { navigation.navigate('Wallet') }} />),
            headerLeft: ()=> (<HeaderBack onPress={() => {navigation.navigate('Home')}} />)
        })
    })

    return (
        <View style={styles.container}>
            <Text>Track Screen</Text>
        </View>
    )
}

export default TrackScreen

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }
  })