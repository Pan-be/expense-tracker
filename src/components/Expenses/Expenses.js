import React, { useState } from "react"

import Cards from "../UI/Card"
import ExpensesList from "./ExpensesList"
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter"
import "./Expenses.css"

function Expenses(props) {
	const [chosenYear, setChosenYear] = useState("2022")
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
				<ExpensesList expenses={filteredExpense} />
			</Cards>
		</div>
	)
}

export default Expenses
