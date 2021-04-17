import React from 'react'
import { StyleSheet, Text, View, Image , TouchableOpacity} from 'react-native'
import { icons } from '../../exports'

const HeaderBack = ({onPress, }) => {
    return (
        <TouchableOpacity style={{ marginLeft:20}} onPress={onPress}>
            <Image source={icons.back} style={{ width:20, height:20, tintColor:'#000000',  }} />
        </TouchableOpacity>
    )
}

export default HeaderBack

const styles = StyleSheet.create({})
