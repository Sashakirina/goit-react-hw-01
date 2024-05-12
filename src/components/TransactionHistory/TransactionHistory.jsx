import style from './TransactionHistory.module.css';

import TransactionHistoryList from "../TransactionHistoryList/TransactionHistoryList";

const tableNames = ["Type", "Amount", "Currency"];

function TransactionHistory({items}) {
  return (
    <table className={style.table}>
  <thead className={style.thead}>
    <tr>
      {tableNames.map((el, index)=> <th className={style.trHead} key={index}>{el}</th>)}
    </tr>
  </thead>

  <tbody>
    {items.map(({id, type, amount, currency}) => {return<TransactionHistoryList key={id} 
    type={type} amount={amount} currency={currency}/>})}
  </tbody>
</table>
  )
}

export default TransactionHistory