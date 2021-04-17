import React from 'react'
import { View, Text , StyleSheet, TouchableOpacity} from 'react-native'

const Button = ({ text, style, onPress, ...params}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button


 
const styles = StyleSheet.create({
   container: {
    width: 315,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: '#FF9F1C',
    marginTop:10
   },
   text: {
    color:'#fff',
    fontSize:16,
    textAlign:'center'
   }
})