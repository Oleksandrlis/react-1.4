import React from "react";
import transactions from "../transactions.json";
import Transaction from "./transaction/Transaction.js";


const App = () => {
  return (
    <>
      <Transaction transactions={transactions} />
    </>
  );
};

export default App;
