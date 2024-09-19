import { Box, Button, Container } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { motion } from 'framer-motion';
import { useUserMeasurements } from 'src/hooks/useUserMeasurements';
import { AccordionSkeleton } from 'src/modules/User/LoadingSkeletons.component';
import { MeasurementAccordion } from 'src/modules/User/MeasurementAccordion.component';

function UserHistory() {
  const {
    infiniteData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    infiniteStatus,
  } = useUserMeasurements();

  return (
    <>
      <Grid2>
        <Container maxWidth="md">
          <Box
            sx={{
              py: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {infiniteStatus === 'success' && infiniteData ? (
              <MeasurementAccordion data={infiniteData} />
            ) : (
              <AccordionSkeleton />
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
        </Container>
      </Grid2>
    </>
  );
}

export default UserHistory;
