import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View, Alert, Image, TouchableOpacity, ScrollView } from 'react-native'
import HeaderLanguageChange from '../../components/HeaderLanguageChange'

import Background from '../../components/Background'
import HeaderRight from '../../components/HeaderRight'
import HeaderBack from '../../components/HeaderBack'
import Title from '../../components/Title'
import Cell from '../../components/Cell'
import Button from '../../components/Button'
import Card from '../../components/Card'


import { COLORS, FONTS, SIZES, icons, images, data, } from '../../../exports'

const remarks = [
    {
        id: 1,
        name: 'Eg, More Ketchup; more Drinkings straws',

    },

]

const condiments = [
    {
        id: 1,
        name: 'Select Your Condiments ',

    },

]

const FullItems = ({ navigation, route }) => {


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
            <ScrollView style={styles.container}>
                <View style={styles.summaryView}>
                    <View style={{ margin: 20 }}>
                        <Text style={styles.title}>Review & Confirms</Text>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={styles.itemText}>Summary</Text>
                        </View>
                        <View style={styles.itemView}>
                            <Text style={styles.itemText}>Subtotal</Text>
                            <Text style={styles.priceText}>520 SAR</Text>
                        </View>
                        <View style={styles.itemView}>
                            <Text style={styles.itemText}>Delivery Charge</Text>
                            <Text style={styles.priceText}>50 SAR</Text>
                        </View>
                        <View style={styles.itemView}>
                            <Text style={styles.itemText}>Promo Code Discount (10%)</Text>
                            <Text style={styles.priceText}>52 SAR</Text>
                        </View>

                    </View>
                </View>



                <View style={styles.totalView}>
                    <View style={{ margin:20}}>
                        <View style={styles.itemView}>
                            <Text style={styles.itemText}>Total</Text>
                            <Text style={[styles.priceText, { fontSize: 18}]}>518 SAR</Text>
                        </View>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={[styles.itemText, { color:'#ffffff', fontSize:12}]}>Total (includes VAT) </Text>
                        </View>
                    </View>
                </View>







                <View style={{ paddingTop: 18 }}></View>
        
                <View style={styles.addressView}>
                    <View style={{ margin:20}}>
                        <Text style={styles.title}>Delivery By</Text>
                        <Text style={styles.itemText}>19 / 03 / 2022 06:30:00 PM</Text>
                        <Text style={[styles.itemText, {color:'#FFFFFF'}]}>No. 02 6th Lane, Colombo 03</Text>
                    </View>
                </View>

                <Title
                    title='Remarks'
                />
                <View style={{ marginTop: 8 }}>
                    <Cell data={remarks} renderItem={_renderItem} onPress={_onItemClick} />
                </View>


                <Card />


               
                <Title
                    title='Condiments'
                />
                <View style={{ marginTop: 8 }}>
                    <Cell data={condiments} renderItem={_renderItem} onPress={_onItemClick} />
                </View>
                <View style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                    <Button text="Confirm" onPress={() => navigation.navigate('Wallet')} />
                </View>
            </ScrollView>


        </Background>
    )
}

export default FullItems

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    summaryView: {
        height: 190,
        backgroundColor: '#1d2126',
        justifyContent: 'flex-start',

    },
    title: {
        color: '#FFFFFF',
        fontSize: 18,
        lineHeight: 24,
        fontWeight: 'bold',
    },
    itemView: {
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',

    },
    itemText: {
        color: '#FF9F1C',
        fontSize: 15,
        lineHeight: 20,
        fontWeight: 'bold',
    },
    priceText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 20,
    },


    totalView: {
        height: 70,
        justifyContent: 'center',
        backgroundColor: '#11191E',
    },
    textView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20
    },
    totalText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 24,
    },
    addressView:{
        height: 90,
        backgroundColor:'#000000',
        justifyContent: 'center',
    }
})