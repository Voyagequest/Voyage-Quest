import { OfferingCategory, WhyChoosePillar, TargetMarket, ImpactKpi, AnnualImpactTrend, SectorImpactDistribution, ClientTestimonial, OtherServiceItem } from '../types';

export const COMPANY_PROFILE = {
  name: "Voyage Quest",
  legalType: "Private Company / Close Corporation",
  industry: "Procurement, Supply Chain Solutions, Project Management & Public Sector Services",
  email: "info@voyagequest.co.za",
  contacts: [
    { name: "Yaaseen", phone: "073 465 6796", phoneRaw: "0734656796", role: "Key Accounts & Procurement" },
    { name: "Nabeel", phone: "071 331 0016", phoneRaw: "0713310016", role: "Operations & Logistics" }
  ],
  address: "54 Roy road, Yorkshire Estate, Cape Town, Western Cape",
  physicalAddress: {
    street: "54 Roy road",
    suburb: "Yorkshire Estate",
    city: "Cape Town",
    province: "Western Cape",
    country: "South Africa"
  },
  operatingScope: "Nationwide Across South Africa (All 9 Provinces)",
  slogan: "YOUR JOURNEY TO SUCCESS",
  logoUrl: "/voyage-quest-logo.png",
  tagline: "Agile Sourcing, Project Leadership & Public Sector Delivery",
  executiveSummary: "Voyage Quest is a dynamic, multi-sector enterprise dedicated to providing high-quality commercial goods, specialized project management, and capacity-building services across South Africa. We specialize in seamless sourcing and delivery of essential daily operational supplies, personal protective equipment (PPE), sanitation products, and enterprise IT infrastructure, alongside end-to-end management and facilitation of public sector initiatives, including community public works and public employment projects. By combining robust supply chain capabilities with hands-on project leadership, Voyage Quest acts as an agile, single-source partner. Our framework scales efficiently to support municipal tenders, corporate entities, government departments, and community development initiatives.",
  vision: "To become a premier, multi-commodity supply and project management partner recognized across South Africa for operational excellence, competitive pricing, structured project execution, and unyielding reliability.",
  mission: "To streamline business procurement and project delivery by offering an integrated solution that combines uncompromising product quality, precise project scheduling, specialized training, and client-centric service.",
  qualityStandard: "Products align with SABS/SANS standards, and project methodologies adhere to national government frameworks and industry best practices.",
};

export const CORE_OFFERINGS: OfferingCategory[] = [
  {
    id: "janitorial-paper",
    title: "Janitorial & Paper Products",
    type: "goods",
    tagline: "Bulk commercial paper consumables & high-traffic facility dispensing systems",
    summary: "Industrial and commercial toilet tissue, multi-fold hand towels, facial tissues, dispensers, and bulk paper consumables engineered for municipal offices, healthcare facilities, and corporate complexes.",
    primaryOfferings: [
      "Industrial & commercial 1-ply and 2-ply toilet tissue (virgin & recycled fiber)",
      "Multi-fold hand towels and automated sensor roll towel rolls",
      "Soft-pack facial tissues and medical examination paper rolls",
      "Lockable stainless steel & ABS plastic commercial dispensers",
      "Bulk institutional paper consumables packaged for centralized storerooms"
    ],
    complianceTags: ["SABS Compliant", "Eco-Friendly Recycled Options", "Bulk Municipal Packaging"],
    specs: ["FSC Certified Options", "Dispenser compatibility guarantee", "Standard 48-roll & bulk bale packs"],
    iconName: "Layers",
    featured: true
  },
  {
    id: "detergents-hygiene",
    title: "Detergents & Hygiene",
    type: "goods",
    tagline: "Commercial-grade chemicals, disinfectants & certified hygiene systems",
    summary: "Commercial-grade cleaning chemicals, disinfectants, hand sanitizers, floor care solutions, surface degreasers, and automated dosage systems meeting stringent health standards.",
    primaryOfferings: [
      "Commercial-grade hospital and institutional disinfectants (SANS 1853 / 490)",
      "70%+ alcohol hand sanitizers, antiseptic cleansers, and refill stations",
      "Industrial floor care solutions, strippers, polymer sealants, and polishers",
      "Heavy-duty workshop and commercial kitchen surface degreasers",
      "Automated chemical dilution and dosage dispensing equipment"
    ],
    complianceTags: ["SANS 1853 Compliant", "Food & Clinic Grade", "Industrial Strength"],
    specs: ["Safety Data Sheets (SDS) provided", "5L, 25L, and 210L container options", "Biodegradable options"],
    iconName: "Sparkles",
    featured: true
  },
  {
    id: "ppe-safety-gear",
    title: "PPE & Safety Gear",
    type: "goods",
    tagline: "SANS 434 & EN-certified protective workwear & occupational site gear",
    summary: "Complete head-to-toe protective equipment: workwear, high-visibility clothing, safety footwear, protective gloves, eye and ear protection, respiratory masks, and site safety gear.",
    primaryOfferings: [
      "SANS 434 standard conti-suits, overalls, flame-retardant & acid-resistant workwear",
      "High-visibility reflective safety vests, parkas, and traffic control bibs",
      "Steel toe-cap safety boots & shoes conforming to SANS/ISO 20345",
      "Heavy-duty leather welding gloves, nitrile chemical gloves, and cut-resistant gloves",
      "Impact safety spectacles, polycarbonate face shields, and industrial ear defenders",
      "FFP2/KN95 respiratory masks, dust masks, and site first-aid emergency stations"
    ],
    complianceTags: ["SANS 434 Certified", "ISO 20345 Footwear", "Workforce Ready"],
    specs: ["Full gender sizing (XS to 5XL)", "Custom corporate/municipal embroidery & printing", "Batch-tested compliance"],
    iconName: "ShieldCheck",
    featured: true
  },
  {
    id: "it-supplies-equipment",
    title: "IT Supplies & Equipment",
    type: "goods",
    tagline: "Tier-1 workstations, enterprise networking, servers & peripherals",
    summary: "Desktop computers, laptops, enterprise servers, networking hardware (switches, routers), UPS systems, printers, toners, and peripheral accessories with warranty backup.",
    primaryOfferings: [
      "Enterprise desktop computers, rugged field laptops, and executive ultrabooks",
      "Rack-mount and tower enterprise servers with scalable memory configurations",
      "Managed switches, enterprise routers, structured cabling, and patch panels",
      "Line-interactive and online double-conversion UPS systems for continuous uptime",
      "Workgroup multifunction laser printers, OEM toner cartridges, and drum units",
      "Peripheral accessories: docking stations, ergonomic monitors, and video conference bars"
    ],
    complianceTags: ["OEM Warranties", "Energy Star Certified", "State & Corporate Ready"],
    specs: ["Tier-1 brand partnerships (HP, Dell, Lenovo, Cisco)", "Onsite warranty options", "Bulk asset tagging"],
    iconName: "Monitor",
    featured: true
  },
  {
    id: "project-management-advisory",
    title: "Project Management & Advisory",
    type: "services",
    tagline: "Turnkey oversight, governance, quality assurance & tender compliance",
    summary: "End-to-end project management, project guidance, resource allocation, quality assurance, and compliance tracking for public and private sector contracts.",
    primaryOfferings: [
      "End-to-end public sector contract supervision and milestone sign-off",
      "Resource allocation, material staging, and local contractor coordination",
      "Rigorous quality assurance (QA) audits and SABS benchmark verification",
      "Regulatory compliance tracking and national Treasury framework adherence",
      "Stakeholder reporting, governance dashboards, and close-out audit files"
    ],
    complianceTags: ["PMBOK / Prince2 Aligned", "Municipal MFMA / PFMA Compliant", "Audit-Ready"],
    specs: ["Dedicated Project Lead assigned", "Weekly steering committee reports", "Risk mitigation logs"],
    iconName: "Briefcase",
    featured: true
  },
  {
    id: "project-scheduling-planning",
    title: "Project Scheduling & Planning",
    type: "services",
    tagline: "Critical path analysis, milestone mapping & Gantt-based execution",
    summary: "Comprehensive milestone mapping, Gantt chart scheduling, critical path analysis, risk management, and turnaround optimization for timely execution.",
    primaryOfferings: [
      "Comprehensive milestone mapping and baseline schedule formulation",
      "Detailed Gantt chart development with dynamic resource loading",
      "Critical Path Method (CPM) analysis and schedule delay risk models",
      "Early warning indicators, fast-tracking, and turnaround optimization",
      "Logistical dispatch scheduling and site handover date synchronizations"
    ],
    complianceTags: ["CPM Methodology", "Turnaround Optimization", "Milestone Assured"],
    specs: ["MS Project / Primavera formats", "Live variance tracking", "Scenario modeling"],
    iconName: "CalendarRange",
    featured: false
  },
  {
    id: "workforce-training-facilitation",
    title: "Workforce Training & Facilitation",
    type: "services",
    tagline: "Empowerment workshops, skills transfer & social labor compliance",
    summary: "Custom facilitation, workshop delivery, skills development, compliance alignment, and operational guidance tailored for public employment projects and community empowerment initiatives.",
    primaryOfferings: [
      "Custom facilitation and accredited workshop delivery for community cohorts",
      "On-site technical skills development and equipment handling induction",
      "Public works compliance alignment, daily muster roll logging, and reporting protocols",
      "Health & safety compliance training for social sector labor participants",
      "Operational leadership guidance and career exit pathway mentorship"
    ],
    complianceTags: ["Department of Public Works Aligned", "Community Empowerment", "Muster Roll Audit Ready"],
    specs: ["Local language facilitation options", "Attendance & competency certification", "Tailored to municipal wards"],
    iconName: "GraduationCap",
    featured: true
  },
  {
    id: "general-procurement",
    title: "General Procurement",
    type: "services",
    tagline: "Specialized sourcing, office stationery & customized project packages",
    summary: "Custom product sourcing, office stationery, breakroom supplies, and tailored project-based supply packages upon request with rapid quotation turnarounds.",
    primaryOfferings: [
      "Custom commodity and niche technical product sourcing across local & global makers",
      "Full spectrum corporate stationery, document filing, and archival storage",
      "Breakroom supplies, commercial kitchenware, and canteen consumables",
      "Turnkey project-based mobilization packs customized to unique tender specs",
      "Ad-hoc emergency procurement with expedited local distribution"
    ],
    complianceTags: ["Single-Vendor Simplicity", "Direct Sourcing Price Benefit", "Rapid Lead Times"],
    specs: ["Itemized tender-line quoting", "Consolidated delivery invoicing", "Flexible order minimums"],
    iconName: "ShoppingBag",
    featured: false
  }
];

export const WHY_CHOOSE_PILLARS: WhyChoosePillar[] = [
  {
    id: "integrated-goods-services",
    title: "Integrated Goods & Services",
    subtitle: "Single-Vendor Efficiency",
    description: "Consolidate your operations by sourcing facility supplies, technical hardware, and expert project management through a single dependable vendor. Eliminate administrative friction and multi-contractor blame games.",
    advantages: [
      "One unified service level agreement (SLA) across all categories",
      "Consolidated invoicing and centralized procurement communication",
      "Combined freight and synchronized delivery schedules"
    ],
    iconName: "GitMerge",
    metric: "1 Vendor",
    metricLabel: "For Goods, IT & PM"
  },
  {
    id: "specialized-public-works-expertise",
    title: "Specialized Public Works Expertise",
    subtitle: "Public Sector Navigation",
    description: "Proven capabilities in navigating public sector compliance, participant scheduling, and stakeholder facilitation for social labor initiatives under community works frameworks.",
    advantages: [
      "Deep understanding of municipal public works guidelines and labor laws",
      "Robust participant onboarding, attendance, and stipend verification systems",
      "Community stakeholder engagement that prevents site disruptions"
    ],
    iconName: "Users",
    metric: "100%",
    metricLabel: "Audit Ready"
  },
  {
    id: "quality-compliance-assurance",
    title: "Quality & Compliance Assurance",
    subtitle: "Certified Standards",
    description: "Products align with SABS/SANS standards, and project methodologies adhere to national government frameworks, Treasury prescripts, and industry best practices.",
    advantages: [
      "Full SABS / SANS certification certificates and test sheets available",
      "Strict incoming quality control inspections on all bulk batches",
      "Transparent audit trails for municipal and internal auditors"
    ],
    iconName: "Award",
    metric: "SABS / SANS",
    metricLabel: "Quality Aligned"
  },
  {
    id: "agile-sourcing-execution",
    title: "Agile Sourcing & Execution",
    subtitle: "Rapid Mobilization",
    description: "Direct manufacturer relationships paired with structured scheduling ensure rapid mobilization, minimal downtime, and on-time project completion.",
    advantages: [
      "Tier-1 factory-direct distributor pricing and priority allocation",
      "Real-time tracking of logistics and dispatch milestones",
      "Buffer stock arrangements for high-frequency operational consumables"
    ],
    iconName: "Zap",
    metric: "24-48h",
    metricLabel: "RFQ Turnaround"
  },
  {
    id: "competitive-public-value",
    title: "Competitive Public Value",
    subtitle: "Treasury Cost Effectiveness",
    description: "Lean operational structures yield cost-effective bidding for municipal tenders, government department requests, and public-private partnerships.",
    advantages: [
      "Aggressive pricing models built specifically for public tender scoring",
      "Transparent cost breakdowns with no hidden contingency markups",
      "Sustainable economic value maximizing tax-payer expenditure impact"
    ],
    iconName: "TrendingUp",
    metric: "Optimal",
    metricLabel: "Tender Scoring Value"
  }
];

export const TARGET_MARKETS: TargetMarket[] = [
  {
    id: "municipalities-public-works",
    title: "Government Municipalities & Public Works Offices",
    scope: "Local, District & Metropolitan Municipalities across SA",
    typicalNeeds: [
      "Heavy-duty safety boots & SANS 434 reflective conti-suits",
      "Participant scheduling, training workshops & muster roll administration",
      "Janitorial consumables for municipal civic centers & clinics",
      "Bulk cleaning chemicals & environmental sanitation supplies"
    ],
    caseExample: "Supplying comprehensive PPE kits and facilitating accredited on-site training for 250+ community participants on municipal infrastructure maintenance.",
    iconName: "Landmark"
  },
  {
    id: "public-sector-soe",
    title: "Public Sector Institutions & State-Owned Entities",
    scope: "National & Provincial Departments, Parastatals & Agencies",
    typicalNeeds: [
      "Enterprise IT infrastructure (servers, network routers, laptops)",
      "High-volume stationery, archival storage & paper consumables",
      "Project governance, milestone audits & critical path scheduling",
      "Turnkey site facilities provisioning"
    ],
    caseExample: "Rapid provision of 120 enterprise laptops and secure server hardware with multi-year OEM warranty backing under strict tender timelines.",
    iconName: "Building2"
  },
  {
    id: "corporate-commercial",
    title: "Corporate Offices & Commercial Facilities",
    scope: "Head offices, business parks, multi-tenant corporate parks",
    typicalNeeds: [
      "Automated paper dispensing systems & premium washroom supplies",
      "Scheduled monthly detergent & hygiene chemical deliveries",
      "Staff ergonomics, dual-monitor desktop set-ups & IT accessories",
      "Executive meeting breakroom consumables & office essentials"
    ],
    caseExample: "Consolidated vendor contract for 4 commercial office parks covering daily janitorial supplies, sanitizers, and emergency IT backup hardware.",
    iconName: "Briefcase"
  },
  {
    id: "education-healthcare",
    title: "Education & Healthcare Facilities",
    scope: "Public hospitals, regional clinics, universities & TVET colleges",
    typicalNeeds: [
      "Hospital-grade SANS disinfectants, medical gloves & masks",
      "Industrial washroom paper rolls & antibacterial hygiene stations",
      "Campus IT labs, network cabling & high-output workgroup printers",
      "Campus maintenance workwear and groundskeeping safety gear"
    ],
    caseExample: "Sanitation chemical deliveries across regional medical clinics meeting SANS 1853 clinical compliance with complete batch certificates.",
    iconName: "HeartPulse"
  },
  {
    id: "manufacturing-civil",
    title: "Manufacturing, Industrial & Civil Contractors",
    scope: "Civil engineering sites, factories, assembly plants & quarries",
    typicalNeeds: [
      "Heavy-duty acid/flame retardant workwear & steel toe safety boots",
      "Chemical degreasers, machine cleaning solvents & spill kits",
      "Project milestone Gantt scheduling & contractor mobilization advisory",
      "Rugged site communication gear & on-site IT networking"
    ],
    caseExample: "Site-wide protective gear supply for 180 construction workers combined with Gantt scheduling tracking for critical path earthwork milestones.",
    iconName: "HardHat"
  },
  {
    id: "property-facility",
    title: "Property & Facility Management Companies",
    scope: "Managing agents, contract cleaning providers & asset managers",
    typicalNeeds: [
      "Wholesale pricing on 2-ply toilet paper, multifold towels & soap",
      "Centralized chemical dispensing systems and floor maintenance strippers",
      "Cleaning crew uniforms, waterproof footwear & rubber gloves",
      "Emergency ad-hoc replenishment with guaranteed same-week delivery"
    ],
    caseExample: "Ongoing monthly supply agreement provisioning 18 commercial retail properties with standardized eco-friendly hygiene products and dispensers.",
    iconName: "Home"
  }
];

export const SOUTH_AFRICAN_PROVINCES = [
  "Gauteng (Johannesburg / Pretoria)",
  "Western Cape (Cape Town / George)",
  "KwaZulu-Natal (Durban / Pietermaritzburg)",
  "Eastern Cape (Gqeberha / East London)",
  "Limpopo (Polokwane)",
  "Mpumalanga (Mbombela / Witbank)",
  "Free State (Bloemfontein / Welkom)",
  "North West (Rustenburg / Mahikeng)",
  "Northern Cape (Kimberley / Upington)",
  "Nationwide / Multi-Province Tender"
];

export const WORKFORCE_COMPLIANCE_PILLARS = [
  {
    step: "01",
    title: "Participant Induction & Safety Outfitting",
    desc: "Every community worker is equipped with SANS-certified safety boots, high-visibility vest or conti-suit, and task-specific gloves prior to stepping onto site."
  },
  {
    step: "02",
    title: "Structured Scheduling & Shift Rostering",
    desc: "Dynamic scheduling aligned with ministerial determinations for labor-intensive work, preventing fatigue and ensuring fair labor rotation."
  },
  {
    step: "03",
    title: "Accredited Skills Facilitation & Workshops",
    desc: "Hands-on capacity building in hand-tool usage, occupational health & safety (OHS), environmental care, and life skills for exit opportunities."
  },
  {
    step: "04",
    title: "Muster Roll & Audit-Proof Reporting",
    desc: "Digital and physical attendance tracking with biometric or signed muster rolls, enabling seamless municipal stipend reconciliations and audit compliance."
  }
];

export const COMPANY_IMPACT_KPIS: ImpactKpi[] = [
  {
    id: "communities-empowered",
    label: "Communities Empowered",
    value: 52,
    suffix: "+",
    decimals: 0,
    highlightText: "Municipal Wards & Rural Hubs",
    description: "Local community hubs and municipal wards reached with accredited skill development, structured shift employment, and site safety inductions.",
    iconName: "Users",
    badge: "Public Sector Impact"
  },
  {
    id: "contracts-completed",
    label: "Contracts Completed",
    value: 210,
    suffix: "+",
    decimals: 0,
    highlightText: "Tenders & Public Orders",
    description: "Direct municipal bids, SOE supply orders, and commercial facilities contracts executed with 100% on-time milestone delivery.",
    iconName: "FileCheck2",
    badge: "100% On-Time Delivery"
  },
  {
    id: "savings-delivered",
    label: "Annual Savings Delivered",
    value: 18.4,
    prefix: "R",
    suffix: "M+",
    decimals: 1,
    highlightText: "Public & Client Cost Reductions",
    description: "Measurable taxpayer and client capital saved through consolidated single-source sourcing, bulk SABS-certified purchasing, and integrated logistics.",
    iconName: "TrendingUp",
    badge: "19.4% Avg Cost Optimization"
  },
  {
    id: "community-person-days",
    label: "Community Work-Days Enabled",
    value: 168,
    suffix: "k+",
    decimals: 0,
    highlightText: "Person-Days of Local Labor",
    description: "Verified community labor-intensive work days created and supported with PPE, tools, and muster roll audit governance.",
    iconName: "Clock",
    badge: "Direct Employment"
  }
];

export const ANNUAL_IMPACT_TRENDS: AnnualImpactTrend[] = [
  {
    fiscalYear: "2023",
    contractsCompleted: 38,
    savingsDeliveredMillion: 3.8,
    communitiesEmpowered: 14,
    procurementHandledMillion: 24.5,
    communityPersonDaysThousand: 28
  },
  {
    fiscalYear: "2024",
    contractsCompleted: 64,
    savingsDeliveredMillion: 6.2,
    communitiesEmpowered: 26,
    procurementHandledMillion: 39.2,
    communityPersonDaysThousand: 54
  },
  {
    fiscalYear: "2025",
    contractsCompleted: 112,
    savingsDeliveredMillion: 11.5,
    communitiesEmpowered: 41,
    procurementHandledMillion: 61.8,
    communityPersonDaysThousand: 108
  },
  {
    fiscalYear: "2026 (YTD)",
    contractsCompleted: 210,
    savingsDeliveredMillion: 18.4,
    communitiesEmpowered: 52,
    procurementHandledMillion: 82.5,
    communityPersonDaysThousand: 168
  }
];

export const SECTOR_IMPACT_DISTRIBUTION: SectorImpactDistribution[] = [
  {
    name: "Public Works & Workforce Facilitation",
    percentage: 36,
    contracts: 76,
    color: "#f59e0b" // Amber
  },
  {
    name: "PPE & Site Workwear Sourcing",
    percentage: 28,
    contracts: 59,
    color: "#10b981" // Emerald
  },
  {
    name: "Commercial Janitorial & Hygiene",
    percentage: 22,
    contracts: 46,
    color: "#3b82f6" // Blue
  },
  {
    name: "Enterprise IT Infrastructure",
    percentage: 14,
    contracts: 29,
    color: "#8b5cf6" // Violet
  }
];

export const PROVINCIAL_IMPACT_METRICS = [
  { province: "Gauteng", projects: 68, participants: "1,840+", icon: "Building" },
  { province: "KwaZulu-Natal", projects: 46, participants: "1,220+", icon: "Anchor" },
  { province: "Eastern Cape", projects: 34, participants: "950+", icon: "Trees" },
  { province: "Western Cape", projects: 28, participants: "720+", icon: "Compass" },
  { province: "Limpopo & Mpumalanga", projects: 22, participants: "580+", icon: "Mountain" },
  { province: "Free State & North West", projects: 12, participants: "340+", icon: "Sun" }
];

export const CLIENT_TESTIMONIALS: ClientTestimonial[] = [
  {
    id: "testimonial-ekurhuleni",
    clientName: "N. Khumalo",
    role: "Director of Supply Chain & Community Services",
    organization: "Ekurhuleni District Municipality",
    sector: "Municipal & Public",
    province: "Gauteng",
    projectScope: "Ward-Based Waste & Cleanliness Initiative (450 Project Participants)",
    quote: "Voyage Quest solved what used to be our biggest procurement headache: dealing with five separate vendors for safety gear, high-visibility overalls, and detergents. Their single-source framework outfitted all 450 participants with SANS 434 Conti suits in under 5 business days, complete with compliant muster roll documentation for our internal audit committee.",
    highlightMetric: "450 Workers Outfitted",
    metricLabel: "Milestone in 5 Days",
    verifiedBadge: "Verified Municipal SCM Bid",
    rating: 5,
    date: "February 2026"
  },
  {
    id: "testimonial-ethekwini",
    clientName: "D. Govender",
    role: "Senior Project Manager (Public Works & Roads)",
    organization: "eThekwini Metropolitan Project Unit",
    sector: "Public Works & Community",
    province: "KwaZulu-Natal",
    projectScope: "Stormwater & Road Drainage Community Maintenance",
    quote: "Managing community workforce programs requires more than just buying gear; it demands structured on-site discipline. Voyage Quest facilitated our participant OHS inductions and implemented biometric check-in sheets. For the first time in three fiscal years, our DPWI muster audit returned zero non-conformances.",
    highlightMetric: "Zero Audit Deficiencies",
    metricLabel: "DPWI Framework Audit",
    verifiedBadge: "Audit-Ready Public Delivery",
    rating: 5,
    date: "November 2025"
  },
  {
    id: "testimonial-apex",
    clientName: "M. van der Merwe",
    role: "Head of Group Procurement & Operations",
    organization: "Apex Facilities Management Group",
    sector: "Corporate & Industrial",
    province: "Western Cape",
    projectScope: "Commercial Facility Janitorial & Consumable Replenishment (18 Sites)",
    quote: "With 18 corporate office parks across Cape Town and Bellville, stockouts were hurting our tenant SLAs. Voyage Quest established a scheduled monthly replenishment pipeline with SABS-certified biodegradable hygiene chemicals and dispenser refills. Their competitive volume pricing reduced our monthly operating budget by 21%.",
    highlightMetric: "21% Cost Reduction",
    metricLabel: "Commercial Facility Supplies",
    verifiedBadge: "Corporate Facility Partner",
    rating: 5,
    date: "January 2026"
  },
  {
    id: "testimonial-mangaung",
    clientName: "T. Mokoena",
    role: "Infrastructure Procurement Lead",
    organization: "Free State Regional Development Agency",
    sector: "Municipal & Public",
    province: "Free State",
    projectScope: "Rural Youth Skills & Public Amenities Upgrade",
    quote: "What sets Voyage Quest apart from standard middlemen is their direct hands-on involvement. When our rural tender faced tight fiscal deadlines, their team stepped in with full Gantt scheduling, tools, and accredited facilitators. They handled logistics from Bloemfontein out into rural wards seamlessly.",
    highlightMetric: "100% On-Schedule",
    metricLabel: "Rural Tender Execution",
    verifiedBadge: "SOE Infrastructure Tender",
    rating: 5,
    date: "December 2025"
  },
  {
    id: "testimonial-bridgepoint",
    clientName: "S. Cele",
    role: "SHEQ & Operations Director",
    organization: "Bridgepoint Civil & Building Contractors",
    sector: "Corporate & Industrial",
    province: "Eastern Cape & Gauteng",
    projectScope: "Civil Construction PPE & Site Safety Protocol",
    quote: "On tier-1 construction sites, safety compliance is non-negotiable. Voyage Quest supplies us with heavy-duty SABS-approved safety boots, hard hats, fall arrest harnesses, and specialized flame-retardant wear. Their batch delivery punctuality and complete specification data sheets make site safety inspections straightforward.",
    highlightMetric: "100% SABS Compliance",
    metricLabel: "Construction SHEQ Standard",
    verifiedBadge: "Civil Contracting Supplier",
    rating: 5,
    date: "March 2026"
  },
  {
    id: "testimonial-polokwane",
    clientName: "R. Baloyi",
    role: "Community Works Coordinator",
    organization: "Capricorn District Public Works Directorate",
    sector: "Public Works & Community",
    province: "Limpopo",
    projectScope: "Greening & Environmental Community Program",
    quote: "Voyage Quest’s training facilitators are exceptional. They did not merely drop off tools and PPE; they ran practical workshops on site safety, tool maintenance, and environmental hygiene for 280 local youths. The community buy-in and project retention were the highest we have ever recorded.",
    highlightMetric: "280 Youths Trained",
    metricLabel: "Retention Rate 96%",
    verifiedBadge: "Community Skills Programme",
    rating: 5,
    date: "October 2025"
  }
];

export const OTHER_SERVICES: OtherServiceItem[] = [
  {
    id: "construction-maintenance-renovations",
    title: "Construction, Maintenance and Renovations",
    shortDescription: "Civil infrastructure, facility maintenance, and structural refurbishment solutions.",
    futureUrl: "https://construction.voyagequest.co.za",
    type: "subdomain",
    typeLabel: "Future Sub-domain",
    badge: "Sub-domain Portal",
    iconName: "HardHat",
    details: "Voyage Quest is expanding its specialized engineering and infrastructure division onto a dedicated sub-domain portal. Our capabilities encompass turnkey civil works, scheduled facility maintenance for public and private buildings, and structural renovations tailored for municipal tenders and commercial property portfolios.",
    capabilities: [
      "Commercial & municipal building maintenance contracts",
      "Structural renovations, interior fit-outs & spatial partitioning",
      "Civil works, paving, perimeter fencing & security barriers",
      "Plumbing, electrical maintenance & compliance certificates",
      "Public infrastructure labor coordination and site safety oversight"
    ]
  },
  {
    id: "recycling-programs",
    title: "Recycling Programs",
    shortDescription: "Municipal & industrial recycling initiatives, waste diversion, and sustainability programs.",
    futureUrl: "https://recycling.voyagequest.co.za",
    type: "website",
    typeLabel: "Future Dedicated Website",
    badge: "Recycling Platform",
    iconName: "Recycle",
    details: "Voyage Quest is establishing a dedicated environmental and recycling website to support South Africa's green economy and circular waste management goals. We provide municipal councils, corporate campuses, and community groups with structured waste sorting, scrap material recovery, and buy-back center frameworks.",
    capabilities: [
      "Municipal community recycling & buy-back center setup",
      "Corporate waste minimization & paper/plastic recycling audits",
      "Electronic waste (e-waste) and metal scrap recovery logistics",
      "Community environmental greening & clean-up campaign facilitation",
      "Recycled consumable procurement & circular supply chain integration"
    ]
  }
];
