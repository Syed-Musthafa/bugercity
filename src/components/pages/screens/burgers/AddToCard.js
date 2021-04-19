import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View, Alert, Image, TouchableOpacity } from 'react-native'
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
        name: 'Cheess Burger ',
        icon: icons.arrow,
        logo: images.burger,
    },
    {
        id: 2,
        name: 'Coca Cola(250ml) ',
        icon: icons.arrow,
        logo: images.burger,
    },
    {
        id: 3,
        name: 'Fries pack',
        icon: icons.arrow,
        logo: images.burger,
    },
]

const AddToCard = ({ navigation, route }) => {

    const [data, setData] = useState(choices)
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
                <View style={{ width: 67, height: 43, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={item.logo} style={{ width: 60, height: 60 }} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text key={item.id} style={{ fontSize: 15, lineHeight: 20 }}>{item.name}</Text>
                </View>


            </View>
        )
    };

    const _onItemClick = (item, index) => {
        // let temp = [];
        // data.map((entry, idx) => {
        //     if (idx === index) {
        //         entry.selected = true;
        //         temp.push(entry);
        //     } else {
        //         entry.selected = false;
        //         temp.push(entry);
        //     }
        // });
        // setData(temp);
    }




    return (
        <Background>
            <View style={styles.container}>
                
                <Title
                    title='Cheese Burgers Meals'
                    subTitle="please customize your meals" />
                <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                    <Image source={images.dessets} style={{ width: 140, height: 140 }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                    <View style={{ width: 140, height: 48, backgroundColor: 'green', marginLeft: 10, borderRadius: 6 }}>
                        <View style={{ height: 48, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignContent: 'center', backgroundColor: '#fff' }}>
                            <TouchableOpacity onPress={() => { count <= 1 ? setCount(0) : setCount(count - 1) }}>
                                <Image source={icons.minus} style={{ width: 20, height: 20, marginLeft: 20, }} />
                            </TouchableOpacity>
                            <Text style={{ color: '#727C8E', fontSize: 15, lineHeight: 20 }}  >{count}</Text>
                            <TouchableOpacity onPress={() => { setCount(count + 1) }}>
                                <Image source={icons.plus_icon} style={{ width: 25, height: 25, marginRight: 20, tintColor: "#000", }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ width: 176, marginLeft: 20, marginRight: 20, }}>
                        <Button text="Add To Cart" onPress={() => { navigation.push('MainItem') }} />
                    </View>
                </View>
                <Title
                    title='Includes'
                />
                <View style={{ marginTop: 8 }}>
                    <Cell data={data} renderItem={_renderItem} onPress={_onItemClick} />
                </View>
                <View style={{ marginLeft: 20, marginRight: 20, marginTop: 250 }}>
                    <Button text="Proceed to Add Cart" onPress={() => Alert.alert('Proceed to Add Cart')} />
                </View>
            </View>


        </Background>
    )
}

export default AddToCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: SIZES.width,
        height: SIZES.height,

    }
})