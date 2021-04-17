import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { COLORS, FONTS, SIZES, icons, images, data,  } from '../../exports'

const HeaderRight = ({onPress, ...params}) => {
    return (
        <TouchableOpacity style={{ marginRight:20}} onPress={onPress}>
            <Image source={icons.cart} style={{ width: 20, height: 20 }} />

        </TouchableOpacity>
    )
}

export default HeaderRight

const styles = StyleSheet.create({})
