// 입력
// 첫 줄에 테스트케이스의 개수 T가 주어진다. T는 최대 1,000,000이다. 다음 T줄에는 각각 두 정수 A와 B가 주어진다. A와 B는 1 이상, 1,000 이하이다.

// 출력
// 각 테스트케이스마다 A+B를 한 줄에 하나씩 순서대로 출력한다.

const fs = require('fs');
let input = fs.readFileSync('../input.txt').toString().split('\r\n');
let testNum = input[0];
let testCase = [];
for(let i = 1; i<=testNum; ++i){
  testCase.push(input[i].split(' '));
}
function solution(testNum, testCase){
  
  for(let i = 0; i<=testNum-1; i++){
    console.log(Number(testCase[i][0]) + Number(testCase[i][1]));
  }
}

solution(+testNum, testCase);