import { scroller } from 'react-scroll';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Box, Grid, Divider, Container, Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default function RegistrationPage() {
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
        <title>Lider - Registration</title>
      </Helmet>

      <Container>
        <Typography variant="h1" align="center" color="primary">
          Registration
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
                <Typography variant="h3" align="left">
                  Personal vehicle registration
                </Typography>
                <Typography variant="body1" align="left">
                  Registering a car, regardless of whether it comes from Poland or from another
                  country, is like a journey through registration lands. You have to overcome
                  mountains of documents, cross the borders of bureaucracy and face exotic
                  regulations. Registering a car, regardless of whether it comes from Poland or from
                  another country, is like a journey through registration lands. You have to
                  overcome mountains of documents, cross borders of bureaucracy and Office Leader is
                  your reliable guide in this registration safari!
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
                <Typography variant="h3" align="left">
                  Vehicle registration out of state
                </Typography>
                <Typography variant="body1" align="left">
                  Vintage car registration is a real journey back in time! It is a unique experience
                  that requires special attention and care. The Leader office is here to help you on
                  this unique registration journey! Our enthusiasts of vintage vehicles understand
                  the value and history of these cars. We know all the secrets of registering
                  vintage cars and we know how to make your treasure officially recognized as an
                  automotive gem. We will help you collect the necessary documents, fill in the
                  appropriate forms and guide you through the labyrinths of bureaucracy.
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
                <Typography variant="h3" align="left">
                  Vehicle registration renewal
                </Typography>
                <Typography variant="body1" align="left">
                  Car registration is like a journey into the jungle of bureaucracy! So many
                  documents, so many queues, so much confusion. But do not worry! Office Leader is
                  our commando team ready to take on this mission on your behalf!
                </Typography>
              </Grid>
              <Grid item md={6} sx={12}>
                <Box component="img" src="/assets/images/family.png" alt="" width="100%" />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
