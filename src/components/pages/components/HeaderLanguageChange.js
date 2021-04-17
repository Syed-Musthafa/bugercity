import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { COLORS, FONTS, SIZES, icons, images, data,  } from '../../exports'

const HeaderLanguageChange = ({onPress, ...params}) => {
    return (
        <TouchableOpacity style={{marginLeft:10, flexDirection:'row', justifyContent:'center',alignItems:'center'}}
        onPress={onPress}
        >
            <Text style={{color:'#FF9F1C'}}>EN</Text>
            <Image source={icons.expend} style={{ width:20, height:20, tintColor:'#FF9F1C', marginLeft:5 }} />
        </TouchableOpacity>
    )
}

export default HeaderLanguageChange

const styles = StyleSheet.create({})
