import { Tab, Tabs, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { motion } from 'framer-motion';
import { useMatch, Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { AnimatePage } from 'src/animations/AnimatePage';
import { AuthorizedRoute } from 'src/enums/routes.enums';

export const UserPageLayout = () => {
  const matchUser = useMatch(AuthorizedRoute.User);
  const matchHistory = useMatch(AuthorizedRoute.History);
  const matchCharts = useMatch(AuthorizedRoute.Charts);

  const currentTab = matchUser
    ? AuthorizedRoute.User
    : matchHistory
      ? AuthorizedRoute.History
      : matchCharts
        ? AuthorizedRoute.Charts
        : false;

  return (
    <AnimatePage>
      <Grid2 container direction={'column'} sx={{ px: { xs: 2, sm: 8 } }}>
        <Grid2 pb={1}>
          <Tabs value={currentTab} centered>
            <Tab
              label={
                <Typography
                  component={motion.div}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 },
                  }}
                >
                  NEW
                </Typography>
              }
              value={AuthorizedRoute.User}
              to={AuthorizedRoute.User}
              component={Link}
            />
            <Tab
              label={
                <Typography
                  component={motion.div}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 },
                  }}
                >
                  HISTORY
                </Typography>
              }
              value={AuthorizedRoute.History}
              to={AuthorizedRoute.History}
              component={Link}
            />
            <Tab
              label={
                <Typography
                  component={motion.div}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 },
                  }}
                >
                  CHARTS
                </Typography>
              }
              value={AuthorizedRoute.Charts}
              to={AuthorizedRoute.Charts}
              component={Link}
            />
          </Tabs>
        </Grid2>
        <Outlet />
      </Grid2>
    </AnimatePage>
  );
};
