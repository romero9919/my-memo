const myMemo = [
    {id: 1, content: '오늘의 날씨는 흐려요.', dt: '2022-08-12 11:00', done: true },
    {id: 2, content: '달리기 30Km 하고 집에와 씻음.', dt: '2022-07-12 11:00', done: false },
    {id: 3, content: '점심으로 아이스크림을 먹음.', dt: '2022-06-12 12:00', done: true },
    {id: 4, content: '우연히 만난 친구 엉덩이를 참', dt: '2022-09-12 09:00', done: false },
  ];
//추가
const newUser = { id: 5, content: '내용입니다.'};
const newMyMemo = {
    ...myMemo,
    ...newUser
};
console.log('추가', newMyMemo);

const newMyMemo2 = myMemo.map(item => item.id === 2 ? {...item, content: '반갑습니다.'}: item);
console.log('수정', newMyMemo2);
const newMyMemo3 = myMemo.filter(item => item.id !== 3);
console.log('삭제', newMyMemo3);