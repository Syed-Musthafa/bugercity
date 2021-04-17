import React from 'react';
import { View, Image, StyleSheet, TextInput } from 'react-native';

import { COLORS, FONTS, SIZES, icons, images, data,  } from '../../exports'

const Input = ({
    placeholder, icon, password, ...rest
}) => (
    <View style={styles.container}>
    <View style={styles.icon}>
        <Image source={icon} style={{ width:25, height:15}}/>
    </View>
        <TextInput
        style={styles.input}
        secureTextEntry={password}
        placeholder={placeholder}
        ></TextInput>
    </View>
);

export default Input;


const styles = StyleSheet.create({
    container:{
      width:SIZES.width - 60,
      height: 48,
      backgroundColor: "#fff",
      borderRadius:8,
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems: 'center',
    },
    icon:{
        paddingLeft:20
    },
    input:{
        backgroundColor:'#fff',
        borderColor:'#fff',
        color:'#727C8E',
        fontWeight:'bold',
        fontSize:12,
        paddingLeft:15
    }
  })
  