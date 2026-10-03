import { writeFileSync } from 'fs';
import { caseStudies } from '../src/data/billingCaseStudies.js';

const BASE_URL = 'https://sarib110.github.io/BJM';
const today = new Date().toISOString().split('T')[0];

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/work', priority: '0.9', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/careers', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
];

const allRoutes = [
  ...staticRoutes,
  ...caseStudies.map(cs => ({ path: `/work/${cs.id}`, priority: '0.8', changefreq: 'monthly' })),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(r => `  <url>
    <loc>${BASE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

writeFileSync('./dist/sitemap.xml', sitemap);
console.log(`[sitemap] Generated ${allRoutes.length} URLs → dist/sitemap.xml`);
