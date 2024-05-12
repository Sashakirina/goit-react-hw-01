import style from './TransactionHistoryList.module.css'

function TransactionHistoryList({type, amount, currency}) {
  return (
    <tr className={style.tr}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  )
}

export default TransactionHistoryList