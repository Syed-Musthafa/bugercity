import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View, Alert, TouchableOpacity, Image } from 'react-native'
import Modal from 'react-native-modal'


import HeaderRight from '../../components/HeaderRight'
import HeaderBack from '../../components/HeaderBack'

import Button from '../../components/Button'
import Background from '../../components/Background'
import Title from '../../components/Title'
import Cell from '../../components/Cell'
import { images } from '../../../exports'


const ConfirmedScreen = ({ navigation, route }) => {

    const [modalVisible, setModalVisible] = useState(false)

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
                <View style={{ marginLeft: 20, marginTop: 20, marginRight: 60 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, lineHeight: 20 }}>We Have sent you an Email confirmation of your order</Text>
                </View>
                <View style={{ flex: 1, marginRight: 20, marginLeft: 20, flexDirection: 'row', justifyContent: 'center', marginTop: 279 }}>
                    <Button style={{ flex: 1, marginRight: 5, }} text="Track your Order" onPress={() => {navigation.navigate('Track') }} ></Button>
                    <Button style={{ flex: 1, marginLeft: 5 }} text="Confirm" onPress={() => { setModalVisible(true) }} ></Button>
                </View>
                <Modal isVisible={modalVisible} animationType="slide" transparent={true} >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={{ height:30}}>
                                <View style={styles.modalCircle}></View>
                            </View>

                            <View style={styles.modalView2}>
                                <Image source={images.burger} style={{ width: 60, height: 50 }} />
                                <Text style={styles.modalTitle}>Congratulations</Text>
                                <View style={{ marginRight: 40, marginLeft: 40, marginBottom: 40, marginTop: 10 }}>
                                    <Text style={styles.modalDesc}> Thanks for your payment! you have won a Free Coca cola  </Text>
                                </View>

                                <TouchableOpacity style={styles.modalButton}
                                    onPress={() => {
                                        setModalVisible(false)
                                    }}>
                                    <Text style={styles.textStyle}>Ok</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
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

    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView2: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingBottom: 40
    },
    modalView: {
        margin: 20,
        backgroundColor: 'transparent',
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalTitle: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 18
    },
    modalDesc: {
        color: '#1d2126',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 20,
        textAlign: 'center'
    },
    modalButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 100,
        backgroundColor: '#FF9F1C',
        borderRadius: 10
    },
    textStyle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 18,
        textAlign: 'center'
    },
    modalCircle: {
        width: 125,
        height: 125,
        borderRadius: 125,
        backgroundColor: '#fff'
    }
})