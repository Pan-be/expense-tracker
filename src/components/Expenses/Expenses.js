import React, { useState } from "react"

import Cards from "../UI/Card"
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter"
import "./Expenses.css"

function Expenses(props) {
	const [chosenYear, setChosenYear] = useState("2020")
	const saveExpensesFilterHandler = (year) => {
		setChosenYear(year)
		console.log(chosenYear)
	}
	return (
		<div>
			<Cards className='expenses'>
				<ExpensesFilter
					selected={chosenYear}
					onFilteredData={saveExpensesFilterHandler}
				/>
				<ExpenseItem
					title={props.expenses[0].title}
					amount={props.expenses[0].amount}
					date={props.expenses[0].date}
				/>
				<ExpenseItem
					title={props.expenses[1].title}
					amount={props.expenses[1].amount}
					date={props.expenses[1].date}
				/>
				<ExpenseItem
					title={props.expenses[2].title}
					amount={props.expenses[2].amount}
					date={props.expenses[2].date}
				/>
			</Cards>
		</div>
	)
}

export default Expenses
