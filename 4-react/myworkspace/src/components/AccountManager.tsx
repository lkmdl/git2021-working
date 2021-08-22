// 계좌관리

import { useState } from "react";

// 버튼: 입금버튼, 출금버튼
// 버튼 클릭시에 입금 금액 또는 출금 금액을 입력 받을 수 있음.

// 목록: 입금, 출금액 목록을 ul > li로 표시한다.
// 입금 금액은 <li> 입금: 금액 (녹색)</li> 으로 표시
// 출금 금액은 <li> 출금: -금액 (빨간색)</li> 으로 표시

// 잔액: 잔액을 입금, 출금 버튼 우측에 표시한다.

const AccountManager = () => {

const [logs, setLogs] = useState<number[]>([]);


// 입/출금 처리하는 함수
// transact : 거래하다, trasction : 거래
const transact = (mod: "deposit" | "withdraw") => {
  const msg = mod == "deposit" ? "입금금액" : "출금금액";
  const input = prompt(`${msg}을 입력해주세요.`);

  //입금이면 양수, 출금이면 음수
  let money = 0;
  if(input) {
    money = mod === "deposit" ? + input : -input;
  }

  // 입출금 이력 state에 입력값을 추가
  setLogs([money, ...logs]);
};

// 출금할 수 있는지 확인하는 함수
// 현재 입출금기록, 출금금액
const check = (logs: number[], money: number) => {
  let sum=0;
  if(logs.length > 0){

  }
}


  return (
  <div>
    <h2>AccountManager</h2>
    <button
    onClick={() => {

    }}
    >
      입금
      </button>
    <button>출금</button>
    <span>잔액: 10000</span>
    <ul>
      <li style={{ color :"red"}}> 출금 : -10000</li>
      <li style={{ color :"green"}}> 입금 : 20000</li>
    </ul>
  </div>
  );
};

export default AccountManager;
