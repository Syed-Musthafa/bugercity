import React from 'react'
import { Image, StyleSheet, Text, View,  } from 'react-native'
import { COLORS, FONTS, SIZES, icons, images, data,  } from '../../exports'

const HeaderTitle = ({params}) => {
    return (
        <View>
           {/* <Image source={icons.homebar} style={{ width:20, height:20}} /> */}
           <Text style={{fontSize:20, fontWeight:'bold'}}>Burger</Text>
        </View>
    )
}

export default HeaderTitle

const styles = StyleSheet.create({})
