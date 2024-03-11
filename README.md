# 프로젝트명 (미정)

## 목표

- react를 사용하여 프로젝트를 진행
- 프로젝트 및 취업까지 많은 할 것들을 빠르게 메모하며 필요시 다시 찾아 볼 수 있게 함을 목표로함
- ex 배워야 할 기술들, 기술들을 적용할 대상들 메모, 중간중간 새로운 사이드 프로젝트 아이디어 메모 등

## 프로젝트 실행하는법

새로운 폴더 내에서

```sh
git clone https://github.com/kyh012412/react_side_project1 .
npm install
npm start
```

### 배워야 할 기술들 (프로젝트 관련)

- 어디서든 접근가능한 db 만들기 (vm 또는 집 db포트 열기)
- react(node)의 db 접근 연결하는 기초
- node 배포 서비스 알아보기
- db에 들어가는 정보나 api키 따로 빼서 연결하는 법 알아보기
- css bootstrap의 기본 components
- 하나의 row안에서 parent div는 고정이고 그 내부의 자식들만 횡스크롤로 리스트를 볼 수 있게 하는 bootstrap
- 콜랩스, 캐러셀?

#### 적용할 계획

- 헤더 + 네비게이션 + 푸터
- json화해서 CLOB로 변경하기
- 12시 네비게이션을 일단 숨길수있도록

### 배워야 할 기술들 (프로젝트 외부)

- SpringBoot에서 구축한 api에 접근하기 (CORS문제 해결)
- 노션 사용법

#### 만들어야할 대상 메모

- 어디까지 컴포넌트화 할 것인지

#### 프로젝트 아이디어

- 카테고리에 준하는 어느정도 구분이 있는 메모장
- javascript 게임

##### 참고 사이트

- [변수명 짓는 사이트](https://www.curioustore.com/)
- [AI - Gemini](https://gemini.google.com/app)
- [이미지 - 픽사베이](https://pixabay.com/ko/)

###### 후순위

- 알파벳 정리하기
- 복호화 가능한 js에서 사용하는 암호화 방식

###### rebuild

- fetch => useState 올바르게 되는지 확인

###### 객체비교

```js
const firstCard = {};

// 빈 객체 비교
console.log(firstCard === {}); // true

// 값과 타입 비교
console.log(firstCard == {}); // false
```
