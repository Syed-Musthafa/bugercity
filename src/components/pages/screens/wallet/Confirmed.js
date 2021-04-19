import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'


import HeaderRight from '../../components/HeaderRight'
import HeaderBack from '../../components/HeaderBack'

import Button from '../../components/Button'
import Background from '../../components/Background'
import Title from '../../components/Title'
import Cell from '../../components/Cell'


const ConfirmedScreen = ({ navigation, route }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (<HeaderRight onPress={() => { navigation.navigate('Wallet') }} />),
            headerLeft: () => (<HeaderBack onPress={() => { navigation.goBack() }} />)
        })
    })


    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.addressView}>
                    <Title
                        title="Order Comfirmed"
                        subTitle="Pay By E Wallet"
                        titleColor="#FFFFFF"
                        subTitleColor="#FF9F1c"
                    ></Title>
                    <Title
                        style={{ marginTop: 1 }}
                        subTitle="22701 - 18 / 09 / 2018 -429"

                        subTitleColor="#FFFFFF"  >
                    </Title>
                </View>
                <View style={styles.dateTimeView}>
                    <Title
                    style={{ marginTop: 8 }}
                        title="Delivering By "
                        subTitle="19 / 09 / 2022 06:30:00 PM"
                        titleColor="#FFFFFF"
                        subTitleColor="#FF9F1c"
                    ></Title>
                    <Title
                        style={{ marginTop: 1 }}
                        subTitle="No. 02 6th Lane, Comombo 03"

                        subTitleColor="#FFFFFF"  >
                    </Title>
                </View>
                <View>
                    <Text>We Have sent you an Email confirmation of your order</Text>
                </View>

            </View>
        </Background>
    )
}

export default ConfirmedScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    addressView: {
        height: 127,
        backgroundColor: '#1d2126',

    },
    dateTimeView: {
        height: 127,
        backgroundColor: '#1c272e',

    }
})