import { SparkLineChart } from '@mui/x-charts';
import { Box, Stack } from '@mui/material';
import { memo } from 'react';

interface ExerciseChartProps {
  weights: number[];
  dates: Date[];
}

export const ExerciseChart = memo(({ weights, dates }: ExerciseChartProps) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack direction="row" alignItems="center">
        {weights.length > 0 && (
          <SparkLineChart
            data={weights}
            xAxis={{
              scaleType: 'time',
              data: dates,
            }}
            height={100}
            showTooltip
            showHighlight
          />
        )}
      </Stack>
    </Box>
  );
});
