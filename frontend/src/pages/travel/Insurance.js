import { scroller } from 'react-scroll';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Box, Grid, Divider, Container, Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default function InsurancePge() {
  const [visibleElements, setVisibleElements] = useState([]);

  const handleScroll = () => {
    const elements = document.querySelectorAll('.scroll-element');
    const visible = [];

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        visible.push(element.id);
      }
    });

    setVisibleElements(visible);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Smoothly scroll to the first visible element when needed
    if (visibleElements.length > 0) {
      scroller.scrollTo(visibleElements[0], {
        smooth: true,
        offset: -50,
      });
    }
  }, [visibleElements]);

  return (
    <>
      <Helmet>
        <title>Lider - Insurance</title>
      </Helmet>

      <Container>
        <Typography variant="h1" align="center" color="primary">
          Insurance
        </Typography>
        <Divider sx={{ my: 2 }} />

        <Box>
          <Box
            sx={{ my: 2 }}
            id="element1"
            className={`scroll-element slide-from-left ${
              visibleElements.includes('element1') ? 'visible' : ''
            }`}
          >
            <Grid container spacing={2}>
              <Grid item md={6} sx={12}>
                <Typography variant="h3" align="left" >
                  Car Insurance
                </Typography>
                <Typography variant="body1" align="left" >
                  Car Insurance Details
                </Typography>
              </Grid>
              <Grid item md={6} sx={12}>
                <Box component="img" src="/assets/images/new-car.png" alt="" width="100%" />
              </Grid>
            </Grid>
          </Box>
          <Divider sx={{ my: 1 }} />
          <Box
            sx={{ my: 2 }}
            id="element2"
            className={`scroll-element slide-from-right ${
              visibleElements.includes('element2') ? 'visible' : ''
            }`}
          >
            <Grid container spacing={2}>
              <Grid item md={6} sx={12}>
                <Box component="img" src="/assets/images/night-house.png" alt="" width="100%" />
              </Grid>
              <Grid item md={6} sx={12}>
                <Typography variant="h3" align="left" >
                  Home Insurance
                </Typography>
                <Typography variant="body1" align="left" >
                  Home Insurance Details
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Divider sx={{ my: 1 }} />
          <Box
            sx={{ my: 2 }}
            id="element3"
            className={`scroll-element slide-from-left ${
              visibleElements.includes('element3') ? 'visible' : ''
            }`}
          >
            <Grid container spacing={2}>
              <Grid item md={6} sx={12}>
                <Typography variant="h3" align="left" >
                  Health Insurance
                </Typography>
                <Typography variant="body1" align="left" >
                  Health Insurance Details
                </Typography>
              </Grid>
              <Grid item md={6} sx={12}>
                <Box component="img" src="/assets/images/family.png" alt="" width="100%" />
              </Grid>
            </Grid>
          </Box>
          <Divider sx={{ my: 1 }} />
          <Box
            sx={{ my: 2 }}
            id="element4"
            className={`scroll-element slide-from-right ${
              visibleElements.includes('element4') ? 'visible' : ''
            }`}
          >
            <Grid container spacing={2}>
              <Grid item md={6} sx={12}>
                <Box component="img" src="/assets/images/farm.png" alt="" width="100%" />
              </Grid>
              <Grid item md={6} sx={12}>
                <Typography variant="h3" align="left" >
                  Life Insurance
                </Typography>
                <Typography variant="body1" align="left" >
                  Life Insurance Details
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Divider sx={{ my: 1 }} />
          <Box
            sx={{ my: 2 }}
            id="element5"
            className={`scroll-element slide-from-left ${
              visibleElements.includes('element5') ? 'visible' : ''
            }`}
          >
            <Grid container spacing={2}>
              <Grid item md={6} sx={12}>
                <Typography variant="h3" align="left" >
                  Business Insurance
                </Typography>
                <Typography variant="body1" align="left" >
                  Business Insurance Details
                </Typography>
              </Grid>
              <Grid item md={6} sx={12}>
                <Box component="img" src="/assets/images/beach-lady.png" alt="" width="100%" />
              </Grid>
            </Grid>
          </Box>
          <Divider sx={{ my: 1 }} />
          <Box
            sx={{ my: 2 }}
            id="element6"
            className={`scroll-element slide-from-right ${
              visibleElements.includes('element6') ? 'visible' : ''
            }`}
          >
            <Grid container spacing={2}>
              <Grid item md={6} sx={12}>
                <Box
                  component="img"
                  src="/assets/images/official_registration.png"
                  alt=""
                  width="100%"
                />
              </Grid>
              <Grid item md={6} sx={12}>
                <Typography variant="h3" align="left" >
                  Insurable Interest
                </Typography>
                <Typography variant="body1" align="left" >
                  Insurable Interest Details
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
