import { scroller } from 'react-scroll';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Box, Grid, Divider, Container, Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default function TranslationPage() {
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
        <title>Lider - Translation</title>
      </Helmet>

      <Container>
        <Typography variant="h1" align="center" color="primary">
          Translation
        </Typography>
        <Divider sx={{ my: 2 }} />

        <Box>
          <Box
            sx={{ my: 2 }}
            id="element1"
            className={`scroll-element slide-from-bottom ${
              visibleElements.includes('element1') ? 'visible' : ''
            }`}
          >
            <Grid container spacing={2}>
              <Grid item md={6} sx={12}>
                <Typography variant="h3" align="left">
                  Translations
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
        </Box>
      </Container>
    </>
  );
}
