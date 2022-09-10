import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"

function App() {
	const expenses = [
		{ title: "zakup bydła", amount: 8000, date: new Date(2022, 9, 8) },
		{ title: "zakup owsa", amount: 356.23, date: new Date(2022, 7, 14) },
		{ title: "zakup paszy", amount: 25.98, date: new Date(2022, 9, 1) },
	]

	const addExpenseHandler = (expense) => {
		console.log("In App.js")
		console.log(expense)
	}

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses expenses={expenses} />
		</div>
	)
}

export default App
