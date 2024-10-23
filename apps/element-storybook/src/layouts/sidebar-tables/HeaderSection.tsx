import { Box, Breadcrumbs, HomeIcon, IconButton, Link, Typography } from '@availity/element';

export const HeaderSection = (): JSX.Element => {
  return (
    <Box sx={{ marginBottom: '.5rem' }}>
      <Breadcrumbs aria-label="breadcrumbs">
        <IconButton title="Home" sx={{ color: 'grey.300' }}>
          <HomeIcon fontSize="small" />
        </IconButton>
        <Link href="#" color="grey.300" sx={{ fontWeight: '300' }}>
          Previous Page
        </Link>
        <Typography>Current Page</Typography>
      </Breadcrumbs>
    </Box>
  );
};
