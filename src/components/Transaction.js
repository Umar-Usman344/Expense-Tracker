import React, { useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
export const Transaction = ({ transaction}) => {
const {deleteTransaction} = useContext(GlobalContext);
const {editTransaction} = useContext(GlobalContext);
const {transactions} = useContext(GlobalContext) ;
const t_amounts = transactions.map(transaction => transaction.amount);

function editTransactions (id){
  let text = prompt("Enter the new description");
  let amount = +prompt("Enter the new amount");
  if(amount<1){
    if(-(amount)>t_amounts){
      alert("Low income");
      return;
    }
    else{
      editTransaction({
        text,amount,id
      })
    }
  }
  else{
    editTransaction({
      text,amount,id
    })
  }
  
}

    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
          { transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>

          <button onClick={()=>editTransactions(transaction.id)} className="edit-transaction">+</button>
        </li> 
    )
    }