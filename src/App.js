import Expenses from "./components/Expenses"

function App() {
	const expenses = [
		{ title: "zakup bydła", amount: 8000, date: new Date(2022, 9, 8) },
		{ title: "zakup owsa", amount: 356.23, date: new Date(2022, 7, 14) },
		{ title: "zakup paszy", amount: 25.98, date: new Date(2022, 9, 1) },
	]

	return (
		<div>
			<h2>Let's get started!</h2>
			<Expenses expenses={expenses} />
		</div>
	)
}

export default App
