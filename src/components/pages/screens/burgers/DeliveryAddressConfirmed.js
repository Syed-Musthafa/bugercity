import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import HeaderLanguageChange from '../../components/HeaderLanguageChange'

import Background from '../../components/Background'
import HeaderRight from '../../components/HeaderRight'
import HeaderBack from '../../components/HeaderBack'
import Title from '../../components/Title'
import Cell from '../../components/Cell'
import Button from '../../components/Button'
import GroupButton from '../../components/GroupButton'

import { COLORS, FONTS, SIZES, icons, images, data, } from '../../../exports'

const addressSample = [
    {
        id: 1,
        name: 'No, 02, 6th LAne Colombo 03',
        icon: icons.pencil,

    },

];

const dateTimeSample = [
    {
        id: 1,
        name: '19/03/2022 5:00:45',
        icon: icons.schedule,

    },

]

const DeliveryAddressConfirmed = ({ navigation, route }) => {

    const [data, setData] = useState(addressSample)
    const [dataTime, setDataTime] = useState(dateTimeSample)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (<HeaderRight onPress={() => { navigation.navigate('Wallet') }} />),

            headerLeft: () => (<HeaderBack onPress={() => { Alert.alert('do something') }} />)
        })
    })

    const _renderItem = (item, index) => {
        return (
            <Text key={item.id} style={{ fontSize: 15, lineHeight: 20 }}>{item.name}</Text>
        )
    };

    const _onItemClick = (item, index) => {
        let temp = [];
        data.map((entry, idx) => {
            if (idx === index) {
                entry.selected = true;
                temp.push(entry);
            } else {
                entry.selected = false;
                temp.push(entry);
            }
        });
        setData(temp);
    };

    const buttons = [
        {
            activated: false,
            text: 'Order Now',
            onPress: () => {navigation.push('DeliveryAddress') },
        },
        {
            activated: true,
            text: 'Order in Advance',
            onPress: () => { },
        },
    ]






    return (
        <Background>
            <View style={styles.container}>
                <Title subTitle="To Proceed, please confirm your delivery details" />
                <GroupButton activeColor='#FF9F1c' buttons={buttons} ></GroupButton>
                <Title title="Delivery Address" ></Title>
                <Cell data={data} renderItem={_renderItem} onPress={() => Alert.alert('Go to Change Address Screen')}></Cell>

                <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                    <Button text="Proceed to Order" style={{ backgroundColor: '#000000' }} onPress={() => { navigation.push('DeliveryAddressConfirmed') }} />
                </View>
                <Title title="Delivery date & Time " subTitle="Please select delivery Date & Time" ></Title>
                <Cell data={dataTime} renderItem={_renderItem} onPress={() => Alert.alert('Go to Change Address Screen')}></Cell>

                <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                    <Button text="Change Address"  onPress={() => { Alert.alert('Go to Change Address Screen') }} />
                </View>

            </View>
        </Background>
    )
}

export default DeliveryAddressConfirmed

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },

})