import React, { useState } from 'react'
import {
    View, 
    TextInput, 
    Image, 
    TouchableOpacity, 
    TouchableNativeFeedback, 
    Platform, 
    Keyboard,
    StyleSheet
} from 'react-native'

const AddMemo = () => {

  const [ text, setText ] = useState('');
  //console.log(text);  
  const onPress = () => {
     setText('');
     Keyboard.dismiss();
  }
  const button = (
    <View style={st.buttonStyle}>
       <Image source={require('../assets/icons/add_white/add_white.png')} />
    </View>
  );
  return (
    <View style={st.block}>
        <TextInput placeholder='메모를 입력하세요.' 
                   style={st.input}
                   value={text}
                   onChangeText={setText}
                   onSubmitEditing={onPress}
                   returnKeyType="done"
        />
        {Platform.select ({
            ios: (
            <TouchableOpacity activeOpacity={0.5} onPress={onPress}> 
                {button}
            </TouchableOpacity>
             ),
             android: (
              <View style={st.circleWrapper}>
               <TouchableNativeFeedback onPress={onPress}>
                {button}
               </TouchableNativeFeedback>
            </View>
            ) 
        })} 
    </View>    
  )
}

const st = StyleSheet.create({
    block: {
        backgroundColor: '#fff',
        height: 70,
        paddingHorizontal: 18,
        borderColor:'#bdbdbd',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        alignItems:'center' ,
        flexDirection: 'row'
    },
    input : {
        flex: 1,
        fontSize: 16,
        paddingVertical: 10
    },
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height: 48,
        backgroundColor: '#d500f9',
        borderRadius:24
    },
    circleWrapper: {
        overflow: 'hidden',
        borderRadius:24
    }
})

export default AddMemo