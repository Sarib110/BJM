import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import Cursor from '../components/ui/Cursor';
import CaseStudyPage from '../components/pages/CaseStudyPage';
import { caseStudies } from '../data/billingCaseStudies';

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const cs = caseStudies.find(c => c.id === slug);

  if (!cs) return <Navigate to="/work" replace />;

  return (
    <>
      <Head>
        <title>{cs.title} — BJ Medical Billing Service</title>
        <meta name="description" content={cs.summary} />
        <meta property="og:title" content={`${cs.title} — BJ Medical Billing Service`} />
        <meta property="og:description" content={cs.summary} />
        <meta property="og:image" content={cs.image} />
        <meta property="og:url" content={`https://bjmbilling.com/work/${cs.id}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Cursor />
      <CaseStudyPage cs={cs} onBack={() => navigate('/work')} />
    </>
  );
};

export default CaseStudyDetail;
