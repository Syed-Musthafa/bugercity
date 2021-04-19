import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { images } from '../../exports'

const Card = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection:'row'}}>
                <View style={{ justifyContent:'flex-start', alignItems:'center'}}>
                    <Image source={images.dessets} style={{ width: 120, height: 120 }} />
                </View>
                <View style={{ justifyContent:'center', marginLeft:50}}>
                    <Text style={{ color:'#000000', fontSize:14, lineHeight:19}}>1 Cheese Burgers meals</Text>
                    <Text style={{ color:'#727C8E', fontSize:14, lineHeight:19}}> Cheese Burgers </Text>
                    <Text style={{ color:'#727C8E', fontSize:14, lineHeight:19}}>Fries pack</Text>
                    <Text style={{ color:'#727C8E', fontSize:14, lineHeight:19}}>Coca cola (250 ml)</Text>
                    <Text style={{ color:'#727C8E', fontSize:14, lineHeight:19}}>No Add on</Text>
                </View>
            </View>
            <View style={{ alignItems:'flex-end', marginRight:10, marginBottom:20}}>
            <Text style={{ color:'#FF9F1C', fontSize:15, lineHeight:20, fontWeight:'bold'}}>520 SAR</Text>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container:{
        marginLeft:20,
        marginRight:20,
        marginTop:20,
        backgroundColor: '#FFFFFF'
    }
})
