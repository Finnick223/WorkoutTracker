import { Box, Container, Stack, Typography } from '@mui/material';
import { AnimatePage } from 'src/animations/AnimatePage';
import CustomLink from 'src/components/Link/Link.component';
import { AuthorizedRoute } from 'src/enums/routes.enums';
function UserCharts() {
  return (
    <>
      <AnimatePage>
        <Container maxWidth="lg">
          <Box
            sx={{
              px: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={12}
              sx={{ pb: { xs: 2, sm: 2 } }}
            >
              <CustomLink href={AuthorizedRoute.User} color="inherit">
                New Measurement
              </CustomLink>
              <CustomLink href={AuthorizedRoute.History} color="inherit">
                History
              </CustomLink>
              <CustomLink href={AuthorizedRoute.Charts} color="inherit">
                Wykresy
              </CustomLink>
            </Stack>
            <Typography variant="h2" sx={{ mb: 4 }}>
              Wykresy
            </Typography>
          </Box>
        </Container>
      </AnimatePage>
    </>
  );
}

export default UserCharts;
