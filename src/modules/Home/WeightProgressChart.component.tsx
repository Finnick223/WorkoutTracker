import { SparkLineChart } from '@mui/x-charts';
import { Box, Stack, Typography } from '@mui/material';
import { memo } from 'react';

interface WeightProgressChartProps {
  weights: number[];
  dates: Date[];
}

export const WeightProgressChart = memo(
  ({ weights, dates }: WeightProgressChartProps) => {
    return (
      <Box sx={{ width: '100%' }}>
        <Stack direction="row" alignItems="center">
          <Typography variant="h5">Weight Progress</Typography>
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
  },
);
