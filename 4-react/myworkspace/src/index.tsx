import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// 모듈 :부분코드
// App.tsx 모듈(을 가져오고 App 이름으로 선언함)
// export default로 내보낸 객체가 App이름으로 선언됨
import App from './App'; // App.tsx

// 파일이름 함수이름 임포트에서 쓰는 이름 모두 맞춰준다


import reportWebVitals from './reportWebVitals';

// id가 root인 요소에 App 컴포넌트를 랜더링함
// 컴포넌트(componetnt) :부분 UI, 기능을 포함하는 조각 UI
// 템플릿(template) :부분UI, UI구조만 가짐
ReactDOM.render(
  <React.StrictMode>
    <App /> {/* App 컴포넌트 */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();