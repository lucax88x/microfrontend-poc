import { useMemo } from "preact/hooks";
import "../index.css";

import React from "preact";
import { type AxisOptions, Chart } from "react-charts";
import useDemoConfig from "../useDemoConfig";

export const Line = () => {
	const { data } = useDemoConfig({
		series: 10,
		dataType: "time",
	});

	const primaryAxis = useMemo<
		AxisOptions<(typeof data)[number]["data"][number]>
	>(
		() => ({
			getValue: (datum) => datum.primary as unknown as Date,
		}),
		[],
	);

	const secondaryAxes = useMemo<
		AxisOptions<(typeof data)[number]["data"][number]>[]
	>(
		() => [
			{
				getValue: (datum) => datum.secondary,
			},
		],
		[],
	);

	return (
		<div style={{ width: 600, height: 400 }}>
			<Chart
				options={{
					data,
					primaryAxis,
					secondaryAxes,
				}}
			/>
		</div>
	);
};

export default Line;
