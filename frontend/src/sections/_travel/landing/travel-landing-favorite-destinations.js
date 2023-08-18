import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';
import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

const ROWS = [
  'First Class Flights',
  '5 Star Accommodations',
  'Inclusive Packages',
  'Latest Model Vehicles',
  'Handpicked Hotels',
  'Accesibility managment',
];

// ----------------------------------------------------------------------

export default function TravelLandingFavoriteDestinations({ tours }) {
  const mdUp = useResponsive('up', 'md');
  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Grid
        container
        rowSpacing={{ xs: 8, md: 0 }}
        columnSpacing={{ xs: 0, md: 3 }}
        alignItems={{ md: 'center' }}
        justifyContent={{ md: 'space-between' }}
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h2">Our Experience Since 2006</Typography>

          <Typography sx={{ my: 3, color: 'text.secondary' }}>
            Since 2006 .....
          </Typography>

          
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: '100%',
              borderRadius: 2,
              position: 'relative',
              overflow: 'hidden',
            }}
            component="img"
            src="/assets/images/office_light.jpg"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

TravelLandingFavoriteDestinations.propTypes = {
  tours: PropTypes.array,
};

// ----------------------------------------------------------------------

function DestinationItem({ order }) {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  return (
    <Box
      sx={{
        width: 1,
        borderRadius: 2,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Image
        alt="Lider"
        src="/assets/images/office_light.jpg"
        ratio={(!mdUp && '1/1') || (order && '1/1') || '4/6'}
      />
    </Box>
  );
}

DestinationItem.propTypes = {
  order: PropTypes.number,
  tour: PropTypes.shape({
    continent: PropTypes.string,
    coverUrl: PropTypes.string,
    location: PropTypes.string,
  }),
};
