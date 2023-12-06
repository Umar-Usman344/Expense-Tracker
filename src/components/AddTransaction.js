import React, { useState, useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const {addTransaction} = useContext(GlobalContext);
    const {transactions} = useContext(GlobalContext) ;
    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts.reduce((acc, item) => (acc += item), 0);
    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
       
        if(newTransaction.amount<1){
          if(-(newTransaction.amount)>income){
            alert("Low income");
            return;
          }
           
          addTransaction(newTransaction);
        }
        else{
          addTransaction(newTransaction);
        }
        
    }
   
    return (
       <>
  <h3>Add new transaction</h3>
  <form onSubmit={onSubmit} >
    <div className="form-control">
      <label htmlFor="text">description</label>
      <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
    </div>
    <div className="form-control">
      <label htmlFor="amount">
        Amount <br />
        (negative - expense, positive - income)
      </label>
      <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
    </div>
    <button className="btn">Add transaction</button>
  </form>
        </>
        )
   
}
    
    
