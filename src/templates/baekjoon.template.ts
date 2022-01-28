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