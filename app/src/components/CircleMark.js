import React from "react";
import { line } from "d3";

const CircleMark = ({
	data,
	yScale,
	xScale,
	yValue,
	xValue,
	toolTipFormat,
	markRadius = 8,
}) => {
	return (
		<>
			<path
				stroke="black"
				d={line().x((d) => xScale(xValue(d)).y((d) => yScale(yValue(d)))(data))}
			/>
			{data.map((d) => (
				<circle
					className="mark"
					cx={xScale(xValue(d))}
					cy={yScale(yValue(d))}
					r={markRadius}
				>
					<title>{toolTipFormat(xValue(d))}</title>
				</circle>
			))}
		</>
	);
};

export default CircleMark;
