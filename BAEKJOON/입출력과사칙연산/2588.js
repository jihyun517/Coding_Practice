// 문제
// (세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.
// 그림
// (1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다.

// 출력
// 첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.

const fs = require('fs');
let input = fs.readFileSync('../input.txt').toString();
input = input.split('\r\n');
// console.log(input);

function solution(num1, num2){
  new_num2 = num2.split('');
  for(var i = 2; i>=0; i--){
    console.log(+num1*+new_num2[i]);
  }
  console.log(+num1*+num2);
}

solution(input[0], input[1]);