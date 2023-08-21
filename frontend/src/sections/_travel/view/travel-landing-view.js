import Box from '@mui/material/Box';

import { _tours, _testimonials } from 'src/_mock';

import TravelNewsletter from '../travel-newsletter';
import TravelLandingHero from '../landing/travel-landing-hero';
import TravelLandingAbout from '../landing/travel-landing-about';
import TravelTestimonial from '../testimonial/travel-testimonial';
import TravelLandingIntroduce from '../landing/travel-landing-introduce';
import TravelLandingTourFeatured from '../landing/travel-landing-tour-featured';

// ----------------------------------------------------------------------

export default function TravelLandingView() {
  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <TravelLandingHero tours={_tours.slice(0, 5)} />
      </Box>

      <TravelLandingIntroduce />

      {/* <TravelLandingSummary /> */}

      {/* <TravelLandingFavoriteDestinations tours={_tours.slice(0, 4)} /> */}

      <TravelLandingAbout />

      <TravelLandingTourFeatured tours={_tours.slice(0, 4)} />

      {/* <TravelLandingToursByCity tours={_tours.slice(0, 8)} /> */}

      {/* <BlogTravelLandingLatestPosts posts={_travelPosts.slice(2, 6)} /> */}

      <TravelTestimonial testimonials={_testimonials} />

      <TravelNewsletter />
    </>
  );
}
