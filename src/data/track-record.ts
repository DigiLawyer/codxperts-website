export interface Employer {
  name: string;
  sector: string;
  description: string;
}

export const employers: Employer[] = [
  {
    name: 'Kayak',
    sector: 'Travel',
    description: 'Metasearch and booking at global scale. High-traffic consumer products, search relevance, and pricing systems.',
  },
  {
    name: 'Avetta',
    sector: 'Compliance',
    description: 'Supply chain risk and contractor compliance. Enterprise workflows, audits, and multi-tenant SaaS.',
  },
  {
    name: 'Orchid',
    sector: 'Healthtech',
    description: 'Digital health products. Regulated domains, patient-facing software, and clinical operations tooling.',
  },
  {
    name: 'Merit Incentives',
    sector: 'Fintech & loyalty',
    description: 'Rewards and loyalty platforms. Payments integrations, campaign tooling, and B2B incentive products.',
  },
  {
    name: 'Curriki',
    sector: 'EdTech',
    description: 'Open education infrastructure. Content platforms, authoring tools, and learning resource delivery.',
  },
];

export interface ShippedProduct {
  name: string;
  tag: string;
  period: string;
  description: string;
  stack: string[];
}

export const shippedProducts: ShippedProduct[] = [
  {
    name: 'DigiLawyer',
    tag: 'Flagship · Legal AI',
    period: '2022 to present',
    description:
      'Pakistan\'s first AI legal platform. 52 journals indexed, 20k+ users, institutional partnerships across judiciary, government, and law enforcement.',
    stack: ['Next.js', 'tRPC', 'TypeScript', 'PostHog'],
  },
  {
    name: 'Tracksure Connect',
    tag: 'Travel · Aggregation',
    period: 'Sep to Oct 2025',
    description:
      'Flight search and booking for South Asian carriers. Concurrent API aggregation, admin pricing rules, unified search experience.',
    stack: ['FastAPI', 'Next.js', 'Supabase', 'Vercel'],
  },
  {
    name: 'MyContract',
    tag: 'AI · Legal-tech',
    period: 'Nov 2024 to Mar 2025',
    description:
      'Contract intelligence and compliance checking. Shipped into DigiLawyer as the Mike AI Draft feature.',
    stack: ['LLMs', 'Compliance', 'Document generation'],
  },
  {
    name: 'SecondBite, OC Store ETL',
    tag: 'E-commerce · Automation',
    period: '2022',
    description:
      'ETL pipeline for OpenCart. Multi-source scraping, normalization, inventory match-checking, Google Sheets control surface.',
    stack: ['Python', 'Selenium', 'Pandas', 'Sheets API'],
  },
  {
    name: 'Graph-Based Text Classifier',
    tag: 'Data · NLP',
    period: '2024',
    description:
      'Medium article scraper with graph-based NLP analysis. Spanning trees, centrality metrics, Gravis visualization.',
    stack: ['NLP', 'Graph theory', 'GraphQL', 'Gravis'],
  },
];
