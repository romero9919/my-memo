import React from 'react'
import { View, Text, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MemoItem = ({ id, content, dt, done }) => {
  return (
    <View style={sty.container}>
       <View style={[sty.mainCardView, done ? sty.itemTrueColor:sty.itemFalseColor ]}>
           <View style={sty.fontDateBox}>
               <Text style={sty.fontDate}>{dt}</Text>
           </View>
           <Text style={[sty.blackFont,sty.fontSizeB]}>{content}</Text>
           <View style={sty.iconBox}>
               <View style={sty.touchableBox}>
               <TouchableOpacity>
                   <Icon name="edit" size={28} color="#ba68c8" />
               </TouchableOpacity>
               </View>
               <View style={sty.touchableBox}>
               <TouchableOpacity>
                   <Icon name="delete" size={28} color="#ff1744" />
               </TouchableOpacity>
               </View>
           </View>
       </View>
    </View>
  )
}

const sty = StyleSheet.create({
    container: {
       marginTop: 40,
       flex: 1
    },
    mainCardView: {
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 9,
        elevation: 8,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginHorizontal: 16
    },
    itemTrueColor: {
        backgroundColor: '#e0f7fa' 
    },
    itemFalseColor: {
        backgroundColor: '#f3e5f5'
    },
    whiteFont: {
        color: '#fff'
    },
    blackFont: {
        color:'#000'
    },
    fontWeight: {
        fontWeight: 'bold'
    },
    fontSizeA: {
        fontSize: 20
    },
    fontSizeB: {
        fontSize: 16
    },
    contentBox: {
        marginHorizontal: 25,
        borderWidth: 1,
        borderColor: '#ddd',
        borderTopWidth: 0,
        paddingHorizontal: 30,
        paddingVertical:20
    },
    fontDateBox: {
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    fontDate: {
        fontSize: 12,
        color: '#999999',
    },
    iconBox: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    touchableBox: {
        marginLeft:10
    }
    
})

export default MemoItem