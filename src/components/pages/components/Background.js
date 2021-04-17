import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { COLORS, FONTS, SIZES, icons, images, data, } from '../../exports'

const Background = ({children, style, ...rest}) => {
    return (
        <View style={styles.container}>
            <View style={styles.top_shadow}></View>
            {children}
            <View style={styles.button_shadow}></View>
        </View>
    )
}

export default Background

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#F5F5F7"
    },
    top_shadow:{
        position: 'absolute',
        bottom:-5,
        backgroundColor:"#F5F5F7",
        width: SIZES.width, 
        height: 5,
        shadowColor:'#000000',
        shadowOffset:{width: 0, height: 1,},
        shadowOpacity:0.5,
        shadowRadius:10,
        elevation: 5,
    },
    button_shadow:{
        position: 'absolute',
        top:-5,
        backgroundColor:"#F5F5F7",
        width: SIZES.width, 
        height: 5,
        shadowColor:'#000000',
        shadowOffset:{width: 0, height: 1,},
        shadowOpacity:0.5,
        shadowRadius:10,
        elevation: 5,
    },
})
