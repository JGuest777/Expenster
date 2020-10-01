import expenses from '../fixtures/expenses';
import expensesReducer from '../../reducers/expenses';

test('should set default expense values', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should addExpense to expenses', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: expenses[0],
  };
  const state = expensesReducer(undefined, action);
  expect(state).toEqual([expenses[0]]);
});

test('should removeExpense from expenses by ID', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should NOT removeExpense if ID is not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1',
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should editExpense from expenses by ID', () => {
  const description = 'text changed';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      description,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].description).toBe(description);
});

test('should NOT editExpense given invalid ID', () => {
  const description = 'text changed';
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      description,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
