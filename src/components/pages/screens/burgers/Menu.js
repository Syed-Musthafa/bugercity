import React, { useLayoutEffect } from 'react'
import { Image, StyleSheet, Text, View, } from 'react-native'

import Background from '../../components/Background'
import HeaderRight from '../../components/HeaderRight'
import HeaderBack from '../../components/HeaderBack'
import Title from '../../components/Title'
import Cell from '../../components/Cell'
import Button from '../../components/Button'
import GroupButton from '../../components/GroupButton'
import { icons, images } from '../../../exports'

const Menu = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (<HeaderRight onPress={() => { navigation.navigate('Wallet') }} />),

            headerLeft: () => (<HeaderBack onPress={() => { navigation.goBack() }} />)
        })
    })

    const categories = [
        {
            id: 1,
            name: 'Ala cater & value meals',
            image: images.alacater
        },
        {
            id: 2,
            name: 'Salads/sides',
            image: images.salad
        },
        {
            id: 3,
            name: 'Dessets',
            image: images.dessets
        },
        {
            id: 4,
            name: 'Beverages',
            image: images.beverage
        },

    ]

    const _renderItem = (item, index) => {
        return (
            <Text key={item.id} style={{ fontSize: 15, lineHeight: 20 }}>{item.name}</Text>
        )
    };


    const _renderCategory = (item, index) => {
        return (
            <View
                key={index}
                style={{
                    margin: 12,
                    width: 146,
                    height: 146,
                    borderRadius: 6,
                    backgroundColor: '#ffffff',
                    shadowColor: '#000000',
                    shadowOffset: { width: 2, height: 2, },
                    shadowOpacity: 0.1,
                    shadowRadius: 6,
                    elevation: 5,
                }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                    <View style={{ height: 90, justifyContent: 'flex-end' }}>
                        <Image source={item.image} resizeMode="contain" style={{ width: 80, height: 80 }} />
                    </View>
                    <View style={{ width: 70, paddingTop: 18 }}>
                        <Text style={{color:'#000000', fontSize:12, fontWeight:'bold', lineHeight:16}}>{item.name}</Text>

                    </View>
                </View>
            </View>
        )
    }

    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.addressView}>
                    <Title
                        title="Delivery Address"
                        subTitle="No, 02, 6th LAne Colombo 03"
                        titleColor="#FFFFFF"
                        subTitleColor="#FF9F1C"
                    >

                    </Title>
                </View>
                <View style={styles.dateTimeView}>
                    <Title
                        title="Delivery Date & Time"
                        subTitle="19 /03 / 2022 5: 00: 45 PM"
                        titleColor="#FFFFFF"
                        subTitleColor="#FF9F1C"
                    ></Title>
                </View>
                <View style={styles.category}>
                    {
                        categories.map((category, index) => {
                            return _renderCategory(category, index);
                        })
                    }

                </View>
                <View style={{ marginLeft:20, marginRight:20, marginTop:5}}>
                <Button text= "Secret Menu" onPress={() => {navigation.push('Burgers')} } />
                </View>
            </View>
        </Background>
    )
}

export default Menu

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    addressView: {
        height: 115,
        backgroundColor: '#1D2126'
    },
    dateTimeView: {
        height: 85,
        backgroundColor: '#1C272E'
    },
    category: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    }
})
