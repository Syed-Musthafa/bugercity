import React, { useLayoutEffect } from 'react'
import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native'

import Background from '../../components/Background'
import HeaderRight from '../../components/HeaderRight'
import HeaderBack from '../../components/HeaderBack'
import Title from '../../components/Title'
import Cell from '../../components/Cell'
import Button from '../../components/Button'
import GroupButton from '../../components/GroupButton'
import { icons, images } from '../../../exports'

const SelectItem = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (<HeaderRight onPress={() => { navigation.navigate('Wallet') }} />),

            headerLeft: () => (<HeaderBack onPress={() => { navigation.goBack() }} />)
        })
    })

    const burgers = [
        {
            id: 1,
            name: 'Chicken Big Burgers',
            price: '300 SAR',
            logo: images.burger,
            icon: icons.arrow,
            isNew: true,
            category: 'Ala Carte'
        },
        {
            id: 2,
            name: 'Chicken Spicy Burgers',
            price: '350 SAR',
            logo: images.burger,
            icon: icons.arrow,
            isNew: false,
            category: 'Ala Carte'
        },
    


    ]



    const _renderItem = (item, index) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                
                <View style={{ marginLeft: 10 }}>
                    <View>
                        <Text style={{ fontSize: 15, lineHeight: 20, fontWeight: 'bold' }}>{item.name}</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#FF9F1c', fontSize: 15, lineHeight: 20, fontWeight: 'bold' }}>{item.category}</Text>
                    </View>
                </View>
            </View>
        )
    };

    const _onItemClick = (item, index) => {
        navigation.push("Choice")
    }

    return (
        <Background>

            <View style={styles.container}>
                <Title title="Chicken Burgers"
                    subTitle="please selesct  your burgers type" />
                <View style={{ justifyContent:'center', alignItems:'center', marginBottom: 20, marginTop: 28 }}>
                    <Image source={images.dessets} style={{ width: 180, height: 170 }} />
                </View>
                <Cell
                    style={{ height: 100 }}
                    data={burgers}
                    renderItem={_renderItem}
                    onPress={_onItemClick}
                ></Cell>
            </View>
        </Background>
    )
}

export default SelectItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})
