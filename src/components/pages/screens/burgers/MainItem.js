import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View, Alert, Image, TouchableOpacity } from 'react-native'
import HeaderLanguageChange from '../../components/HeaderLanguageChange'

import Background from '../../components/Background'
import HeaderRight from '../../components/HeaderRight'
import HeaderBack from '../../components/HeaderBack'
import Title from '../../components/Title'
import Cell from '../../components/Cell'
import Button from '../../components/Button'
import Card from '../../components/Card'


import { COLORS, FONTS, SIZES, icons, images, data, } from '../../../exports'

const includes = [
    {
        id: 1,
        name: 'Enter your prome Code',
      
    },
   
]

const condiments = [
    {
        id: 1,
        name: 'Select Your Condiments ',
      
    },
   
]

const MainItem = ({ navigation, route }) => {

    
    const [count, setCount] = useState(1)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (<HeaderRight onPress={() => { navigation.navigate('Wallet') }} />),
            headerLeft: () => (<HeaderLanguageChange onPress={() => { Alert.alert('do something') }} />)
        })
    })

    const _renderItem = (item, index) => {
        return (
            <View key={index} style={{ height: 65, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
               
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text key={item.id} style={{ fontSize: 15, lineHeight: 20 }}>{item.name}</Text>
                </View>


            </View>
        )
    };

    const _onItemClick = (item, index) => {
     
    }




    return (
        <Background>
            <View style={styles.container}>
            <View style={styles.totalView}>
                    <View style={styles.textView}>
                        <Text style={styles.totalText}> sub Total (1 item)</Text>
                        <Text style={styles.priceText}> 520 SAR</Text>

                    </View>
                </View>

                <Card />
              
               
                <Title
                    title='Includes'
                />
                <View style={{ marginTop: 8 }}>
                    <Cell data={includes} renderItem={_renderItem} onPress={_onItemClick} />
                </View>
                <Title
                    title='Condiments'
                />
                <View style={{ marginTop: 8 }}>
                    <Cell data={condiments} renderItem={_renderItem} onPress={_onItemClick} />
                </View>
                <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                    <Button text="Check out" onPress={() => { navigation.navigate('FullItems') }} />
                </View>
            </View>


        </Background>
    )
}

export default MainItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
       

    },
    totalView:{
        height: 90,
        justifyContent:'center',
        backgroundColor:'#000',
    },
    textView:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginLeft:20,
        marginRight:20
    },
    totalText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:20,
        lineHeight:24,
    },
    priceText:{
        color:'#ff9f1c',
        fontWeight:'bold',
        fontSize:15,
        lineHeight:20,
    },
})