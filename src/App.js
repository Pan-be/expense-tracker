import React, { useState } from "react"

import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"

const DUMMY_EXPENSES = [
	{
		id: "e1",
		title: "zakup bydła",
		amount: 8000,
		date: new Date(2022, 9, 8),
	},
	{
		id: "e2",
		title: "zakup owsa",
		amount: 356.23,
		date: new Date(2022, 7, 14),
	},
	{
		id: "e3",
		title: "zakup paszy",
		amount: 25.98,
		date: new Date(2022, 9, 1),
	},
]

function App() {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

	const addExpenseHandler = (expense) => {
		setExpenses((prevState) => [expense, ...prevState])
	}

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses expenses={expenses} />
		</div>
	)
}

export default App
