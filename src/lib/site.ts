import { Code2, Globe, LayoutDashboard, Server, Plug, Database, Workflow, Brain, Cpu, Bot, FileSearch, Zap, LineChart, Network, Layers, HardDrive, GitMerge, Cog, MessageSquare, type LucideIcon } from "lucide-react";

export const CONTACT = {
  email: "omxetechnologies@gmail.com",
  phoneDisplay: "+256 777 060 110",
  phoneHref: "tel:+256777060110",
  whatsappHref: "https://wa.me/256777060110",
  linkedin: "", // add LinkedIn URL when available
  github: "", // add GitHub URL when available
  location: "Uganda",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export type Service = { icon: LucideIcon; title: string; description: string; value: string };
export type Division = { id: string; name: string; tagline: string; icon: LucideIcon; services: Service[] };

export const DIVISIONS: Division[] = [
  {
    id: "software", name: "OMXE Software", tagline: "Reliable applications built around how your business works.", icon: Code2,
    services: [
      { icon: Code2, title: "Custom software development", description: "Software designed from scratch for your specific workflows.", value: "Fits your process instead of forcing you to adapt to generic tools." },
      { icon: Globe, title: "Web application development", description: "Fast, secure web apps accessible from any device.", value: "Reach staff and customers anywhere, with nothing to install." },
      { icon: LayoutDashboard, title: "Business management systems", description: "Systems for sales, inventory, finance and operations.", value: "One clear view of the business for faster decisions." },
      { icon: Server, title: "Backend development", description: "Robust server logic, authentication and business rules.", value: "Stable foundations that keep your product dependable." },
      { icon: Plug, title: "REST API development", description: "Well-documented APIs for apps, partners and integrations.", value: "Let your systems talk to each other securely." },
      { icon: Database, title: "Database design", description: "Structured, efficient data models built to grow.", value: "Accurate data and quick reporting as volumes increase." },
      { icon: GitMerge, title: "Software integration", description: "Connecting payment, accounting and third-party tools.", value: "Less double-entry and fewer manual errors." },
    ],
  },
  {
    id: "ai", name: "OMXE AI", tagline: "Artificial intelligence applied where it creates real value.", icon: Brain,
    services: [
      { icon: Brain, title: "Artificial intelligence solutions", description: "AI features scoped to a clear business outcome.", value: "Practical AI with measurable purpose, not hype." },
      { icon: Cpu, title: "Machine learning systems", description: "Models trained on your data for classification and forecasting.", value: "Turn historical data into reliable predictions." },
      { icon: Bot, title: "AI-powered business applications", description: "Assistants and tools that support your team’s daily work.", value: "Save time on repetitive questions and tasks." },
      { icon: FileSearch, title: "RAG systems", description: "Retrieval-Augmented Generation over your documents and knowledge.", value: "Accurate answers grounded in your own information." },
      { icon: Zap, title: "Intelligent automation", description: "Automating document handling, routing and decisions.", value: "Lower operating costs and faster turnaround." },
      { icon: LineChart, title: "Data analysis & predictive systems", description: "Dashboards and predictive insight from business data.", value: "See trends early and plan with confidence." },
      { icon: MessageSquare, title: "AI integration into existing software", description: "Adding AI capabilities to the systems you already use.", value: "Upgrade without replacing what already works." },
    ],
  },
  {
    id: "systems", name: "OMXE Systems", tagline: "Architecture and infrastructure that scale with you.", icon: Network,
    services: [
      { icon: Layers, title: "System architecture", description: "Planning the structure of complex software before it is built.", value: "Avoid costly rewrites as you grow." },
      { icon: Database, title: "Database architecture", description: "Data strategy, performance and reliability planning.", value: "Data you can trust and query quickly." },
      { icon: HardDrive, title: "Backend infrastructure", description: "Hosting, deployment and monitoring setups.", value: "Uptime and performance your users can rely on." },
      { icon: Network, title: "System integration", description: "Unifying separate systems into one coherent platform.", value: "A single source of truth across departments." },
      { icon: Workflow, title: "Business process automation", description: "Mapping and automating manual business processes.", value: "Free your team for higher-value work." },
      { icon: Cog, title: "Technical consulting", description: "Independent advice on technology choices and roadmaps.", value: "Make informed decisions before you invest." },
    ],
  },
];

export const SERVICE_OPTIONS = [...DIVISIONS.flatMap((d) => d.services.map((s) => s.title)), "SmartBiz (early interest)", "Other / not sure yet"];

export type Product = { name: string; label: string; status: string; description: string; capabilities: string[] };
export const PRODUCTS: Product[] = [
  {
    name: "SmartBiz", label: "Business Management System", status: "In development",
    description: "SmartBiz is an upcoming business management platform designed to help small and medium-sized businesses monitor operations, understand their finances, and make better business decisions.",
    capabilities: ["Inventory management", "Sales tracking", "Expense tracking", "Profit calculations", "Customer records", "Customer debt management", "Business reports", "Business analytics"],
  },
];

export const PROJECT_CATEGORIES = ["AI and Machine Learning", "Software Applications", "Intelligent Systems", "Business Solutions"] as const;
export type Project = { slug: string; name: string; category: (typeof PROJECT_CATEGORIES)[number]; problem: string; solution: string; tech: string[]; status: string };
// Add only verified projects here; the Projects page renders them automatically.
export const PROJECTS: Project[] = [
  {
    slug: "smartbiz", name: "SmartBiz", category: "Business Solutions",
    problem: "Many small businesses track sales, stock and debts on paper, making it hard to know real profit.",
    solution: "An in-house OMXE platform bringing inventory, sales, expenses and customer debts into one simple system.",
    tech: ["Web application", "REST API", "Relational database", "Analytics"], status: "In development",
  },
];

export const WHY = [
  { title: "Problem-driven engineering", text: "We begin by understanding the problem." },
  { title: "Practical innovation", text: "We build solutions with real-world value." },
  { title: "Intelligent technology", text: "We apply AI where it creates meaningful value." },
  { title: "Scalable architecture", text: "We consider maintainability and future growth." },
  { title: "Business-focused development", text: "Our solutions are designed around business needs." },
];
