import { useRef } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Grid, Divider, CardMedia } from '@mui/material';

import { useResponsive } from 'src/hooks/use-responsive';
import { useBoundingClientRect } from 'src/hooks/use-bounding-client-rect';

// ----------------------------------------------------------------------

const SUMMARY = [
  {
    title: 'Vehicle Registration',
    description: 'Nunc nonummy metus. Donec elit libero',
    icon: '/assets/icons/ic_popularity.svg',
  },
  {
    title: 'Vehicle Insurance',
    description: 'Nunc nonummy metus. Donec elit libero',
    icon: '/assets/icons/ic_reputation.svg',
  },
  {
    title: 'Translation',
    description: 'Nunc nonummy metus. Donec elit libero',
    icon: '/assets/icons/ic_secure_payment.svg',
  },
];

// ----------------------------------------------------------------------

export default function TravelLandingAbout() {
  const mdUp = useResponsive('up', 'md');

  const containerRef = useRef(null);

  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container && container.left + 20;

  return (
    <Box sx={{ pb: { xs: 5, md: 5 } }}>
      <Container sx={{ textAlign: 'center' }}>
        <Grid container spacing={2} sx={{ mb: '50px' }}>
          <Grid item md={6} xs={12}>
            <Stack spacing={2} xs={{ my: 'auto' }}>
              <Typography variant="h4" align="left">
                Our Experience Since 2006
              </Typography>
              <Typography variant="body1" align="left">
                Od 2006 roku Lider działa jako pierwsze biuro w naszym regionie, oferując szeroki
                wybór ubezpieczeń komunikacyjnych, majątkowych, na życie oraz rolniczych. \n
                Zapewniamy kompleksową obsługę i wsparcie w doborze odpowiednich polis
                ubezpieczeniowych.
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={6} xs={12}>
            <CardMedia
              sx={{ height: '400px' }}
              image="assets/images/office_light.jpg"
              title="green iguana"
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} />

        <Grid container spacing={2} sx={{ mb: '50px' }}>
          <Grid item md={6} xs={12}>
            <CardMedia
              sx={{ height: '400px' }}
              image="assets/images/put_tag_registration.png"
              title="green iguana"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Stack spacing={2} xs={{ my: 'auto' }}>
              <Typography variant="h4" align="left">
                Vehicle Registration in Poland and Abraod
              </Typography>
              <Typography variant="body1" align="left">
                Jako biuro Lider świadczymy usługi pośrednictwa w rejestracji pojazdów sprowadzanych
                zza granicy oraz zakupionych w Polsce. \n Nasz zespół profesjonalistów zajmuje się
                także opłatami i formalnościami w urzędach.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} />
        <Grid container spacing={2} sx={{ mb: '50px' }}>
          <Grid item md={6} xs={12}>
            <Stack spacing={2} xs={{ my: 'auto' }}>
              <Typography variant="h4" align="left">
                Precision and Reliability in Translations
              </Typography>
              <Typography variant="body1" align="left">
                W biurze Lider cenimy precyzję i rzetelność w tłumaczeniach. \n Jesteśmy pasjonatami
                języków obcych i śledzimy wszelkie zmiany lingwistyczne. \n Gwarantujemy, że każde
                tłumaczenie, bez względu na język i temat, będzie dokładne i profesjonalne
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={6} xs={12}>
            <CardMedia
              sx={{ height: '400px' }}
              image="assets/images/classy_officer.png"
              title="green iguana"
            />
          </Grid>
        </Grid>
      </Container>
      <Divider sx={{ my: 3 }} />
    </Box>
  );
}
