import ExpenseItem from './ExpenseItem';
import Card from '../ui//Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

function Expenses({ expenses }) {
  const [expensesToView, setExpensesToView] = useState(expenses);

  function onFilterExpenses(year) {
    setExpensesToView(
      expensesToView.filter(
        (expense) => Number(year) === Number(expense.date.getFullYear())
      )
    );
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter filterExpenses={onFilterExpenses} />
      {expensesToView.map((expense) => (
        <ExpenseItem key={expense.id} expenseInfo={expense} />
      ))}
    </Card>
  );
}

export default Expenses;
