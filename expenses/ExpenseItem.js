import { useState } from 'react';
import Calendar from './Calendar';
import Card from '../ui/Card';
import './ExpenseItem.css';

function ExpenseItem({ expenseInfo }) {
  const [title, setTitle] = useState(expenseInfo.title);

  function handleClick() {
    setTitle('Updated!');
  }

  return (
    <Card className='expense-item'>
      <Calendar date={expenseInfo.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${expenseInfo.amount}</div>
        <button onClick={handleClick}>Change Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
