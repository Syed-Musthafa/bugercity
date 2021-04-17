import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View, Alert, Image } from 'react-native'
import Swiper from 'react-native-swiper'

import Carousel from 'react-native-snap-carousel';


import HeaderLanguageChange from '../../components/HeaderLanguageChange'

import HeaderRight from '../../components/HeaderRight'


import { COLORS, FONTS, SIZES, icons, images, data, } from '../../../exports'
import Coupen from '../../components/Coupen'

const HomeScreen = ({ navigation, route }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (<HeaderRight onPress={() => { navigation.navigate('Wallet') }} />),
            headerLeft: () => (<HeaderLanguageChange onPress={() => { Alert.alert('do something') }} />)
        })
    })

    const slides = [
        { id: 1, image: images.burger_bg1 },
        { id: 2, image: images.burger_bg2 },
        { id: 3, image: images.burger_bg3 }
    ];

    const coupens = [
        { id: 1, image: images.burger, title: 'Order Here', desc: 'Login to continue Burger City' },
        { id: 2, image: images.burger, title: 'Track Here', desc: 'Login to continue Burger City' },

    ];

    const offers = [
        { id: 1, image: images.burger_bg1 },
        { id: 2, image: images.burger_bg2 },
        { id: 3, image: images.burger_bg3 },
        { id: 4, image: images.burger_bg1 },
        { id: 5, image: images.burger_bg2 },
        { id: 6, image: images.burger_bg3 },
        { id: 7, image: images.burger_bg1 },
        { id: 8, image: images.burger_bg2 },
        { id: 9, image: images.burger_bg3 },
    ]


    const _renderItem = ({item, index}) => {
        return (
            <View key={item.id}>
                <Image source={item.image} style={{ width:100, height:130, borderRadius:10}} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={{ width: SIZES.width, height: 241 }}>
                <Swiper autoplay={true}
                    dot={<View style={styles.dot}></View>}
                    activeDot={<View style={styles.activeDot} />}
                >
                    {slides.map((item) => {
                        return (
                            <View key={item.id} style={styles.slide}>
                                <Image
                                    source={item.image}
                                    style={styles.image}
                                />
                                <View style={styles.slide_text_wrapper}>
                                    <Text style={styles.slide_text}>World's  Greatest Burgers..</Text>
                                </View>
                            </View>
                        )
                    })}
                </Swiper>
            </View>
            <View>
                {
                    coupens.map((item) => {
                        return (
                            <Coupen key={item.id} icon={item.image} title={item.title} desc={item.desc} />
                        )
                    })
                }


            </View>
            <View style={{ marginTop: 22, marginLeft: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Best Offers</Text>
                <Carousel
                firstItem={1}
                    data={offers}
                    renderItem={_renderItem}
                    sliderWidth={SIZES.width}
                    itemWidth={120}
                ></Carousel>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F7'

    },
    image: {
        width: SIZES.width,
        height: 241,
    },
    slide: {
        width: SIZES.width,
        height: 241,
    },
    slide_text_wrapper: {
        position: 'relative',
        bottom: 215,
        right: -20,
        width: SIZES.width - 100,
    },
    slide_text: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold'
    },
    dot: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        width: 8,
        height: 8,
        borderRadius: 8,
        marginLeft: 3,
        marginRight: 3
    },
    activeDot: {
        backgroundColor: '#fff',
        width: 8,
        height: 8,
        borderRadius: 8,
        marginLeft: 3,
        marginRight: 3
    },
})
