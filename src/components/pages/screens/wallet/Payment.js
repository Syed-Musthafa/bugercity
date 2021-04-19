import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'


import HeaderRight from '../../components/HeaderRight'
import HeaderBack from '../../components/HeaderBack'

import Button from '../../components/Button'
import Background from '../../components/Background'
import Title from '../../components/Title'
import Cell from '../../components/Cell'

import { COLORS, FONTS, SIZES, icons, images, data, } from '../../../exports'


const methods = [
    {
        id: 1,
        name: 'E - wallet',
        selected: false,
        icon: icons.unselected,
        activeIcon: icons.selected,
    },
    {
        id: 2,
        name: ' Cash on Delivery',
        selected: true,
        icon: icons.unselected,
        activeIcon: icons.selected,
    },
    {
        id: 3,
        name: 'Google Pay',
        selected: false,
        icon: icons.unselected,
        activeIcon: icons.selected,
    },
    {
        id: 4,
        name: 'Phone Pay',
        selected: false,
        icon: icons.unselected,
        activeIcon: icons.selected,
    },
]


const PaymentScreen = ({ navigation, route}) => {

    const [data, setData] = useState(methods)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (<HeaderRight onPress={() => { navigation.navigate('Wallet') }} />),
            headerLeft: ()=> (<HeaderBack onPress={() => {navigation.navigate('Home')}} />)
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
    }
    
    return (
        <Background>
        <View style={styles.container}>
        <Title
                    title='Order Payment'
                    />
                <View style={{ marginTop: 8 }}>
                    <Cell data={data} renderItem={_renderItem} onPress={_onItemClick} />
                </View>
                <View style={{ marginLeft: 20, marginRight: 20, marginTop: 170  }}>
                <Button text="Confirm" onPress={() => {navigation.push('Confirmed')}} />
            </View>
        </View>
        </Background>
    )
}

export default PaymentScreen

const styles = StyleSheet.create({
    container:{
      flex:1,
     
    }
  })