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

export const baekjoonJavaTemplate = () => `
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.*;

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    
  }
}
`