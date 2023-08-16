import { Box, Breadcrumbs, IconButton, Typography, Link } from '@mui/material';
import { HomeIcon, NavigateNextIcon } from '@availity/mui-icon';

export const HeaderSection = (): JSX.Element => {
  return (
    <Box marginBottom=".5rem">
      <Breadcrumbs
        aria-label="breadcrumbs"
        separator={<NavigateNextIcon sx={{ color: 'grey.300', fontSize: '.75rem' }} />}
      >
        <IconButton title="Home" size="small" sx={{ color: 'grey.300' }}>
          <HomeIcon />
        </IconButton>
        <Link underline="hover" href="#" color="grey.300" sx={{ fontWeight: '300' }}>
          Previous Page
        </Link>
        <Typography>Current Page</Typography>
      </Breadcrumbs>
    </Box>
  );
};
