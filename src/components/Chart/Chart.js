import React from "react"

import ChartBar from "./ChartBar"
import "./Chart.css"

const Chart = (props) => {
	return (
		<div className='chart'>
			{props.dataPoints.map((point) => {
				return (
					<Chart
						key={point.label}
						value={point.value}
						maxValue={null}
						label={point.label}
					/>
				)
			})}
		</div>
	)
}

export default Chart
