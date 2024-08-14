import { Box, Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts';
import { useQuery } from '@tanstack/react-query';
import { getAllUserMeasurements } from 'src/api/userPage';
import { UserMeasurement } from 'src/client/src';
import useAuthStatus from 'src/hooks/useAuth';

interface MeasurementChartProps {
  dataKey: keyof UserMeasurement;
}

export const MeasurementChart: React.FC<MeasurementChartProps> = ({
  dataKey,
}) => {
  const { token } = useAuthStatus();
  const { data, status } = useQuery({
    queryKey: ['WeightChart', dataKey],
    queryFn: () => getAllUserMeasurements({ token, pageParam: 0 }),
  });

  if (status !== 'success') {
    return <Typography>Loading...</Typography>;
  }

  const filteredData = data.filter(
    (item) => item.createdOn && item[dataKey] !== undefined,
  );
  const xAxisData = filteredData.map(
    (item) => Date.parse(item.createdOn ?? '') || null,
  );
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
            data: xAxisData,
            scaleType: 'time',
            valueFormatter: (value: number) => formatDate(value),
          },
        ]}
        series={[{ data: seriesData }]}
        height={350}
      />
    </Box>
  );
};
