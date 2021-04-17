import React, { useLayoutEffect } from 'react'
import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native'

import Background from '../../components/Background'
import HeaderRight from '../../components/HeaderRight'
import HeaderBack from '../../components/HeaderBack'
import Title from '../../components/Title'
import Cell from '../../components/Cell'
import Button from '../../components/Button'
import GroupButton from '../../components/GroupButton'
import { icons, images } from '../../../exports'

const Burgers= ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (<HeaderRight onPress={() => { navigation.navigate('Wallet') }} />),

            headerLeft: () => (<HeaderBack onPress={() => { navigation.goBack() }} />)
        })
    })

    const burgers = [
        {
            id: 1,
            name: 'Chicken Big Burgers',
            price: '300 SAR',
            logo: images.burger,
            icon: icons.arrow,
            isNew: true,
        },
        {
            id: 2,
            name: 'Chicken Spicy Burgers',
            price: '350 SAR',
            logo: images.burger,
            icon: icons.arrow,
            isNew: false,
        },
        {
            id: 3,
            name: 'Beef Burgers',
            price: '370 SAR',
            logo: images.burger,
            icon: icons.arrow,
            isNew: true,
        },
        {
            id: 4,
            name: 'Chessy Burgers',
            price: '260 SAR',
            logo: images.burger,
            icon: icons.arrow,
            isNew: true,
        },
        

    ]

    

    const _renderItem= (item, index) => {
        return (
           <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
           <View style={{ flexDirection:'row'}}>
               <ImageBackground source={item.logo} style={{ width:50, height:50 , alignItems:'flex-end', justifyContent:'flex-start'}}>
               {item.isNew?<Image source={images.new_circle} style={{ width:25, height:25}} />:<View/>}
               </ImageBackground>
               
               </View>
               <View style={{ marginLeft:10}}>
                   <View>
                       <Text style={{ fontSize:15, lineHeight:20, fontWeight:'bold'}}>{item.name}</Text>
                   </View>
                   <View>
                       <Text style={{ color:'#FF9F1c',fontSize:15, lineHeight:20, fontWeight:'bold'}}>{item.price}</Text>
                   </View>
               </View>
           </View>
        )
    };

    const _onItemClick =(item, index) =>  {
        navigation.push('SelectItem')
    }

    return (
        <Background>
            <View style={styles.container}>
               <Cell
               style={{ height:100 }}
               data={burgers}
               renderItem={_renderItem}
               onPress={_onItemClick}
               ></Cell>
            </View>
        </Background>
    )
}

export default Burgers

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
   
})
