import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const DateHead = ({date}) => {
  const { top } = useSafeAreaInsets();    
  //useSafeAreaInsets() 훅을 이용해서 StatusBar의 높이를 구할 수 있다.
  //top, bottom, left, right를 불러올 수 있다.
  return (
    <>
      <View style={[styles.statusBarPlaceholder, { height: top}]} /> 
      {/* barStyle: dark-content , light-content , default(시스템기본값)  */}
      <StatusBar backgroundColor="#9e00c5" barStyle="light-content" />
      <View style={styles.block}>
          <Text style={styles.dateText}>
              { date }
          </Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
    statusBarPlaceholder: {
        backgroundColor: '#9e00c5'
    },
    block:{
        backgroundColor: '#d500f9'
    },
    dateText: {
       fontSize: 22,
       fontWeight: 'bold',
       color:'#fff',
       padding:10,
    }
})

export default DateHead