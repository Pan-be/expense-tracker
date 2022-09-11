import React, { useState } from "react"

import Cards from "../UI/Card"
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter"
import "./Expenses.css"

function Expenses(props) {
	const [chosenYear, setChosenYear] = useState("2020")
	const saveExpensesFilterHandler = (year) => {
		setChosenYear(year)
	}
	const filteredExpense = props.expenses.filter((expense) => {
		return expense.date.getFullYear().toString() === chosenYear
	})
	return (
		<div>
			<Cards className='expenses'>
				<ExpensesFilter
					selected={chosenYear}
					onFilteredData={saveExpensesFilterHandler}
				/>
				{filteredExpense.map((expense) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))}
			</Cards>
		</div>
	)
}

export default Expenses
