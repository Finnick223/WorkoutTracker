import { Box, CircularProgress } from '@mui/material';
import { LineChart } from '@mui/x-charts';
import { UserMeasurement } from 'src/client/src';
import { useUserMeasurements } from 'src/hooks/useUserMeasurements';

interface MeasurementChartProps {
  dataKey: keyof UserMeasurement;
}

export const MeasurementChart: React.FC<MeasurementChartProps> = ({
  dataKey,
}) => {
  const { data, status } = useUserMeasurements();

  if (status !== 'success' || !data) {
    return (
      <Box
        width={{ xs: '360px', sm: '500px', md: '600px', lg: '700px' }}
        height={'300px'}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress />
      </Box>
    );
  }

  const filteredData = data.filter(
    (item) => item.createdOn && item[dataKey] !== undefined,
  );
  const xAxisData = filteredData.map((item) => {
    const timestamp = Date.parse(item.createdOn ?? '');
    const date = new Date(timestamp);
    date.setHours(0, 0, 0, 0);
    return date.getTime();
  });
  const seriesData = filteredData.map((item) => item[dataKey] as number);

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const options = { month: 'short', day: 'numeric' } as const;
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <Box width={{ xs: '360px', sm: '500px', md: '600px', lg: '700px' }}>
      <LineChart
        xAxis={[
          {
            data: xAxisData.reverse(),
            scaleType: 'time',
            valueFormatter: (value: number) => formatDate(value),
          },
        ]}
        series={[{ data: seriesData.reverse() }]}
        height={350}
      />
    </Box>
  );
};
