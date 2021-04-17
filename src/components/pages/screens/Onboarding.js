import React, { Component } from 'react'
import { Text, View ,Image, StyleSheet, Dimensions , Alert} from 'react-native'

import Swiper from 'react-native-swiper'
import Button from '../components/Button'

const {width, height} = Dimensions.get('screen');

import { COLORS, FONTS, SIZES, icons, images, data,  } from '../../exports'



export class Onboarding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: [
                {id:1, image:images.burger_bg1},
                {id:2, image:images.burger_bg2},
                {id:3, image:images.burger_bg3}
            ]
        }
    }
 
    btnClick = () => {
        Alert.alert('Get start here')
    }


    render() {
        return (
            <View>
                <Swiper autoplay={true}
                dot={<View style={styles.dot}></View>}
                activeDot={<View style={styles.activeDot}/>}
                >
                    {this.state.slides.map((item ) => {
                        return(
                            <View key={item.id} style={styles.slide}>
                                <Image
                                source={item.image}
                                style={styles.image}
                                 />
                            </View>
                        )
                    })}
                </Swiper>
                <View style={styles.darkLayer}/>
                <View style={styles.logoContainer}>
                    <Image source={images.burger} style={{ width:120, height:120}} />
                    <Text style={{ color:COLORS.white, fontSize:25, fontWeight:'bold'}}>Burger</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>World's  Greatest Burgers..</Text>
                </View>
                <View style={styles.button}>
                    <Button text="Get start here" onPress={() => {this.btnClick()}} />
                </View>
            </View>
        )
    }
}

export default Onboarding

const styles = StyleSheet.create({
    container:{
      flex:1,
      
    },
    slide:{
        justifyContent:'center',
      alignItems:'center'
    },
    image:{
        width:width,
        height:height
    },
    dot: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        width:8,
        height:8,
        borderRadius:8,
        marginLeft:3,
        marginRight:3
    },
    activeDot: {
        backgroundColor: '#fff',
        width:8,
        height:8,
        borderRadius:8,
        marginLeft:3,
        marginRight:3
    },
    logoContainer:{
        width:width,
        position:'absolute',
        top:85,
        alignItems:'center',
        justifyContent:'center'
    },
    textContainer:{
        width:130,
        position:'absolute',
        bottom:180,
        left:30,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:COLORS.white,
        fontSize:31,
        fontWeight:'bold'
    },
    button:{
        width: width,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        bottom: 81,
    },
    darkLayer:{
        position:'absolute',
        top:0,
        right:0,
        left: 0,
        bottom:0,
        backgroundColor: '#000000',
        opacity:0.4
    }

  })
  
