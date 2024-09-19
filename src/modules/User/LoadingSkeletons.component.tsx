import { Stack, Skeleton } from '@mui/material';

export const AccordionSkeleton = () => {
  return (
    <Stack direction="column" width={'80%'} height={'60vh'} spacing={1}>
      {Array.from({ length: 10 }).map((_, index) => (
        <Skeleton
          key={index}
          variant="rectangular"
          width={'100%'}
          height={'70px'}
        />
      ))}
    </Stack>
  );
};

export const FormSkeleton = () => {
  return (
    <Stack direction="column" spacing={3} width="100%">
      {Array(6)
        .fill('')
        .map((_, index) => (
          <Skeleton key={index} variant="rounded" width="100%" height="60px" />
        ))}
    </Stack>
  );
};
