import { lazy } from 'react';

import InsurancePge from 'src/pages/travel/Insurance';
import TranslationPage from 'src/pages/travel/Translation';
import RegistrationPage from 'src/pages/travel/Registration';

// ----------------------------------------------------------------------

const BlogPage = lazy(() => import('src/pages/travel/posts'));
const PostPage = lazy(() => import('src/pages/travel/post'));
const TourPage = lazy(() => import('src/pages/travel/tour'));
const AboutPage = lazy(() => import('src/pages/travel/about'));
const ToursPage = lazy(() => import('src/pages/travel/tours'));
const ContactPage = lazy(() => import('src/pages/travel/contact'));
const LandingPage = lazy(() => import('src/pages/travel/landing'));
const CheckoutPage = lazy(() => import('src/pages/travel/checkout'));
const OrderCompletedPage = lazy(() => import('src/pages/travel/order-completed'));

// ----------------------------------------------------------------------

export const travelRoutes = [
  {
    path: '/',
    children: [
      { element: <LandingPage />, index: true },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'insurance', element: <InsurancePge /> },
      { path: 'registration', element: <RegistrationPage /> },
      { path: 'translation', element: <TranslationPage /> },
    ],
  },
];
