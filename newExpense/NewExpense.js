import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css';

function NewExpense({ addExpense }) {
  function createExpense(expense) {
    addExpense({ ...expense, id: Math.random().toString() });
  }

  return (
    <div className='new-expense'>
      <NewExpenseForm createExpense={createExpense} />
    </div>
  );
}

export default NewExpense;
