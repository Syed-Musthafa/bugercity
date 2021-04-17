import React from 'react'
import { Image, StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import { icons } from '../../exports'

const Cell = ({data, style, renderItem, onPress, ...rest}) => {


   

    return data? (
        data.map((entry, index) => {
            return(
                <TouchableOpacity key={index} style={styles.container} onPress={() => onPress(entry, index)}>
                <View style={styles.leftView}>
                    {renderItem(entry, index)}
                </View>
                <View style={styles.rightView}>
                    <Image source={entry.selected? entry.activeIcon: entry.icon} style={{ width:25, height:25, tintColor:'orange'}} />
                </View>
            </TouchableOpacity>
            )
        })
       
    ): (
        <View />
    );
}

export default Cell


const styles = StyleSheet.create({
    container:{
        height: 62,
        marginLeft:20,
        marginRight:20,
        marginTop:12,
        marginBottom:12,
        backgroundColor:'#ffffff',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        alignContent: 'center',
    },
    leftView:{
        marginLeft:20,

    },
    rightView:{
        marginRight:20
    }
})