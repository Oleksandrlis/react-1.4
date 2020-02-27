import React from "react";

const TransactionHistory = ({item}) => {
    // const {item} = props;
    
  return (

        <tr>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>

  );
};

export default TransactionHistory;
