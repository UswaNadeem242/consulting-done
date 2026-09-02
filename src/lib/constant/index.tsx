import { Search, PenTool, Smartphone, Upload, Send, House, Layout, LineSquiggle } from 'lucide-react';
import img1 from "@/public/images/babar.jpeg"
import img3 from "@/public/images/abdullah2.png"
import img2 from "@/public/images/maryam.png"
export type NavLink = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  //   { label: 'Company Profile', href: '/company-profile' },
  //   { label: 'Why Choose MIB Education Services', href: '/why-choose-mib' },
  //   { label: 'Destinations', href: '#', hasDropdown: true },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];


export const STEPS = [
  {
    id: 1,
    title: "University & Course Selection:",
    duration: "Research",
    description: "We provide personalized counseling to help students choose the most suitable universities and academic programs based on their interests, career aspirations, and budget. Our expert guidance covers a wide range of disciplines across leading universities in the UK, USA,",
    icon: <Search size={20} />,
    theme: "green"
  },
  {
    id: 2,
    title: "Application Assistance",
    duration: "Guidance",
    description: "Step-by-step guidance in preparing and submitting university applications, including help with statement of purpose (SOP), reference letters, and application forms. Expert advice to ensure students meet all necessary deadlines and criteria for admission.",
    icon: <PenTool size={20} />,
    theme: "dark"
  },
  {
    id: 3,
    title: "Visa Guidance",
    duration: "visa applications",
    description: "Assistance with visa applications, including documentation, interview preparation, and filling out visa forms. Up- to - date knowledge of visa regulations for each destination country, ensuring a smooth and successful visa application process.",
    icon: <Smartphone size={20} />,
    theme: "dark"
  },
  {
    id: 4,
    title: "Scholarships & Financial Aid",
    duration: "scholarships",
    description: "We wrapped it all up with a polished presentation that demonstrated the app's value—showing how it empowers users to train anytime, anywhere.",
    icon: <Upload size={20} />,
    theme: "green"
  },
  {
    id: 5,
    title: "Accommodation & Travel Arrangements:",
    duration: "Support ",
    description: "Support in finding suitable accommodation that fits students’ preferences and budget, whether on-campus or off-campus. Assistance with travel arrangements, including flight bookings, airport pickups, and guidance on the best time to travel.",
    icon: <House size={20} />,
    theme: "dark"
  },
  {
    id: 6,
    title: "Pre-Departure & Post-Arrival Support",
    duration: "pre-departure briefings",
    description: "Comprehensive pre-departure briefings to help students prepare for life abroad, including cultural adaptation, health insurance, and more. Post-arrival support to ensure students settle smoothly into their new environment, including help with local registrations, orientation, and more.",
    icon: <Send size={20} />,
    theme: "green"
  }
];

export const DESTINATION = [
  {
    id: 1,
    title: "UK\nCoaching",
    image1: "https://images.unsplash.com/photo-1621274790572-7c32596bc67f?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2: "https://images.unsplash.com/photo-1454793147212-9e7e57e89a4f?q=80&w=364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: 'Get support with undergraduate and postgraduate admissions, Master\'s and PhD applications, scholarships, funding, visa preparation, and interview guidance.'
  },
  {
    id: 2,
    title: "USA\nCoaching",
    image1: "https://images.unsplash.com/photo-1623945194105-cd36c4433390?q=80&w=493&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2: "https://images.unsplash.com/photo-1576606970009-7ddc4229ced7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: 'Receive guidance for university admissions, PhD applications, research proposals, scholarships, funding opportunities, and visa and interview preparation.'
  }
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Babar Khail",
    role: "Founder",
    image: img1,
  },
  {
    id: 2,
    name: "Maryam Iqbal",
    role: "Managing Director",
    image: img2,
  },
  {
    id: 3,
    name: "Abdullah Mubashar",
    role: "American Dealing Officer",
    image: img3,
  },

];

export const FOOTER_LINK = [
  { label: 'Home', href: '/' },
  // { label: 'Company Profile', href: '#' },
  // { label: 'Why Choose MIB Education', href: '#' },
  // { label: 'Services', href: '#' },
  // { label: 'Destinations', href: '#' },
  // {
  //   subLinks: [
  //     { label: 'UK', href: '#' },
  //     { label: 'USA', href: '#' },
  //     { label: 'CANADA', href: '#' },
  //     { label: 'MALAYSIA', href: '#' },
  //     { label: 'AUSTRALIA', href: '#' },
  //     { label: 'EUROPE', href: '#' },
  //   ]
  // },
  { label: 'About', href: '/about', className: 'pt-1' },
  { label: 'Contact', href: '/contact' },
];

export const POINTS = [
  {
    title: "British Council Certified",
    description: "Trusted. Certified. Reliable."
  },
  {
    title: "End-to-End Support",
    description: "From course selection to visa preparation, we support you throughout your journey."
  },
  {
    title: "Personalized Guidance",
    description: "Our recommendations are built around your academic profile, goals, and circumstances — not a generic template."
  },
  {
    title: "UK & USA Specialists",
    description: "Our focused destination expertise helps students navigate two of the world's leading study destinations."
  }
];


export const cardsData = [
  {
    icon: <PenTool size={28} strokeWidth={1.5} />,
    title: "Free Consultation",
    description: "We start by understanding your academic background, goals, budget, and study plans."
  },
  {
    icon: <LineSquiggle size={28} strokeWidth={1.5} />,
    title: "Personalized Roadmap",
    description: "We help you build a shortlist of well-matched universities and a realistic application timeline."
  },
  {
    icon: <Layout size={28} strokeWidth={1.5} />,
    title: "Application Support",
    description: "We guide you through university applications, SOP preparation, and scholarship applications"
  },
  {
    icon: <Send size={28} strokeWidth={1.5} />,
    title: "Visa & Departure",
    description: "We help you prepare for your visa interview and get ready for a smooth start to your study abroad journey."
  }
];

export const FAQ_DATA = [
  {
    id: 1,
    question: "Do I need to know exactly which university I want before contacting you?",
    answer: " Not at all. Many students start with just a field of interest or a budget in mind — we help you narrow down the right universities and countries from there."
  },
  {
    id: 2,
    question: "Do you only work with UK and USA applicants? ",
    answer: " Yes, and that's by design. Focusing on two destinations means our guidance stays deep and current, rather than spread thin across dozens of countries."
  },
  {
    id: 3,
    question: "Can you help with PhD and research-based applications?",
    answer: "Yes — we support PhD applicants through research proposal development, supervisor matching guidance, and the full doctoral application process."
  },
  {
    id: 4,
    question: "Is the first consultation really free?",
    answer: " Yes. We start every relationship with a no-obligation consultation to understand your goals before recommending any paid support."
  },

];