export const medicalBillingServices = [
  { label: 'Medical Billing', path: '/medical-billing-rcm/medical-billing' },
  { label: 'RCM', path: '/medical-billing-rcm/revenue-cycle-management' },
  { label: 'Insurance Verification', path: '/medical-billing-rcm/insurance-verification' },
  { label: 'Charge Entry', path: '/medical-billing-rcm/charge-entry' },
  { label: 'Claim Submission', path: '/medical-billing-rcm/claim-submission' },
  { label: 'Payment Posting', path: '/medical-billing-rcm/payment-posting' },
  { label: 'AR Management', path: '/medical-billing-rcm/ar-management' },
  { label: 'Denial Management', path: '/medical-billing-rcm/denial-management' },
  { label: 'Prior Authorization', path: '/medical-billing-rcm/prior-authorization' },
  { label: 'Credentialing', path: '/medical-billing-rcm/provider-credentialing' },
  { label: 'Reporting', path: '/medical-billing-rcm/reporting-analytics' },
];

export const itSolutionServices = [
  { label: 'Web Development', path: '/it-solutions/website-design-development' },
  { label: 'Software Development', path: '/it-solutions/software-development' },
  { label: 'AI & Automation', path: '/it-solutions/ai-automation' },
  { label: 'IT Support', path: '/it-solutions/it-support-maintenance' },
  { label: 'Cloud & Network Solutions', path: '/it-solutions/cloud-network-solutions' },
  { label: 'UI/UX Design', path: '/it-solutions/ui-ux-design' },
];

export const specialtyPages = [
  { label: 'Behavioral Health', path: '/specialties/behavioral-health' },
  { label: 'Psychiatry', path: '/specialties/mental-health-psychiatry' },
  { label: 'Podiatry', path: '/specialties/podiatry' },
  { label: 'Cardiology', path: '/specialties/cardiology' },
  { label: 'Internal Medicine', path: '/specialties/internal-medicine' },
  { label: 'Family Practice', path: '/specialties/family-practice' },
  { label: 'Rheumatology', path: '/specialties/rheumatology' },
  { label: 'Orthopedics', path: '/specialties/orthopedics' },
  { label: 'Neurology', path: '/specialties/neurology' },
  { label: 'Dermatology', path: '/specialties/dermatology' },
  { label: 'Gastroenterology', path: '/specialties/gastroenterology' },
  { label: 'Pain Management', path: '/specialties/pain-management' },
  { label: 'Physical Therapy', path: '/specialties/physical-therapy' },
  { label: 'Multispecialty', path: '/specialties/multispecialty-practices' },
];

export const resourcePages = [
  { label: 'Blog', path: '/resources/blog' },
  { label: 'FAQs', path: '/resources/faqs' },
  { label: 'Healthcare Guides', path: '/resources/healthcare-guides' },
  { label: 'Case Studies', path: '/resources/case-studies' },
];

export const aboutPages = [
  { label: 'Company Overview', path: '/about-us' },
  { label: 'Mission & Vision', path: '/about-us' },
  { label: 'Core Values', path: '/about-us' },
  { label: 'Our Team', path: '/about-us' },
  { label: 'Why Choose Us', path: '/about-us' },
];

export const mainNavigation = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-us', children: aboutPages },
  { label: 'Medical Billing & RCM', path: '/medical-billing-rcm', children: medicalBillingServices },
  { label: 'IT Solutions', path: '/it-solutions', children: itSolutionServices },
  { label: 'Specialties', path: '/specialties', children: specialtyPages },
  { label: 'Resources', path: '/resources', children: resourcePages },
  { label: 'Contact Us', path: '/contact' },
];

export const footerOnlyPages = [
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Terms & Conditions', path: '/terms-conditions' },
  { label: 'Disclaimer', path: '/disclaimer' },
  { label: 'Cookie Policy', path: '/cookie-policy' },
  { label: 'HIPAA & Data Security', path: '/hipaa-data-security' },
  { label: 'Sitemap', path: '/sitemap' },
  { label: 'Thank You', path: '/thank-you' },
];

export const homepageSections = [
  { title: 'Company Introduction', path: '/about-us', items: ['Who We Are', 'What We Do', 'Our Approach'] },
  { title: 'Our Core Services', path: '/services', items: ['Medical Billing & RCM', 'IT Solutions', 'View All Services'] },
  { title: 'Medical Billing & RCM Services', path: '/medical-billing-rcm', items: ['End-to-End Revenue Cycle Management', 'Insurance Verification', 'Charge Entry & Claim Submission', 'Payment Posting', 'AR Management & Follow-up', 'Denial Management & Appeals', 'Prior Authorization', 'Provider Credentialing', 'Reporting & Analytics'] },
  { title: 'IT Solutions', path: '/it-solutions', items: ['Website Design & Development', 'Software Development', 'AI & Automation Solutions', 'IT Support & Maintenance', 'Cloud & Network Solutions', 'UI/UX Design'] },
  { title: 'Specialties We Serve', path: '/specialties', items: ['Behavioral & Mental Health', 'Podiatry', 'Cardiology', 'Internal Medicine', 'Family Practice', 'Rheumatology', 'Orthopedics', 'Neurology', 'Dermatology', 'Multispecialty Practices', 'View All Specialties'] },
  { title: 'Why Choose BJ?', path: '/about-us', items: ['Experienced Professionals', 'Customized Solutions', 'Transparent Communication', 'Dedicated Support', 'Scalable Services', 'Quality-Focused Operations'] },
  { title: 'Our Working Process', path: '/medical-billing-rcm', items: ['Initial Consultation', 'Practice Assessment', 'Customized Strategy', 'Implementation & Onboarding', 'Ongoing Management & Support'] },
  { title: 'Technology & Software Expertise', path: '/medical-billing-rcm', items: ['eClinicalWorks', 'AdvancedMD', 'Athenahealth', 'Kareo / Tebra', 'Office Ally', 'Other Supported Platforms'] },
  { title: 'Our Performance & Results', path: '/work', items: ['Claims Performance', 'AR Management', 'Denial Reduction', 'Revenue Optimization', 'Operational Efficiency'] },
  { title: 'Client Testimonials', path: '/work', items: ['Client Feedback', 'Success Stories'] },
  { title: 'Frequently Asked Questions', path: '/resources/faqs', items: ['Medical Billing FAQs', 'IT Services FAQs'] },
  { title: 'Final Call to Action', path: '/contact', items: ['Request a Free Consultation', 'Request a Quote'] },
];

const specialtySections = ['Specialty Overview', 'Common Billing Challenges', 'Specialty-Specific Billing Services', 'Coding & Documentation Considerations', 'Denial Management & AR Solutions', 'Why Choose BJ?', 'Frequently Asked Questions', 'Book a Consultation'];

export const contentPages = [
  {
    path: '/about-us',
    title: 'About BJ',
    eyebrow: 'About Us',
    description: 'Company overview, mission, vision, core values, team, expertise, and the reasons businesses choose BJ.',
    sections: ['Company Overview', 'Who We Are', 'Our Mission', 'Our Vision', 'Our Core Values', 'Our Expertise', 'Our Medical Billing Division', 'Our IT Solutions Division', 'Why Businesses Choose BJ', 'Our Team & Leadership', 'Our Commitment to Quality', 'Call to Action'],
    links: aboutPages,
  },
  {
    path: '/medical-billing-rcm',
    title: 'Medical Billing & Revenue Cycle Management',
    eyebrow: 'Medical Billing & RCM',
    description: 'End-to-end billing and revenue cycle management support for healthcare practices.',
    sections: ['Overview of Medical Billing Services', 'End-to-End Revenue Cycle Management', 'Our Medical Billing Workflow', 'Individual Billing Services', 'Specialties We Support', 'Technology & Billing Platforms', 'Why Choose BJ for Medical Billing?', 'Frequently Asked Questions', 'Request a Free RCM Assessment'],
    links: medicalBillingServices,
  },
  { path: '/medical-billing-rcm/medical-billing', title: 'Medical Billing', eyebrow: 'Medical Billing & RCM', description: 'Billing overview, workflow, benefits, and BJ approach.', sections: ['Billing Overview', 'Billing Workflow', 'Benefits', 'Our Approach'] },
  { path: '/medical-billing-rcm/revenue-cycle-management', title: 'Revenue Cycle Management', eyebrow: 'Medical Billing & RCM', description: 'Complete RCM lifecycle support from front-end through back-end follow-up.', sections: ['RCM Overview', 'RCM Lifecycle', 'Front-End RCM', 'Mid-Cycle RCM', 'Back-End RCM'] },
  { path: '/medical-billing-rcm/insurance-verification', title: 'Insurance Verification', eyebrow: 'Medical Billing & RCM', description: 'Eligibility, benefits, coverage, and limitation verification.', sections: ['Eligibility Verification', 'Benefits Verification', 'Coverage & Limitations'] },
  { path: '/medical-billing-rcm/charge-entry', title: 'Charge Entry', eyebrow: 'Medical Billing & RCM', description: 'Accurate charge capture, review, and entry support.', sections: ['Charge Capture', 'Charge Review', 'Charge Entry Accuracy'] },
  { path: '/medical-billing-rcm/claim-submission', title: 'Claim Submission', eyebrow: 'Medical Billing & RCM', description: 'Claim preparation, scrubbing, electronic submission, and tracking.', sections: ['Claim Preparation', 'Claim Scrubbing', 'Electronic Submission', 'Claim Tracking'] },
  { path: '/medical-billing-rcm/payment-posting', title: 'Payment Posting', eyebrow: 'Medical Billing & RCM', description: 'ERA, EOB, insurance payment, patient payment, and reconciliation support.', sections: ['ERA/EOB Posting', 'Insurance Payments', 'Patient Payments', 'Payment Reconciliation'] },
  { path: '/medical-billing-rcm/ar-management', title: 'AR Management', eyebrow: 'Medical Billing & RCM', description: 'A/R follow-up, aging analysis, insurance follow-ups, and underpayment identification.', sections: ['AR Follow-up', 'Aging Analysis', 'Insurance Follow-ups', 'Underpayment Identification'] },
  { path: '/medical-billing-rcm/denial-management', title: 'Denial Management', eyebrow: 'Medical Billing & RCM', description: 'Denial analysis, root cause identification, appeals, and prevention.', sections: ['Denial Analysis', 'Root Cause Identification', 'Appeals', 'Denial Prevention'] },
  { path: '/medical-billing-rcm/prior-authorization', title: 'Prior Authorization', eyebrow: 'Medical Billing & RCM', description: 'Authorization verification, submission, and tracking.', sections: ['Authorization Verification', 'Authorization Submission', 'Status Tracking'] },
  { path: '/medical-billing-rcm/provider-credentialing', title: 'Provider Credentialing', eyebrow: 'Medical Billing & RCM', description: 'Provider enrollment, payer enrollment, recredentialing, and application follow-up.', sections: ['Provider Enrollment', 'Payer Enrollment', 'Recredentialing', 'Application Follow-up'] },
  { path: '/medical-billing-rcm/reporting-analytics', title: 'Reporting & Analytics', eyebrow: 'Medical Billing & RCM', description: 'AR, denial, payment, and performance monitoring reports.', sections: ['AR Reports', 'Denial Reports', 'Payment Reports', 'Performance Monitoring'] },
  {
    path: '/it-solutions',
    title: 'IT Solutions & Technology Services',
    eyebrow: 'IT Solutions',
    description: 'Technology services covering websites, software, AI, support, cloud, network, and UI/UX.',
    sections: ['IT Solutions Overview', 'Our Technology Services', 'Custom IT Solutions', 'Our Development Process', 'Technology Stack & Tools', 'Industries We Support', 'Why Choose BJ for IT Solutions?', 'Frequently Asked Questions', 'Request an IT Consultation'],
    links: itSolutionServices,
  },
  { path: '/it-solutions/website-design-development', title: 'Website Design & Development', eyebrow: 'IT Solutions', description: 'Business and healthcare websites with responsive design and maintenance support.', sections: ['Business Websites', 'Healthcare Websites', 'Responsive Design', 'Website Maintenance'] },
  { path: '/it-solutions/software-development', title: 'Software Development', eyebrow: 'IT Solutions', description: 'Custom software, business applications, web applications, and integrations.', sections: ['Custom Software', 'Business Applications', 'Web Applications', 'Software Integration'] },
  { path: '/it-solutions/ai-automation', title: 'AI & Automation', eyebrow: 'IT Solutions', description: 'AI solutions, chatbots, workflow automation, and intelligent business processes.', sections: ['AI Solutions', 'AI Chatbots', 'Workflow Automation', 'Intelligent Business Processes'] },
  { path: '/it-solutions/it-support-maintenance', title: 'IT Support & Maintenance', eyebrow: 'IT Solutions', description: 'Technical support, troubleshooting, system maintenance, and IT management.', sections: ['Technical Support', 'Troubleshooting', 'System Maintenance', 'IT Management'] },
  { path: '/it-solutions/cloud-network-solutions', title: 'Cloud & Network Solutions', eyebrow: 'IT Solutions', description: 'Cloud infrastructure, network setup, migration, and administration.', sections: ['Cloud Infrastructure', 'Network Setup', 'Cloud Migration', 'System Administration'] },
  { path: '/it-solutions/ui-ux-design', title: 'UI/UX Design', eyebrow: 'IT Solutions', description: 'User research, wireframing, interface design, and experience optimization.', sections: ['User Research', 'Wireframing', 'Interface Design', 'User Experience Optimization'] },
  {
    path: '/specialties',
    title: 'Medical Specialties We Serve',
    eyebrow: 'Specialties',
    description: 'Specialty-specific billing and RCM support for medical, behavioral health, therapy, and multispecialty practices.',
    sections: ['Overview of Specialty-Specific Billing', 'Specialties We Support', 'Customized Billing Solutions', 'Specialty-Specific Challenges', 'Our RCM Approach', 'Request a Consultation'],
    links: specialtyPages,
  },
  ...specialtyPages.map(({ label, path }) => ({
    path,
    title: label === 'Psychiatry' ? 'Mental Health & Psychiatry' : label,
    eyebrow: 'Specialties',
    description: `${label === 'Psychiatry' ? 'Mental Health & Psychiatry' : label} billing support, denial management, AR solutions, and specialty-specific RCM considerations.`,
    sections: specialtySections,
  })),
  {
    path: '/resources',
    title: 'Resources & Insights',
    eyebrow: 'Resources',
    description: 'Billing, RCM, healthcare, technology, FAQ, guide, and case study resources.',
    sections: ['Blog', 'Frequently Asked Questions', 'Healthcare Resources', 'Case Studies'],
    links: resourcePages,
  },
  { path: '/resources/blog', title: 'Blog', eyebrow: 'Resources', description: 'Medical billing, RCM, denial management, healthcare updates, and IT insights.', sections: ['Medical Billing Insights', 'Revenue Cycle Management', 'Denial Management', 'Healthcare Industry Updates', 'IT & Technology Insights'] },
  { path: '/resources/faqs', title: 'Frequently Asked Questions', eyebrow: 'Resources', description: 'FAQs for medical billing, RCM, credentialing, and IT solutions.', sections: ['Medical Billing FAQs', 'RCM FAQs', 'Credentialing FAQs', 'IT Solutions FAQs'] },
  { path: '/resources/healthcare-guides', title: 'Healthcare Resources', eyebrow: 'Resources', description: 'Medical billing guides, RCM guides, healthcare updates, and downloadable resources.', sections: ['Medical Billing Guides', 'RCM Guides', 'Healthcare Industry Updates', 'Downloadable Resources'] },
  { path: '/resources/case-studies', title: 'Case Studies', eyebrow: 'Resources', description: 'Medical billing case studies, AR improvement stories, denial management wins, and IT project examples.', sections: ['Medical Billing Case Studies', 'AR Improvement Stories', 'Denial Management Success Stories', 'IT Project Case Studies'] },
  { path: '/privacy-policy', title: 'Privacy Policy', eyebrow: 'Footer Only', description: 'Privacy policy information for BJ website visitors and inquiries.', sections: ['Information We Collect', 'How Information Is Used', 'Contact Requests', 'Data Retention'] },
  { path: '/terms-conditions', title: 'Terms & Conditions', eyebrow: 'Footer Only', description: 'General terms and conditions for website use.', sections: ['Website Use', 'Information Accuracy', 'Service Inquiries', 'Limitations'] },
  { path: '/disclaimer', title: 'Disclaimer', eyebrow: 'Footer Only', description: 'General website information disclaimer.', sections: ['General Information', 'No Professional Advice', 'External Links', 'Contact for Details'] },
  { path: '/cookie-policy', title: 'Cookie Policy', eyebrow: 'Footer Only', description: 'Cookie policy information for the BJ website.', sections: ['Cookie Use', 'Basic Functionality', 'Analytics', 'Visitor Choices'] },
  { path: '/hipaa-data-security', title: 'HIPAA & Data Security', eyebrow: 'Footer Only', description: 'HIPAA-aware data security information where applicable and substantiated.', sections: ['Protected Information Awareness', 'Access Controls', 'Secure Workflows', 'Data Handling Practices'] },
  { path: '/sitemap', title: 'Sitemap', eyebrow: 'Footer Only', description: 'Full BJ website sitemap with main pages, service pages, specialty pages, resources, and footer-only pages.', sections: ['Home', 'About Us', 'Medical Billing & RCM', 'IT Solutions', 'Specialties', 'Resources', 'Contact Us', 'Footer Only Pages'], links: [...mainNavigation, ...footerOnlyPages] },
  { path: '/thank-you', title: 'Thank You', eyebrow: 'Footer Only', description: 'Thank you for contacting BJ. We will review your inquiry and respond with the next step.', sections: ['Inquiry Received', 'Next Step', 'Response Timeline'] },
];

export const contentPagePaths = contentPages.map(page => page.path);
