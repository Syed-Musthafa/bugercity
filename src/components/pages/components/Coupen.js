import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'
import { images } from '../../exports'

const Coupen = ({icon, title, desc}) => {
    return (
        <View style={styles.container}>
        <View style={styles.wrapper}>
           <View style={styles.left_circle}></View>
           <View style={styles.content}>
               <Image source={icon} style={{ width:42, height:50}}/>
               <View style={{ marginLeft:16}}>
                   <Text style={styles.title}>{title}</Text>
                   <Text style={styles.desc}>{desc}</Text>
               </View>
           </View>
           <View style={styles.right_circle}></View>
           </View>
        </View>
    )
}

export default Coupen

const styles = StyleSheet.create({
    container:{
        height:100,
        marginLeft:20,
        marginRight:20,
        marginTop:15,
        backgroundColor:'#000000',
        borderRadius:6,
        justifyContent: 'center',
    },
    wrapper:{
        marginLeft:-30,
        marginRight:-30,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent:'center'
    },
    left_circle:{
        width: 50,
        height: 50,
        borderRadius:50,
        backgroundColor:'#F5F5F7'
    },
    content:{
        flexDirection:'row'
    },
    right_circle:{
        width: 50,
        height: 50,
        borderRadius:50,
        backgroundColor:'#F5F5F7'
    },
    title:{
        color:'#fff',
        fontSize:20
    },
    desc:{
        color:'#fff',
        fontSize:12
    }

})
