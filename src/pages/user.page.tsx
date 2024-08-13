import { Stack } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Outlet } from 'react-router-dom';
import { AnimatePage } from 'src/animations/AnimatePage';
import CustomLink from 'src/components/Link/Link.component';
import { AuthorizedRoute } from 'src/enums/routes.enums';

export const UserPageLayout = () => {
  return (
    <>
      <AnimatePage>
        <Grid2 container direction={'column'} sx={{ px: { xs: 2, sm: 8 } }}>
          <Grid2>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={6}
              sx={{ pb: { xs: 2, sm: 2 } }}
            >
              <CustomLink href={AuthorizedRoute.User} color="inherit">
                New
              </CustomLink>
              <CustomLink href={AuthorizedRoute.History} color="inherit">
                History
              </CustomLink>
              <CustomLink href={AuthorizedRoute.Charts} color="inherit">
                Charts
              </CustomLink>
            </Stack>
          </Grid2>
          <Outlet />
        </Grid2>
      </AnimatePage>
    </>
  );
};
