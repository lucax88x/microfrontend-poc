import '../index.css';

import useDemoConfig from '../useDemoConfig';
import React from 'react';
import { AxisOptions, Chart } from 'react-charts';

export const Line = () => {
  const { data } = useDemoConfig({
    series: 10,
    dataType: 'time',
  });

  const primaryAxis = React.useMemo<
    AxisOptions<(typeof data)[number]['data'][number]>
  >(
    () => ({
      getValue: (datum) => datum.primary as unknown as Date,
    }),
    [],
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<(typeof data)[number]['data'][number]>[]
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
