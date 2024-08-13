import { Box, Button, CircularProgress } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { useInfiniteQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Fragment } from 'react';
import { getAllUserMeasurements } from 'src/api/userPage';
import MeasurementCard from 'src/modules/User/MeasurementAccordion.component';
import { useAuth } from 'src/providers/UserContext.provider';

function UserHistory() {
  const { token } = useAuth();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ['measurements'],
      queryFn: ({ pageParam }) => getAllUserMeasurements({ token, pageParam }),
      initialPageParam: 0,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length < 10) return undefined;
        return pages.length;
      },
    });

  return (
    <>
      <Grid2>
        <Box
          sx={{
            px: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {status === 'success' ? (
            data.pages.map((group, i) => (
              <Fragment key={i}>
                {group.map((measurement) => (
                  <MeasurementCard
                    key={measurement.id}
                    createdOn={measurement.createdOn}
                    age={measurement.age}
                    height={measurement.height}
                    weight={measurement.weight}
                    arms={measurement.arms}
                    chest={measurement.chest}
                    belly={measurement.belly}
                    legs={measurement.legs}
                  />
                ))}
              </Fragment>
            ))
          ) : (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
              }}
            >
              <CircularProgress />
            </Box>
          )}
          {hasNextPage && (
            <Button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              sx={{ my: 2 }}
              component={motion.div}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              {isFetchingNextPage ? 'Loading more...' : 'Load More'}
            </Button>
          )}
        </Box>
      </Grid2>
    </>
  );
}

export default UserHistory;
