import { useState } from 'react';
import './NewExpenseForm.css';

function NewExpenseForm({ createExpense }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ title, date, amount });
    createExpense({ title, amount, date: new Date(date) });
    setTitle('');
    setDate('');
    setAmount('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor='title'>Title</label>
          <input
            id='title'
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='amount'>Amount</label>
          <input
            id='amount'
            type='number'
            min='0.01'
            step='0.01'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='date'>Date</label>
          <input
            id='date'
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}

export default NewExpenseForm;
