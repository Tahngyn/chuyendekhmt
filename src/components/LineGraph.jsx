import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	BarChart,
	Bar,
} from 'recharts'

const LineGraph = ({ data, label }) => (
	<>
		{data.length > 0 && (
			<div className="charts-container mx-auto relative flex items-center">
				<h3 className="text-center">{label}</h3>
				<div className="chart flex justify-center">
					<LineChart
						width={400}
						height={300}
						data={data}
						margin={{
							top: 5,
							right: 30,
							left: 0,
							bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="step" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line
							type="monotone"
							dataKey="value"
							stroke="#508D4E"
							strokeWidth="3"
						/>
					</LineChart>
				</div>
			</div>
		)}
	</>
)

export default LineGraph
