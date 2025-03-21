import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead className={s.list}>
        <tr>
          <th className={s.value}>Type</th>
          <th className={s.value}>Amount</th>
          <th className={s.value}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(transaction => {
          return (
            <tr className={s.tableLine} key={transaction.id}>
              <td className={s.td}>{transaction.type}</td>
              <td className={s.td}>{transaction.amount}</td>
              <td className={s.td}>{transaction.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
