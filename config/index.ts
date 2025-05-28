import { Mail, PhoneCall, PinIcon, Scale } from "lucide-react";

import { allRoutes } from "./routes";

export const NavigationMenu: { title: string; href: string }[] = [
  {
    title: "Home",
    href: allRoutes.home.url,
  },
  {
    title: "About Us",
    href: allRoutes.about.url,
  },
  {
    title: "Services",
    href: allRoutes.services.url,
  },
  {
    title: "Contact Us",
    href: allRoutes.contact.url,
  },
];

export const whatWeOffer: {
  title: string;
  description: string;
  btnText: string;
  bgImage: string;
}[] = [
  {
    title: "Global Transfers Made Easy",
    description:
      "Send money across countries in seconds, safely and affordably.",
    btnText: "Transfer",
    bgImage:
      "https://res.cloudinary.com/davidleo/image/upload/v1747856072/westernedge/smash-remit/Frame_1000003319_pwobwh.png",
  },
  {
    title: "Real-Time Currency Exchange",
    description:
      "Convert your money instantly at competitive, live market rates",
    btnText: "Create Wallet",
    bgImage:
      "https://res.cloudinary.com/davidleo/image/upload/v1747856071/westernedge/smash-remit/Frame_1000003310_lekrsr.png",
  },
  {
    title: "Safe & Easy Online Payments",
    description:
      "Instantly generate virtual cards for secure digital transactions.",
    btnText: "Get Card",
    bgImage:
      "https://res.cloudinary.com/davidleo/image/upload/v1747856071/westernedge/smash-remit/Frame_1000003310_1_qql0lk.png",
  },
  {
    title: "One Wallet, Many Currencies",
    description: "Hold and manage balances in USD, EUR, GBP, GHS, and more",
    btnText: "Create Wallet",
    bgImage:
      "https://res.cloudinary.com/davidleo/image/upload/v1747856071/westernedge/smash-remit/Frame_1000003310_2_evy7ck.png",
  },
];

export const whyChooseUs = [
  {
    title: "Experienced Professionals",
    icon: Scale,

    description:
      "Our team consists of seasoned experts with years of experience.",
  },
  {
    title: "Personalized Approach",
    icon: Scale,

    description: "We tailor our services to meet your unique needs and goals.",
  },
  {
    title: "Proven Track Record",
    icon: Scale,

    description:
      "We have a history of delivering successful outcomes for our clients.",
  },
  {
    title: "Transparent Communication",
    icon: Scale,

    description: "We keep you informed every step of the way.",
  },
  {
    title: "Comprehensive Solutions",
    icon: Scale,

    description: "We provide end-to-end support for all your legal needs.",
  },
];
export const contactInfo = [
  {
    title: "Address",
    icon: PinIcon,
    image:
      "https://res.cloudinary.com/davidleo/image/upload/v1747298198/westernedge/wesley-tingey-TdNLjGXVH3s-unsplash_tdvrv2.jpg",
    description:
      "5 Simpson Street, Off Lewis Street, Shobo House, 2nd Floor, Left Wing.",
  },
  {
    title: "Phone Number",
    icon: PhoneCall,
    image:
      "https://res.cloudinary.com/davidleo/image/upload/v1747298198/westernedge/wesley-tingey-TdNLjGXVH3s-unsplash_tdvrv2.jpg",
    description: "08063023740, 08035751934",
  },
  {
    title: "Email",
    icon: Mail,
    image:
      "https://res.cloudinary.com/davidleo/image/upload/v1747298198/westernedge/wesley-tingey-TdNLjGXVH3s-unsplash_tdvrv2.jpg",
    description:
      "Westernedgesolicitors@gmail.com, yinka@westernedgesolicitorslaw.com",
  },
];

export const metrics = [
  {
    label: "Years of Experience",
    value: 15,
  },
  {
    label: "Successful Cases",
    value: 1200,
  },
  {
    label: "Satisfied Clients",
    value: 500,
  },
  {
    label: "Awards Won",
    value: 15,
  },
];

export const missionAndVision = [
  {
    title: "Our Vision",
    text: "To be the law practice of first choice, setting the standard for excellence across Nigeria.",
    image:
      "https://res.cloudinary.com/davidleo/image/upload/v1747511949/westernedge/still-life-with-scales-justice_f1y8t2.jpg",
  },
  {
    title: "Our Mission",
    text: "To deliver unique, timely, and highly qualitative legal services, meticulously tailored to meet the specific needs of our clients.",
    image:
      "https://res.cloudinary.com/davidleo/image/upload/v1747511942/westernedge/front-view-blurry-lawyer-working_icvj5n.jpg",
  },
];

export const scopeOfPractice = [
  {
    title: "Corporate and Commercial Law",
    description:
      "Providing expert legal advice and solutions for corporate and commercial matters.",
    image:
      "https://res.cloudinary.com/davidleo/image/upload/v1747511947/westernedge/close-up-law-scale_etid9f.jpg",
    dialogContent: {
      overview:
        "Our Corporate and Commercial Law practice offers comprehensive legal solutions for businesses of all sizes, from startups to multinational corporations.",
      services: [
        "Company incorporation and structuring",
        "Corporate governance and compliance",
        "Mergers and acquisitions",
        "Commercial contracts and agreements",
        "Shareholders' agreements and disputes",
        "Due diligence investigations",
        "Corporate restructuring",
      ],
      benefits: [
        "Minimize legal risks in your business operations",
        "Ensure compliance with Nigerian and international regulations",
        "Strategic legal guidance for business growth",
        "Protection of shareholders' interests",
      ],
      caseStudy:
        "Successfully advised a major telecommunications company on its $50M acquisition of a local service provider, handling all regulatory approvals and compliance requirements.",
    },
  },
  {
    title: "Banking Law",
    description:
      "Specializing in banking regulations, compliance, and financial transactions.",
    image:
      "https://res.cloudinary.com/davidleo/image/upload/v1747511947/westernedge/close-up-law-scale_etid9f.jpg",
    dialogContent: {
      overview:
        "Our Banking Law team provides expert advice on regulatory compliance, financial transactions, and banking disputes to financial institutions and their clients.",
      services: [
        "Banking regulations and compliance",
        "Financial transactions and security documentation",
        "Loan restructuring and refinancing",
        "Banking litigation and dispute resolution",
        "Regulatory investigations",
        "Financial services licensing",
        "Consumer banking issues",
      ],
      benefits: [
        "Navigate complex financial regulations confidently",
        "Protect your interests in financial transactions",
        "Minimize risk through expert compliance guidance",
        "Strategic solutions for banking disputes",
      ],
      caseStudy:
        "Represented a leading Nigerian bank in restructuring a ₦5 billion syndicated loan facility for a major manufacturing company, ensuring regulatory compliance while protecting our client's interests.",
    },
  },
  {
    title: "Construction Law",
    description:
      "Offering legal support for construction projects, contracts, and disputes.",
    image:
      "https://res.cloudinary.com/davidleo/image/upload/v1747511947/westernedge/close-up-law-scale_etid9f.jpg",
    dialogContent: {
      overview:
        "Our Construction Law practice provides comprehensive legal services throughout all phases of construction projects, from planning and contract formation to dispute resolution.",
      services: [
        "Construction contracts drafting and negotiation",
        "Project financing and security",
        "Building and planning regulations compliance",
        "Construction dispute resolution and litigation",
        "Adjudication and arbitration",
        "Procurement advice",
        "Professional negligence claims",
      ],
      benefits: [
        "Minimize project delays through proactive legal planning",
        "Protect your interests with well-drafted contracts",
        "Expert representation in construction disputes",
        "Navigate complex regulatory requirements",
      ],
      caseStudy:
        "Successfully represented a major developer in a ₦2 billion dispute over construction defects in a commercial property development in Lagos, achieving a favorable settlement through arbitration.",
    },
  },
  {
    title: "Recovery and Insolvency",
    description:
      "Assisting with debt recovery, insolvency proceedings, and restructuring.",
    image:
      "https://res.cloudinary.com/davidleo/image/upload/v1747511947/westernedge/close-up-law-scale_etid9f.jpg",
    dialogContent: {
      overview:
        "Our Recovery and Insolvency team provides strategic advice to creditors, debtors, and insolvency practitioners on all aspects of financial distress and restructuring.",
      services: [
        "Corporate restructuring and reorganization",
        "Debt recovery and enforcement",
        "Receivership and administration",
        "Bankruptcy proceedings",
        "Creditors' rights protection",
        "Asset tracing and recovery",
        "Insolvency litigation",
      ],
      benefits: [
        "Maximize recovery in debt collection matters",
        "Strategic approaches to financial distress",
        "Protection of creditor rights in insolvency proceedings",
        "Expert guidance through restructuring processes",
      ],
      caseStudy:
        "Advised the receivers of a distressed manufacturing company with over ₦500 million in debt, successfully restructuring operations and recovering assets for secured creditors.",
    },
  },
  {
    title: "Company Law",
    description:
      "Guiding businesses through company formation, governance, and compliance.",
    image:
      "https://res.cloudinary.com/davidleo/image/upload/v1747511947/westernedge/close-up-law-scale_etid9f.jpg",
    dialogContent: {
      overview:
        "Our Company Law practice provides comprehensive legal support for all aspects of a company's lifecycle, from formation and daily operations to expansion and dissolution.",
      services: [
        "Company incorporation and registration",
        "Corporate governance structures",
        "Directors' duties and liabilities",
        "Shareholders' agreements",
        "Company secretarial services",
        "Corporate restructuring",
        "Regulatory compliance",
      ],
      benefits: [
        "Ensure proper corporate governance and compliance",
        "Minimize directors' personal liability risks",
        "Protect shareholders' interests",
        "Strategic legal foundation for business growth",
      ],
      caseStudy:
        "Advised a family-owned business on its transition to a formal corporate structure, implementing governance systems that facilitated a successful ₦200 million capital raise from investors.",
    },
  },
  {
    title: "Commercial Advice and Agreements",
    description:
      "Drafting and negotiating commercial agreements tailored to your needs.",
    image:
      "https://res.cloudinary.com/davidleo/image/upload/v1747511947/westernedge/close-up-law-scale_etid9f.jpg",
    dialogContent: {
      overview:
        "Our Commercial Advice and Agreements practice provides strategic legal guidance and tailored contract solutions to protect your business interests in all commercial relationships.",
      services: [
        "Commercial contract drafting and negotiation",
        "Supply and distribution agreements",
        "Service level agreements",
        "Agency and distribution arrangements",
        "Outsourcing agreements",
        "Confidentiality and non-disclosure agreements",
        "Terms and conditions of business",
      ],
      benefits: [
        "Mitigate commercial risks through well-drafted agreements",
        "Protect your business interests in commercial relationships",
        "Ensure legal compliance while achieving business objectives",
        "Prevent disputes through clear contractual terms",
      ],
      caseStudy:
        "Developed a comprehensive suite of commercial agreements for a leading e-commerce platform, including merchant agreements, payment processing terms, and customer policies that reduced disputes by 40%.",
    },
  },
  {
    title: "Commercial Disputes Resolution and Arbitration",
    description:
      "Resolving disputes efficiently through litigation, mediation, or arbitration.",
    image:
      "https://res.cloudinary.com/davidleo/image/upload/v1747511947/westernedge/close-up-law-scale_etid9f.jpg",
    dialogContent: {
      overview:
        "Our Dispute Resolution practice offers strategic representation in commercial disputes, with expertise in litigation, arbitration, and alternative dispute resolution methods.",
      services: [
        "Commercial litigation in all Nigerian courts",
        "Domestic and international arbitration",
        "Mediation and negotiation",
        "Expert determination",
        "Emergency injunctive relief",
        "Enforcement of judgments and awards",
        "Settlement agreements",
      ],
      benefits: [
        "Strategic dispute resolution aligned with business objectives",
        "Cost-effective alternatives to traditional litigation",
        "Experienced representation in complex commercial disputes",
        "Protection of business relationships through appropriate resolution methods",
      ],
      caseStudy:
        "Successfully represented a multinational corporation in a complex contractual dispute through arbitration under the Lagos Court of Arbitration rules, securing a favorable award worth over $3 million.",
    },
  },
  {
    title: "Development Schemes",
    description:
      "Providing legal expertise for real estate and development projects.",
    image:
      "https://res.cloudinary.com/davidleo/image/upload/v1747511947/westernedge/close-up-law-scale_etid9f.jpg",
    dialogContent: {
      overview:
        "Our Development Schemes practice offers comprehensive legal support for all aspects of real estate development, from land acquisition to project completion and sales.",
      services: [
        "Land acquisition and due diligence",
        "Planning and zoning compliance",
        "Development agreements",
        "Construction contracts",
        "Environmental compliance",
        "Infrastructure agreements",
        "Sales and marketing compliance",
      ],
      benefits: [
        "Secure clean title to development properties",
        "Navigate complex regulatory requirements efficiently",
        "Minimize development risks through proper legal structures",
        "Strategic approaches to project financing and security",
      ],
      caseStudy:
        "Provided comprehensive legal support for a 200-unit residential development in Abuja, from land acquisition and planning approvals to construction contracts and unit sales, ensuring full compliance with all regulatory requirements.",
    },
  },
  {
    title: "Formation of Companies, Corporations, and Trusts",
    description:
      "Facilitating the establishment of legal entities and trust structures.",
    image:
      "https://res.cloudinary.com/davidleo/image/upload/v1747511947/westernedge/close-up-law-scale_etid9f.jpg",
    dialogContent: {
      overview:
        "Our team specializes in creating optimal legal structures for businesses, investments, and asset protection through companies, corporations, and trusts.",
      services: [
        "Private and public company formation",
        "Not-for-profit incorporation",
        "Trust establishment and administration",
        "Family business structures",
        "Special purpose vehicles",
        "Holding company structures",
        "Corporate secretarial services",
      ],
      benefits: [
        "Optimize tax efficiency through appropriate structures",
        "Protect assets through proper entity selection",
        "Create governance structures that support business goals",
        "Ensure compliance with all regulatory requirements",
      ],
      caseStudy:
        "Designed and implemented a complex corporate structure for a family business with operations across multiple Nigerian states, incorporating holding companies and operational subsidiaries that facilitated tax efficiency and succession planning.",
    },
  },
  {
    title: "Foreign Investments",
    description:
      "Advising on legal frameworks and opportunities for foreign investors.",
    image:
      "https://res.cloudinary.com/davidleo/image/upload/v1747511947/westernedge/close-up-law-scale_etid9f.jpg",
    dialogContent: {
      overview:
        "Our Foreign Investments practice provides comprehensive legal support for international investors entering the Nigerian market, ensuring compliance with local regulations while optimizing investment structures.",
      services: [
        "Investment structure optimization",
        "Foreign exchange regulations compliance",
        "Local content requirements",
        "NIPC registration and incentives",
        "Joint venture and partnership arrangements",
        "Repatriation of profits",
        "Investment protection strategies",
      ],
      benefits: [
        "Navigate complex Nigerian investment regulations confidently",
        "Optimize tax efficiency for foreign investments",
        "Protect investment through appropriate legal structures",
        "Strategic compliance with local content requirements",
      ],
      caseStudy:
        "Advised a major European manufacturing company on its $75 million investment in Nigeria, structuring the investment to optimize tax benefits while ensuring compliance with local content and foreign exchange regulations.",
    },
  },
  {
    title: "Franchise and License Agreements",
    description: "Drafting and reviewing franchise and licensing agreements.",
    image:
      "https://res.cloudinary.com/davidleo/image/upload/v1747511947/westernedge/close-up-law-scale_etid9f.jpg",
    dialogContent: {
      overview:
        "Our Franchise and License Agreements practice provides specialized legal services for franchisors, franchisees, and businesses involved in licensing intellectual property and business systems.",
      services: [
        "Franchise agreement drafting and negotiation",
        "Franchise disclosure documents",
        "Master franchise arrangements",
        "License agreement structuring",
        "Intellectual property protection in franchising",
        "Franchise dispute resolution",
        "Regulatory compliance for franchising",
      ],
      benefits: [
        "Protect your business model and intellectual property",
        "Ensure regulatory compliance in franchise operations",
        "Clearly define rights and obligations of all parties",
        "Strategic approaches to franchise expansion",
      ],
      caseStudy:
        "Developed the complete franchise documentation package for a growing Nigerian restaurant chain, enabling successful expansion to 15 franchise locations within 24 months while protecting the brand's intellectual property.",
    },
  },
  {
    title: "Immigration Matters",
    description:
      "Handling expatriate quotas, business permits, and residence permits.",
    image:
      "https://res.cloudinary.com/davidleo/image/upload/v1747511947/westernedge/close-up-law-scale_etid9f.jpg",
    dialogContent: {
      overview:
        "Our Immigration practice provides comprehensive legal support for businesses and individuals navigating Nigeria's immigration requirements, from work permits to expatriate quotas.",
      services: [
        "Business permit applications and renewals",
        "Expatriate quota applications and management",
        "Residence permit processing",
        "CERPAC card applications",
        "Subject To Regularization (STR) visas",
        "Temporary work permit arrangements",
        "Immigration compliance for corporate entities",
      ],
      benefits: [
        "Ensure compliance with Nigerian immigration regulations",
        "Streamline expatriate employee onboarding",
        "Strategic planning for international staff deployment",
        "Avoid costly delays and penalties through proper documentation",
      ],
      caseStudy:
        "Successfully managed the immigration requirements for a multinational oil company's expansion into Nigeria, securing business permits and expatriate quotas for 25 specialized personnel within tight project timelines.",
    },
  },
  {
    title: "Information and Communications Technology",
    description:
      "Providing legal support for ICT-related transactions and compliance.",
    image:
      "https://res.cloudinary.com/davidleo/image/upload/v1747511947/westernedge/close-up-law-scale_etid9f.jpg",
    dialogContent: {
      overview:
        "Our ICT Law practice specializes in the unique legal challenges faced by technology companies and traditional businesses adopting digital solutions.",
      services: [
        "Software licensing and development agreements",
        "Data protection and privacy compliance",
        "Technology transfer agreements",
        "E-commerce regulations",
        "Fintech regulations and compliance",
        "Telecommunications licensing",
        "Cybersecurity and data breach response",
      ],
      benefits: [
        "Navigate complex regulatory requirements in the tech sector",
        "Protect intellectual property in technology transactions",
        "Ensure compliance with data protection regulations",
        "Strategic legal support for digital transformation",
      ],
      caseStudy:
        "Advised a leading Nigerian fintech startup on its regulatory strategy, securing necessary licenses from the Central Bank of Nigeria and implementing data protection measures compliant with the NDPR, enabling the successful launch of innovative payment services.",
    },
  },
  {
    title: "Lease Transactions",
    description:
      "Assisting with lease agreements and property-related transactions.",
    image:
      "https://res.cloudinary.com/davidleo/image/upload/v1747511947/westernedge/close-up-law-scale_etid9f.jpg",
    dialogContent: {
      overview:
        "Our Lease Transactions practice provides comprehensive legal support for commercial and residential leasing, protecting the interests of both landlords and tenants.",
      services: [
        "Commercial lease negotiation and drafting",
        "Residential tenancy agreements",
        "Lease renewals and terminations",
        "Rent review provisions",
        "Dilapidations claims",
        "Service charge disputes",
        "Landlord and tenant litigation",
      ],
      benefits: [
        "Secure favorable terms in lease negotiations",
        "Minimize risks through clear contractual provisions",
        "Protect property rights in leasing relationships",
        "Strategic approaches to lease disputes",
      ],
      caseStudy:
        "Negotiated and drafted complex commercial lease agreements for a major retail chain's expansion across five locations in Lagos, securing favorable terms including tenant improvement allowances and flexible renewal options.",
    },
  },
  {
    title: "Legal Audits",
    description:
      "Conducting comprehensive legal audits to ensure compliance and mitigate risks.",
    image:
      "https://res.cloudinary.com/davidleo/image/upload/v1747513650/westernedge/african-american-manager-working-accountancy-report-analyzing-administrative-files-company-repository-businessman-checking-bureaucracy-record-searching-management-research_prf9hx.jpg",
    dialogContent: {
      overview:
        "Our Legal Audit service provides a thorough review of your business operations, contracts, and practices to identify legal risks and compliance issues before they become problems.",
      services: [
        "Corporate governance audits",
        "Contract portfolio reviews",
        "Regulatory compliance assessments",
        "Employment practices audits",
        "Intellectual property audits",
        "Data protection compliance reviews",
        "Risk management framework development",
      ],
      benefits: [
        "Identify and mitigate legal risks proactively",
        "Ensure compliance with relevant laws and regulations",
        "Strengthen corporate governance practices",
        "Build robust legal foundations for business growth",
      ],
      caseStudy:
        "Conducted a comprehensive legal audit for a Nigerian manufacturing company preparing for private equity investment, identifying and resolving key legal risks that facilitated successful completion of a ₦1.5 billion investment round.",
    },
  },
  {
    title: "Partnership and Joint Ventures",
    description:
      "Structuring and advising on partnerships and joint venture agreements.",
    image:
      "https://res.cloudinary.com/davidleo/image/upload/v1747511947/westernedge/close-up-law-scale_etid9f.jpg",
    dialogContent: {
      overview:
        "Our Partnership and Joint Ventures practice provides strategic legal guidance for businesses looking to collaborate effectively while protecting their interests.",
      services: [
        "Joint venture structuring and documentation",
        "Partnership agreements",
        "Shareholders' agreements for joint ventures",
        "Cross-border collaboration structures",
        "Joint operating agreements",
        "Profit sharing and distribution mechanisms",
        "Exit strategy planning",
      ],
      benefits: [
        "Create clear frameworks for business collaboration",
        "Protect intellectual property in joint enterprises",
        "Establish efficient governance structures",
        "Plan for successful exits and dispute resolution",
      ],
      caseStudy:
        "Structured and documented a complex joint venture between a Nigerian company and an international partner for a major infrastructure project, creating governance mechanisms that allowed efficient decision-making while protecting both parties' interests.",
    },
  },
  {
    title: "Regulatory Permits and Approvals",
    description:
      "Navigating regulatory requirements to secure necessary permits and approvals.",
    image:
      "https://res.cloudinary.com/davidleo/image/upload/v1747511947/westernedge/close-up-law-scale_etid9f.jpg",
    dialogContent: {
      overview:
        "Our Regulatory Permits and Approvals practice helps businesses navigate complex regulatory landscapes to secure the authorizations needed to operate legally and effectively.",
      services: [
        "Sectoral operating licenses and permits",
        "Environmental permits and compliance",
        "Health and safety certifications",
        "Industry-specific regulatory approvals",
        "Permit renewal management",
        "Regulatory investigations support",
        "Compliance training and programs",
      ],
      benefits: [
        "Navigate complex regulatory requirements efficiently",
        "Avoid costly operational delays due to missing permits",
        "Maintain good relationships with regulatory authorities",
        "Strategic compliance planning for business operations",
      ],
      caseStudy:
        "Successfully secured all necessary regulatory approvals and permits for a new pharmaceutical manufacturing facility in Nigeria, coordinating applications with multiple regulatory bodies and ensuring timely project completion.",
    },
  },
];

export const ourProcess = [
  {
    step: 1,
    title: "Consultation",
    bgImage:
      "https://res.cloudinary.com/davidleo/image/upload/v1747396438/westernedge/ChatGPT_Image_May_16_2025_12_49_38_PM_fpldqr.png",

    description:
      "We begin by understanding your needs and objectives through a detailed consultation.",
  },
  {
    step: 2,
    title: "Strategic Development",
    bgImage:
      "https://res.cloudinary.com/davidleo/image/upload/v1747396438/westernedge/ChatGPT_Image_May_16_2025_12_51_45_PM_i04bq7.png",

    description:
      "Our team crafts a tailored strategy to address your specific legal challenges.",
  },
  {
    step: 3,
    title: "Implementation",
    bgImage:
      "https://res.cloudinary.com/davidleo/image/upload/v1747396437/westernedge/ChatGPT_Image_May_16_2025_12_53_05_PM_e09zhu.png",

    description:
      "We execute the strategy with precision, ensuring compliance and efficiency.",
  },
  {
    step: 4,
    title: "Review and Feedback",
    bgImage:
      "https://res.cloudinary.com/davidleo/image/upload/v1747263950/westernedge/Rectangle_2_tt9xo0.png",

    description:
      "We review the outcomes and gather your feedback to ensure satisfaction.",
  },
];

export const testimonials = [
  {
    name: "Sarah.A",
    country: "Nigeria",
    category: "Money Transfer",
    feedback:
      "SmashRemit makes international transfers super fast and simple. I use it weekly for my business!",
    image:
      "https://res.cloudinary.com/davidleo/image/upload/v1747856072/westernedge/smash-remit/Frame_1000003319_pwobwh.png",
    flagEmoji: "🇳🇬",
  },
  {
    name: "John.B",
    country: "Nigeria",
    category: "Payment Service",
    feedback:
      "SmashRemit makes international transfers super fast and simple. I use it weekly for my business!",
    image:
      "https://res.cloudinary.com/davidleo/image/upload/v1747856072/westernedge/smash-remit/Frame_1000003319_pwobwh.png",
    flagEmoji: "🇳🇬",
  },
  {
    name: "Sarah.A",
    country: "USA",
    category: "Remittance",
    feedback:
      "SmashRemit makes international transfers super fast and simple. I use it weekly for my business!",
    image:
      "https://res.cloudinary.com/davidleo/image/upload/v1747856072/westernedge/smash-remit/Frame_1000003319_pwobwh.png",
    flagEmoji: "🇺🇸",
  },
  {
    name: "Amina.C",
    country: "Kenya",
    category: "International",
    feedback:
      "SmashRemit makes international transfers super fast and simple. I use it weekly for my business!",
    image:
      "https://res.cloudinary.com/davidleo/image/upload/v1747856072/westernedge/smash-remit/Frame_1000003319_pwobwh.png",
    flagEmoji: "🇰🇪",
  },
];

export const footerLinks = [
  {
    title: "Features",
    links: [
      { title: "Money Transfer", link: "#" },
      { title: "Virtual Cards", link: "#" },
      { title: "Investments & ROI", link: "#" },
      { title: "Multi-Currency Wallets", link: "#" },
      { title: "Bill Payments", link: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Blog", link: "#" },
      { title: "About Us", link: "#" },
      { title: "Partners", link: "#" },
    ],
  },
  {
    title: "Help",
    links: [
      { title: "FAQ", link: "/faqs" },
      { title: "Contact Us", link: "/contact-us" },
      { title: "Terms of Service", link: "/terms-of-service" },
      { title: "Privacy Policy", link: "/privacy-policy" },
    ],
  },
];
export const faqs = {
  general: [
    {
      question: "What services do you offer?",
      answer:
        "We provide a wide range of legal services, including corporate law, banking law, dispute resolution, and more. Please refer to our scope of practice for detailed information.",
    },
    {
      question: "Where are you located?",
      answer:
        "Our office is located in Nigeria. Contact us for specific directions or to schedule a consultation.",
    },
    {
      question: "How can I schedule a consultation?",
      answer:
        "You can schedule a consultation by contacting us through our website or by calling our office directly.",
    },
  ],
  billing: [
    {
      question: "What are your fees?",
      answer:
        "Our fees vary depending on the complexity and scope of the legal services required. We provide transparent pricing during the consultation process.",
    },
    {
      question: "Do you offer payment plans?",
      answer:
        "Yes, we offer flexible payment plans to accommodate our clients' needs. Please discuss this with us during your consultation.",
    },
    {
      question: "Do you charge for the initial consultation?",
      answer:
        "We offer an initial consultation to understand your needs. Contact us to learn more about our consultation policies.",
    },
  ],
  expertise: [
    {
      question: "What industries do you specialize in?",
      answer:
        "We specialize in various industries, including corporate, banking, construction, ICT, and more. Our team has extensive experience across multiple sectors.",
    },
    {
      question: "Do you handle international cases?",
      answer:
        "Yes, we provide legal services for foreign investments and international matters. Contact us for more details.",
    },
    {
      question: "What sets you apart from other law firms?",
      answer:
        "Our commitment to excellence, personalized approach, and innovative solutions make us stand out. We prioritize our clients' needs and deliver exceptional results.",
    },
  ],
};

export const partners = [
  {
    name: "Yinka Davies, MICIArb. LLB .BL.",
    title: "Founder & Managing Partner",
    description:
      "Yinka Davies is a Barrister and Solicitor of the Supreme Court of Nigeria and a founding partner of the firm. He has extensive experience in commercial law practice, debt recovery, insolvency, intellectual property rights, and real estate finance.",
    credentials: {
      education: [
        "LL.B., Lagos State University",
        "B.L., Nigerian Law School",
        "Member, Chartered Institute of Arbitrators (MCIArb)",
      ],
      specializations: [
        "Commercial Law",
        "Debt Recovery & Insolvency",
        "Intellectual Property Rights",
        "Real Estate Finance",
      ],
      memberships: [
        "Nigerian Bar Association (NBA)",
        "International Bar Association (IBA)",
        "Society of Construction Industry Arbitrators",
      ],
    },
    keyAchievements: [
      "Successfully handled multiple high-value receivership briefs for leading Nigerian banks",
      "Led the legal team in securing regulatory protection for major intellectual property portfolios",
      "Pioneered the firm's real estate finance practice, advising on transactions exceeding ₦5 billion",
    ],
    image:
      "https://res.cloudinary.com/davidleo/image/upload/v1747329463/westernedge/WhatsApp_Image_2025-05-15_at_09.27.54_3b7e15fc_soo3dg.jpg",
  },
  {
    name: "Adejoke Davies, LLB. BL.",
    title: "Co-Founder",
    description:
      "Adejoke Davies is a co-founder of Westernedge Solicitors and a brilliant legal practitioner with expertise in real estate law. She has successfully acquired properties for clients within and outside Nigeria and is known for her endurance, persistence, and result-oriented approach.",
    credentials: {
      education: [
        "LL.B., (University details)",
        "B.L., Nigerian Law School (2010)",
      ],
      specializations: [
        "Real Estate Law",
        "Property Acquisition",
        "Construction Law",
        "Commercial Contracts",
      ],
      memberships: [
        "Nigerian Bar Association (NBA)",
        "Real Estate Lawyers Association of Nigeria",
      ],
    },
    keyAchievements: [
      "Successfully negotiated and completed property acquisitions valued at over ₦3 billion for corporate clients",
      "Developed the firm's real estate practice into a market-leading service",
      "Pioneered innovative legal structures for complex property transactions",
    ],
    image:
      "https://res.cloudinary.com/davidleo/image/upload/v1747330051/westernedge/WhatsApp_Image_2025-05-15_at_18.24.48_f9f25e82_hzbgdi.jpg",
  },
  {
    name: "Kayode Asade, LLB. BL.",
    title: "Senior Associate",
    description:
      "Kayode Asade is a highly focused attorney with expertise in estates and trusts, media and entertainment law, corporate and commercial law, and intellectual property rights. He has successfully handled site acquisitions for telecommunication companies and credit securitization.",
    credentials: {
      education: [
        "LL.B., Lagos State University (2012)",
        "B.L., Nigerian Law School (2013)",
      ],
      specializations: [
        "Estates and Trusts",
        "Media and Entertainment Law",
        "Corporate and Commercial Law",
        "Intellectual Property Rights",
      ],
      memberships: [
        "Nigerian Bar Association (NBA)",
        "Intellectual Property Law Association of Nigeria",
      ],
    },
    keyAchievements: [
      "Led legal team in site acquisitions for a major telecommunications company across 5 states",
      "Structured and executed credit securitization transactions exceeding ₦800 million",
      "Developed comprehensive intellectual property protection strategies for media companies",
    ],
    image:
      "https://res.cloudinary.com/davidleo/image/upload/v1747262548/westernedge/WhatsApp_Image_2025-05-12_at_11.41.36_b28f9870_trtrex.jpg",
  },
  {
    name: "Yetunde Asaolu",
    title: "Associate",
    description:
      "Yetunde Asaolu is an astute member of the firm specializing in corporate governance, intellectual property, energy, and cyber issues. She has advised clients on intellectual property protection, corporate structuring, and capital raising exercises.",
    credentials: {
      education: [
        "LL.B., Joseph Ayo Babalola University",
        "B.L., Nigerian Law School (2023)",
      ],
      specializations: [
        "Corporate Governance",
        "Intellectual Property",
        "Energy Law",
        "Cybersecurity and Data Protection",
      ],
      memberships: [
        "Nigerian Bar Association (NBA)",
        "Young Corporate Lawyers Forum",
      ],
    },
    keyAchievements: [
      "Advised a leading beverage company on comprehensive intellectual property protection strategy",
      "Key team member in establishing a Nigerian subsidiary for an international smart card company",
      "Developed regulatory compliance frameworks for technology startups",
    ],
    image:
      "https://res.cloudinary.com/davidleo/image/upload/v1747329784/westernedge/pm_1741759979010_cmp_ztsrba.jpg",
  },
];
// Add a new section for Case Studies to showcase expertise
export const caseStudies = [
  {
    title: "Complex Corporate Restructuring",
    client: "Major Manufacturing Conglomerate",
    challenge:
      "A leading manufacturing group needed to restructure its operations across multiple subsidiaries to improve efficiency and prepare for international investment.",
    solution:
      "We designed and implemented a comprehensive corporate restructuring plan that consolidated operations, resolved cross-subsidiary liabilities, and created a streamlined governance structure.",
    outcome:
      "The restructuring enabled the client to secure a $30 million investment from international partners and achieve operational cost savings of approximately 25%.",
    practice: "Corporate and Commercial Law",
  },
  {
    title: "High-Stakes Commercial Dispute",
    client: "Technology Services Provider",
    challenge:
      "Our client faced a ₦1.2 billion claim for alleged breach of contract that threatened the company's financial stability and reputation.",
    solution:
      "We developed a strategic dispute resolution approach combining aggressive legal defense with a parallel negotiation strategy that highlighted mutual business interests.",
    outcome:
      "Successfully resolved the dispute through mediation with minimal financial impact and preserved the business relationship between the parties.",
    practice: "Commercial Disputes Resolution and Arbitration",
  },
  {
    title: "Complex Real Estate Development",
    client: "Property Development Company",
    challenge:
      "A major residential and commercial mixed-use development faced regulatory obstacles and complex land title issues that threatened project viability.",
    solution:
      "Our team conducted comprehensive due diligence, resolved historical title defects, and navigated the regulatory approval process across multiple government agencies.",
    outcome:
      "Secured clean title and all necessary permits, allowing the ₦3.5 billion project to proceed on schedule and without legal complications.",
    practice: "Development Schemes",
  },
  {
    title: "International Market Entry",
    client: "European Technology Company",
    challenge:
      "A leading European technology company sought to enter the Nigerian market but faced complex regulatory, local content, and corporate structuring challenges.",
    solution:
      "We designed a comprehensive market entry strategy including corporate structure, regulatory compliance approach, and localization plans that satisfied all legal requirements.",
    outcome:
      "Successful market entry with all necessary approvals and permits obtained within four months, significantly faster than industry average.",
    practice: "Foreign Investments",
  },
];

export const contactInformation = {
  address: `5 Simpson Street, Off Lewis Street, Shobo House,
        2nd Floor, Left Wing.`,
  phoneNumbers: ["08063023740", "08035751934"],
  emails: [
    "Westernedgesolicitors@gmail.com",
    "yinka@westernedgesolicitorslaw.com",
  ],
  previousAddress: `Our office was formerly located at No 12 Moshalashi Street, Somolu Lagos before moving to No 5 Simpson Street, Lagos Island, Lagos, a rapidly developing business neighborhood in Lagos.`,
  locationDetails: `Our location affords easy access to the central business district of Lagos Island and its rich confluence of first-generation enterprises such as Construction Companies, Banks, Telecommunication Companies, Energy, Oil and Gas Companies, and other Blue Chip and Trading Companies.`,
};

export const aboutUs = {
  title: "About Our Firm",
  description: `Westernedge Solicitors is a dynamic law firm that strives to provide unique, timely, and highly qualitative legal services.`,
  details: [
    `Our firm is endowed with a team of dedicated and talented professionals that have the requisite expertise to offer advice and legal services on a diverse range of legal issues.`,
    `We specialize in areas such as criminal matters, banking, labour law, recovery and insolvency, trade matters, intellectual property, construction law, and investment.`,
  ],
};
