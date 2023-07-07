import { Box, Breadcrumbs, IconButton, Typography } from '@mui/material';
import { HomeIcon, NavigateNextIcon } from '@availity/mui-icon';

export const HeaderSection = (): JSX.Element => {
  return (
    <Box>
      <Breadcrumbs aria-label="breadcrumbs" separator={<NavigateNextIcon fontSize="small" />}>
        <IconButton size="small">
          <HomeIcon></HomeIcon>
        </IconButton>
        <Typography>yoooooo</Typography>
      </Breadcrumbs>
    </Box>
  );
};
