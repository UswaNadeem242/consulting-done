import { Search, PenTool, Smartphone, Upload, Send, House, Layout } from 'lucide-react';

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
  },
  {
    id: 2,
    title: "USA\nCoaching",
    image1: "https://images.unsplash.com/photo-1623945194105-cd36c4433390?q=80&w=493&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2: "https://images.unsplash.com/photo-1576606970009-7ddc4229ced7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Roman Frederick",
    role: "Regional Manager",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Jane Cooper",
    role: "Medical Assistant",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Esther Howard",
    role: "President of Sales",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&auto=format&fit=crop",
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
            title: "Personalized Counseling",
            description: "We understand that every student has unique aspirations and challenges, which is why we offer tailored solutions that fit individual needs."
        },
        {
            title: "Comprehensive Support",
            description: "From initial consultation to post-arrival services, we are with you every step of the way."
        },
        {
            title: "Global Reach",
            description: "We work with universities across multiple countries, ensuring a wide range of options for students."
        },
        {
            title: "Proven Success Rate",
            description: "Our track record of successful student placements and satisfied clients speaks for itself."
        }
    ];


   export const cardsData = [
        {
            icon: <PenTool size={28} strokeWidth={1.5} />,
            title: "Find Course",
            description: "Unsure about the best universities and courses for you? Use our AI-powered University Course Finder to find exactly what you need, saving you months of research"
        },
        {
            icon: <Layout size={28} strokeWidth={1.5} />,
            title: "Admission Updates",
            description: "Stay informed with instant updates on your applications. Effortlessly monitor your application progress and receive timely updates and offers"
        },
        {
            icon: <Send size={28} strokeWidth={1.5} />,
            title: "Scholarship abroad",
            description: "Explore our extensive database of over 3,700 scholarships offered by universities, governments, and organizations. Discover fully funded, merit-based, sports..."
        }
    ];