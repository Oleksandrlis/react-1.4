import React from 'react'
import TransactionHistory from "./TransactionHistory.js"
import styles from "./Transaction.module.css"

const Transaction = (props) => {
    const {transactions} = props;
    
    return (
   
         <table className={styles.transactionHistory}>
      <thead>
        <tr>
           
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
      {transactions.map(item => (<TransactionHistory  item = {item}/>
            ))}

      </tbody>
    </table>
        
    );
};

export default Transaction;