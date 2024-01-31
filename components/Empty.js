import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const Empty = () => {
  return (
    <View style={sty.block}>
        <Image 
           source={require('../assets/images/empty.jpg')}
           style={sty.image}
           reaseMode="cover" />
           {/* cover(가로세로 비율 유지하고 리사이징), contain, stretch, repeat */}
        <Text style={sty.descr}>내용이 없습니다.</Text>
    </View>
  )
}

const sty = StyleSheet.create({
    block: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    descr: {
        fontSize: 25,
        color: '#999'
    },
    image: {
        width: 240,
        height: 206,
        marginBottom: 15
    }
})

export default Empty