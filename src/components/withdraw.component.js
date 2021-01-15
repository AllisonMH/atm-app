import React, {useState} from 'react';
import EnterPin from './enterpin.component';

const Withdraw =()=> {

  const[balance, setBalance] = useState(1000);
  const[amount, setAmount] = useState();


  function toWithdraw(balance, amount) {
    let newBalance = parseFloat(balance) - parseFloat(amount);
    return setBalance(newBalance);
  }

  function toDeposit(balance, amount) {
    let newBalance = parseFloat(balance) + parseFloat(amount);
    return setBalance(newBalance);
  }

  function handleUserInput(event) {
    setAmount(event.target.value)
  }

  return(
    <>
    <EnterPin />
    <div>
      <input placeholder={0.00} onChange={handleUserInput}/>
      <div>
        <button onClick={()=>toWithdraw(balance, amount)}> Withdraw </button>
        <button onClick={()=>toDeposit(balance, amount)}> Deposit </button>
      </div>
      <div> New Balance {balance} </div>
    </div>
    </>
  )

}

export default Withdraw;
