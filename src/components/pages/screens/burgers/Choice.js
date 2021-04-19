import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import HeaderLanguageChange from '../../components/HeaderLanguageChange'

import Background from '../../components/Background'
import HeaderRight from '../../components/HeaderRight'
import HeaderBack from '../../components/HeaderBack'
import Title from '../../components/Title'
import Cell from '../../components/Cell'
import Button from '../../components/Button'

import { COLORS, FONTS, SIZES, icons, images, data, } from '../../../exports'

const choices = [
    {
        id: 1,
        name: 'Homestyle Frise',
        selected: false,
        icon: icons.unselected,
        activeIcon: icons.selected,
    },
    {
        id: 2,
        name: 'Medium fries',
        selected: true,
        icon: icons.unselected,
        activeIcon: icons.selected,
    },
]

const Choice = ({ navigation, route }) => {

    const [data, setData] = useState(choices)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (<HeaderRight onPress={() => { navigation.navigate('Wallet') }} />),
            headerLeft: () => (<HeaderLanguageChange onPress={() => { Alert.alert('do something') }} />)
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
                    title='Choices'
                    subTitle="please select your order choices" />
                <View style={{ marginTop: 8 }}>
                    <Cell data={data} renderItem={_renderItem} onPress={_onItemClick} />
                </View>
                <View style={{ marginLeft: 20, marginRight: 20, marginTop: 250  }}>
                <Button text="Proceed to Add Cart" onPress={() => {navigation.push('AddToCard')}} />
            </View>
            </View>
            
            
        </Background>
    )
}

export default Choice

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
})