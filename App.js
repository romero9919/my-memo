import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import DateHead from './components/DateHead';
import MemoList from './components/MemoList';
import AddMemo from './components/AddMemo';
import Empty from './components/Empty';
import moment from 'moment';

export default function App() {
  const theDate = moment().format('YYYY-MM-DD HH:mm');
  const [theDay, toTimes] = theDate.split(' ');
  const nowDay = theDay.split('-');
  const nowTime = toTimes.split(':');
  const tTime = Number(nowTime[0]);
  let vTime;
  if(tTime == 24) {
     vTime = '오전 0'
  }else{
     vTime = tTime > 11 ? '오후 ' + (tTime - 12) : '오전 ' + tTime;
  }
  const toDay = nowDay[0]+"년 "+nowDay[1]+"월 "+nowDay[2]+"일 "+vTime+"시";

  const [myMemo, setMyMemo] = useState([
    {id: 1, content: '오늘의 날씨는 흐려요.', dt: '2022-08-12 11:00', done: true },
    {id: 2, content: '달리기 30Km 하고 집에와 씻음.', dt: '2022-07-12 11:00', done: false },
    {id: 3, content: '점심으로 아이스크림을 먹음.', dt: '2022-06-12 12:00', done: true },
    {id: 4, content: '우연히 만난 친구 엉덩이를 참', dt: '2022-09-12 09:00', done: false },
  ]);

  // 불러오기 
  // useEffect(()=>{

  // }, []);

  return (
    <SafeAreaProvider>
        <SafeAreaView edges = {['bottom']} style={styles.container}>
            <KeyboardAvoidingView
                 behavior={Platform.select({ ios: 'padding' })}
                 style={styles.avoid}
            >
               <DateHead date={toDay} />  
               {myMemo.length === 0 ?
               <Empty /> :
               <MemoList myMemo = {myMemo} />
               }
               <AddMemo />
            </KeyboardAvoidingView>      
        </SafeAreaView> 
    </SafeAreaProvider>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avoid: {
    flex: 1
  }
});
