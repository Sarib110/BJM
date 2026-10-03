import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import WorkIndex from './pages/WorkIndex';
import CaseStudyDetail from './pages/CaseStudyDetail';
import AboutPage from './pages/About';
import CareersPage from './pages/Careers';
import ContactPage from './pages/Contact';
import NotFound from './pages/NotFound';
import { caseStudies } from './data/billingCaseStudies';
import { services } from './data/services';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <ServicesPage /> },
      {
        path: 'services/:serviceId',
        element: <ServiceDetail />,
        getStaticPaths: () => services.map(s => `services/${s.id}`),
      },
      { path: 'work', element: <WorkIndex /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'careers', element: <CareersPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '404', element: <NotFound /> },
      { path: '*', element: <NotFound /> },
    ],
  },
  {
    path: '/work/:slug',
    element: <CaseStudyDetail />,
    getStaticPaths: () => caseStudies.map(cs => `work/${cs.id}`),
  },
];
