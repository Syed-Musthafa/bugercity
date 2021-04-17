import React from 'react';
import { ImageBackground, Text, View, StyleSheet, Image } from 'react-native';

import { RadioButton, RadioGroup } from 'react-native-flexi-radio-button'

import { COLORS, FONTS, SIZES, icons, images, data, } from '../../exports'
import Button from '../components/Button';

import Input from '../components/Input'


const Login = ({
    params,
}) => (
    <View style={styles.container}>
        <ImageBackground
            source={images.burger_bg1}
            style={{ width: SIZES.width, height: SIZES.height }}
        >
            <View style={styles.darkLayer} />
            <View style={styles.logo}>
                <Image source={images.burger} style={{ width: 120, height: 120 }} />
                <Text style={{ color: COLORS.white, fontSize: 25, fontWeight: 'bold' }}>Burger</Text>
            </View>
            <View style={styles.title}>
                <Text style={styles.titleText}>Forget Password!</Text>
            </View>
            <View style={styles.tip}>
                <Text style={styles.tipText}>Please enter the new password and confirm password</Text>
            </View>
            <View style={styles.input}>
                <Input icon={icons.lock} placeholder="New Password" password/>
                <View style={{ paddingTop: 18 }} />
                <Input icon={icons.lock} placeholder=" Conform Password" password/>
            </View>
           
            <View style={{ marginTop:37, justifyContent:'center', alignItems:'center'}}>
                <Button text="Submit"/>
            </View>
          
        </ImageBackground>
    </View>
);

export default Login;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    darkLayer: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: '#000000',
        opacity: 0.4
    },
    logo: {
        marginTop: 85,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        marginTop: 59,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 22
    },
    tip: {
       
        marginLeft: 50,
        marginRight: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tipText: {
        color: '#fff',
        textAlign:'center',
        fontSize: 16
    },
    input: {
        marginTop: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    remember: {
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        opacity: 0.8
    },
    rememberText: {
        color: '#fff',
        fontSize: 12

    },
    forgetText: {
        color: '#fff',
        fontSize: 12
    },
    signup:{
        marginTop:70,
        justifyContent:'center',
        alignItems: 'center',
    },
    signupText:{
        color:'#FF9F1C',
        fontSize: 12
    },
    terms:{
        marginTop:52,
        marginRight:80,
        marginLeft:80,
        justifyContent:'center',
        alignItems: 'center',
    },
    termsText:{
        color:'#FFFFFF',
        fontSize: 12,
        textAlign:'center'
    }
})