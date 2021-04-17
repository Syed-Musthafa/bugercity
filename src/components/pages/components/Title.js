import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Title = ({title ,subTitle, titleColor, subTitleColor}) => {

    const styles = StyleSheet.create({
        title:{
            marginLeft:20,
            marginTop:28
        },
        titleText:{
            color: titleColor ? titleColor : "#000000",
            fontSize:20,
            lineHeight:27,

        },
        subTitleText:{
            color: subTitleColor ? subTitleColor: "#000000",
            fontSize:15,
            lineHeight:20,
        },
    })

    return (
        <View style={styles.title}> 
            {title?<Text style={styles.titleText} >{title}</Text>:<View/>}
            {subTitle?<Text style={styles.subTitleText} >{subTitle}</Text>:<View/>}
        </View>
    )

    
}

export default Title


