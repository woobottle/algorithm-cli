export const baekjoonPythonTemplate = (number?: number | string) => `
import sys
input = sys.stdin.readline

def BOJ${number}() :
  pass

BOJ${number}()
`

export const baekjoonJavascriptTemplate = () => `
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
`


// generator로 
// site, language, problem이 넘어가겠지?
// 이걸 가지고 판별해야지
// generator에는 따로 더 추가될까?
// generator -> baekjoon_generator, programmers_generator