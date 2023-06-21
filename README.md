0. Before README
  : 해당 프로젝트는 인프런에서 구매한 리액트 공부를 위한 산출물이다.
    해당 과정에서는 자바스크립트 기본 개념과 스크립트 엔진 작동방식에 대한 이해와 react, react-native를 통한 웹 & 앱 구현 방식을 익혔다.

1. 프로젝트명 : 리액트 기반의 쇼핑몰

2. 사용기술 : React, React-router-dom, Visual Studio Code, Javascript, React-Native, Node.js(multer,Axios)

3. 주요 기술 및 내용

  3-0. React는 Javascript 기반의 엔진과 언어로 구동되기에 그에 대한 이해도가 중요하다고 느껴, 따로 스터리를 진행하였다.
       '3-1'은 Javascript를 공부한 내용이며,
       '3-2'부터 React 프로젝트에서 핵심 기술들을 나열하였다.


  3-1. JavaScript의 기본 이해 
    
    (1) 큐와 스택 
      : 스텍은 선입후출의 데이터 구조이며, 큐는 선입선출 형식의 데이터 구조이다.
    
       ![image](https://github.com/hamahama9659/React_grab-market-client/assets/116577341/015bc5f3-4b25-4848-8957-011147953694)

    (2) 호이스팅 (hoisting)
      : 호이스팅이란 코드 실행시 가장 먼저 작동되는 단계로, 
        변수/ 함수 선언문이 해당 '스코프'의 최상단으로 끌어올려져 먼저 실행되는 현상이다.

        ex)
        ![image](https://github.com/hamahama9659/React_grab-market-client/assets/116577341/04ac146a-dcca-4c1a-a4cd-02b0eb0ca83e)


    (3) 함수 선언문과 표현식
      :  

      ![image](https://github.com/hamahama9659/React_grab-market-client/assets/116577341/95ca24fc-62aa-4d2c-98f7-3675b78754fb)
    ** 주의사항 : 함수 표현식을 지향하자. (함수 선언문은 할당 부분까지 호이스팅 되어 중복 선언시 override가 발생할 수 있다.) **

    (4) 실행 컨텍스트, 스코프 체인
      : 컨텍스트란 지역변수와 전역변수가 존재하는 지역공간과 전역공간을 일컫는 말이다.
        스코프 체인은 스텍의 가장 상단의 컨텍스트에서 호출 된 변수를 경로 상 가장 가까운 컨텍스트의 변수를 호출하는 것을 일컫는다.
        
      ![image](https://github.com/hamahama9659/React_grab-market-client/assets/116577341/f23dc747-0b31-42a3-93b2-9ffbab511c4f)

    
  3-2. React

    (1) useState와 useEffect
      : state는 리액트에서 파라미터 역할을 하고, useEffect는 state의 변화 시 실행되는 콜백함수이다.
        react는 state의 상태에 따라 비동기적으로 작동하는 원리의 웹 구성이다.

![image](https://github.com/hamahama9659/React_grab-market-client/assets/116577341/2d2a3fba-d637-4454-b9d3-4f2bba68fe43)

    (2) axios
      : 비동기 통신을 위해 Node.js의 axios를 활용하여, 통신의 방식(GET,POST)과 성공(then), 실패(catch)를 유도하였다.


    (3) react-router-dom (페이지의 전환)
      : 여기서 리액트는 실질적인 페이지의 '이동'이 아닌 **'페이지 일부분의 컨텍스트 전환'**을 이루어 보여주는 형식이라는 것을 알게 되었다.
       페이지의 전환은 Switch, Route, Link 컴포넌트를 활용하였고, 

![image](https://github.com/hamahama9659/React_grab-market-client/assets/116577341/7d9fa8a5-2e8e-4564-bd88-f8fed0f1c9ef)
![image](https://github.com/hamahama9659/React_grab-market-client/assets/116577341/eb1ade9f-4e63-4962-ba26-91fb89ae529d)

       POST 실행 후 '뒤로가기'로 인한 중복 실행을 방지 하기 위해 useHistory 컴포넌트를 사용했다.

![image](https://github.com/hamahama9659/React_grab-market-client/assets/116577341/3a1888a7-b7dd-4c84-b473-1c03253af87b)

  
  3-3. 서버 구축    
    : 해당 프로젝트는 내 깃헙 레포지토리에 'React_grab-market-server ' 올려두었다.
      웹 에플리케이션 서버에서 db는 sqllite를 사용하였고, 파일 업로드를 위해 Node.js의 Multer라는 미들웨어를 활용했다.

     ![image](https://github.com/hamahama9659/React_grab-market-client/assets/116577341/d2df419c-8b62-4bc7-82df-c9d630d1900e)

      또한 single 메소드와 array로 메소드로 단일/다중 파일 업로드를 둘 다 구현했다.

  3-4. 모바일 버전 앱 구현
    : React-Navigation의 Stack, navigationContainer 컴포넌트로 stack 구조의 화면 전환을 구성했고, 
      react-native로 모바일 환경의 자연스러운 스크롤과 터치를 위한 페이지를 구성했다.

    ![image](https://github.com/hamahama9659/React_grab-market-client/assets/116577341/beeb887d-c94b-49c6-9000-cc333c4584dd)
![image](https://github.com/hamahama9659/React_grab-market-client/assets/116577341/2b3dadc6-afda-47c0-b122-a9361c4fdbd7)



4. After Project
   : 프로젝트를 마치며, 무엇보다 자바스크립트의 동작 원리를 익힌 것이 크다고 느껴진다. 어떤 자바스크립트 기반의 코딩을 하더라도 어려움이 없을 것이다.
    또한 리액트로 최신형 반응형 웹의 구성과 작동 방식에 대한 이해를 할 수 있었고, 리액트를 활용한 웹/앱 개발에 있어 한 층 더
    퀄리티 높은 산출물을 낼 수 있을 것 같다.






    
