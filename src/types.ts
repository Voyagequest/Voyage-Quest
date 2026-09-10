export interface OfferingCategory {
  id: string;
  title: string;
  type: 'goods' | 'services';
  tagline: string;
  summary: string;
  primaryOfferings: string[];
  complianceTags: string[];
  specs: string[];
  iconName: string;
  featured?: boolean;
}

export interface WhyChoosePillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  advantages: string[];
  iconName: string;
  metric?: string;
  metricLabel?: string;
}

export interface TargetMarket {
  id: string;
  title: string;
  scope: string;
  typicalNeeds: string[];
  caseExample: string;
  iconName: string;
}

export interface RfqItem {
  categoryId: string;
  categoryTitle: string;
  quantityNote?: string;
  specifics?: string;
}

export interface RfqSubmission {
  id: string;
  date: string;
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  sector: string;
  province: string;
  tenderNumber?: string;
  timeline: string;
  selectedCategories: string[];
  projectDetails: string;
  status: 'Received' | 'In Review' | 'Quotation Prepared';
}

export interface ImpactKpi {
  id: string;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  highlightText: string;
  description: string;
  iconName: string;
  badge: string;
}

export interface AnnualImpactTrend {
  fiscalYear: string;
  contractsCompleted: number;
  savingsDeliveredMillion: number;
  communitiesEmpowered: number;
  procurementHandledMillion: number;
  communityPersonDaysThousand: number;
}

export interface SectorImpactDistribution {
  name: string;
  percentage: number;
  contracts: number;
  color: string;
}

export interface ClientTestimonial {
  id: string;
  clientName: string;
  role: string;
  organization: string;
  sector: 'Municipal & Public' | 'Corporate & Industrial' | 'Public Works & Community';
  province: string;
  projectScope: string;
  quote: string;
  highlightMetric: string;
  metricLabel: string;
  verifiedBadge: string;
  rating: number;
  date: string;
}

export interface OtherServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  futureUrl: string;
  type: 'subdomain' | 'website';
  typeLabel: string;
  badge: string;
  iconName: string;
  details: string;
  capabilities: string[];
}
