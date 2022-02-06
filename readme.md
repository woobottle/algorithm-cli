<h1 align="center">알고리즘 solve 파일 cli 생성기!!</h1>

![Feb-06-2022 18-39-43](https://user-images.githubusercontent.com/50283326/152675209-d4405c32-bdfb-4179-aa14-a569d8c82976.gif)

<h2>설치</h2>

npm 명령어를 통해 설치할 수 있습니다.

```shell
> npm install -g algorithm-cli
```


<h2>사용법</h2>

```shell
> algo g
```

![image](https://user-images.githubusercontent.com/50283326/152675887-0c4649bc-f9d6-41c4-bf5b-142f32a004e0.png)

<h2>이건 뭐죠??</h2>     

Algorithm PS(Problem Solving)를 위한 solve 파일 생성기 입니다.      

<h2>왜 만들었죠???</h2>

algorithm 연습을 제공하는 여러 사이트들이 있습니다. (ex. 백준, 프로그래머스 등등)  
웹 에디터 상에서 코드를 바로 짜서 문제를 풀기에는 실력이 부족합니다.   
따라서 로컬에서 파일을 생성, 문제를 해결, 사이트에 복붙 하는 과정을 반복합니다.   

매번 마우스 우클릭, rename, save, 같은 라이브러리 import 등등 반복되는 작업을 줄이고자     
cli 환경에서 주요 로직을 포함한 solve 파일을 원하는 이름과 함께 생성할 수 있게 하였습니다.   
**(nest-cli의 구조를 참고하여 만들었습니다.)**

<h2>진행 과정</h2>

1. select site(current => programmers or baekjoon)
2. input language
3. input problem number
4. create file name with [number].py or [number].js based on your language

<h2>현재 적용되는 언어</h2>

1. python
2. javascript

<h2>현재 적용되는 사이트</h2>

1. https://www.acmicpc.net/
2. https://programmers.co.kr/learn/challenges

<h2>템플릿</h2>

1. [백준 템플릿 - python, javascript](https://github.com/woobottle/algorithm-cli/blob/master/src/templates/baekjoon.template.ts)
2. [프로그래머스 템플릿 - python, javascript](https://github.com/woobottle/algorithm-cli/blob/master/src/templates/programmers.template.ts)
