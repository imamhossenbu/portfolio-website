import { useParams } from "react-router-dom";
import donation from '../assets/donation.png';
import fitness from '../assets/fitness.png';
import eco from '../assets/eco.png';
import gadget from '../assets/gadget.png';
import movie from '../assets/movie.png';
import pat from '../assets/pat.png';
import dream11 from '../assets/dream11.png';
import g3 from '../assets/g3-architects.png'
import peddy from '../assets/peddy.png'
import honestView from '../assets/honestView.png'


const projectData = [
  {
    id: 1,
    title: "PeddyCare - Pet Adoption Platform",
    description: "A responsive platform for browsing and adopting pets across categories.",
    details: "PeddyCare features dynamic pet listings with details such as name, breed, age, gender, and price. It allows users to filter pets by categories, view detailed information in a modal, and adopt pets through a countdown confirmation modal. The platform sorts pets based on price and is designed to be fully responsive, providing a great experience across devices.",
    tools: ["React", "Tailwind CSS", "Firebase", "Node.js"],
    image: pat,
    live_link: "https://b10-a6-pet-adoption.surge.sh/",
    github: "https://github.com/imamhossenbu/pat-adoption-website",
    challenges: [
      "Implementing secure authentication using Firebase and JWT.",
      "Optimizing data fetching and caching with TanStack Query.",
      "Ensuring smooth and responsive UI across all devices.",
      "Handling secure payment transactions with Stripe API."
    ],
    improvements: [
      "Adding AI-based pet recommendation system.",
      "Enhancing search and filter functionalities with advanced algorithms.",
      "Integrating real-time chat for adopters and pet shelters.",
      "Building a mobile app version for better accessibility."
    ]
  },
  {
    id: 2,
    title: "Fitness - Health & Fitness Platform",
    description: "Health platform offering workout programs, BMI calculator, and fitness plans.",
    details: "The Fitness platform includes sections like workout programs, BMI calculator, habit formation tips, trainer profiles, and more. It offers various plans like Regular, Standard, and Premium, each designed to help users achieve fitness goals.",
    tools: ["React", "Bootstrap", "Chart.js", "Firebase"],
    image: fitness,
    live_link: "https://imamhossenbu.github.io/B10-assignment2/",
    github: "https://github.com/imamhossenbu/B10-assignment2",
    challenges: [
      "Building dynamic workout plans with interactive features.",
      "Ensuring the accuracy of the BMI calculator and workout tracking.",
      "Designing responsive layouts for various device sizes."
    ],
    improvements: [
      "Integrating real-time health data tracking.",
      "Adding a social aspect with user interaction and community-building features."
    ]
  },
  {
    id: 3,
    title: "Donate for Various Causes in Bangladesh",
    description: "Donate for flood victims, movements, and rebuilding lives in Bangladesh.",
    details: "Donate now to support various causes in Bangladesh. Your contributions will provide crucial relief to those affected by disasters and movements.",
    tools: ["React", "Tailwind CSS", "MongoDB", "Express.js"],
    image: donation,
    live_link: "https://imamhossenbu.github.io/B10-assignment-5/",
    github: "https://github.com/imamhossenbu/B10-assignment-5",
    challenges: [
      "Creating secure payment methods for donations.",
      "Integrating a system for tracking donation progress.",
      "Ensuring responsive design for mobile users."
    ],
    improvements: [
      "Adding multi-currency donation support.",
      "Building a donor feedback system."
    ]
  },
  {
    id: 4,
    title: "G3 Architects - Professional Architectural Services",
    description: "Architectural firm providing innovative solutions for residential and commercial projects.",
    details: "The G3 Architects website includes a homepage, about section, and contact page with easy navigation.",
    tools: ["React", "DaisyUI", "Node.js", "MongoDB"],
    image: g3,
    live_link: "https://imamhossenbu.github.io/g3-architects/",
    github: "https://github.com/imamhossenbu/g3-architects",
    challenges: [
      "Designing the responsive architecture of the website.",
      "Ensuring smooth content management for projects."
    ],
    improvements: [
      "Integrating 3D architectural previews.",
      "Improving site load times with optimized images and resources."
    ]
  },
  {
    id: 5,
    title: "Eco-Adventure Experiences - Explore Eco-Friendly Adventures",
    description: "Explore eco-friendly travel adventures with user authentication and dynamic content.",
    details: "The Eco-Adventure Experiences website provides an immersive platform for users to explore various eco-adventure activities.",
    tools: ["React", "Tailwind CSS", "Firebase", "MongoDB"],
    image: eco,
    live_link: "https://ecoexplorer-b10-09.netlify.app/",
    github: "https://github.com/imamhossenbu/EcoExplorer",
    challenges: [
      "Managing dynamic content for various eco-adventure activities.",
      "Creating a smooth booking and reservation system."
    ],
    improvements: [
      "Implementing AI-powered personalized adventure recommendations.",
      "Enhancing booking functionality for group adventures."
    ]
  },
  {
    id: 6,
    title: "BPL Dream 11 Team Selector - Build Your Dream Cricket Team",
    description: "Build your dream cricket team within a limited coin budget.",
    details: "The BPL Dream 11 Team Selector allows users to build a team by selecting players within a coin-based budget.",
    tools: ["React", "Material-UI", "Redux", "Node.js"],
    image: dream11,
    live_link: "https://b10-a7.surge.sh/",
    github: "https://github.com/imamhossenbu/dream11-website",
    challenges: [
      "Building a coin-based team selection system.",
      "Designing responsive player cards and budget constraints."
    ],
    improvements: [
      "Integrating real-time player stats.",
      "Implementing social sharing features."
    ]
  },
  {
    id: 7,
    title: "Movieverse - Movie Portal",
    description: "Explore, manage, and discover movies with CRUD operations and authentication.",
    details: "Movieverse allows users to explore movies, view detailed information, and manage favorites with CRUD operations.",
    tools: ["React", "Bootstrap", "Firebase", "MongoDB"],
    image: movie,
    live_link: "https://b10-a10-movie-portal.netlify.app/",
    github: "https://github.com/imamhossenbu/movieverse",
    challenges: [
      "Implementing movie data fetching and search features.",
      "Managing user favorites and authentication."
    ],
    improvements: [
      "Integrating movie recommendation algorithms.",
      "Enhancing search with filters for genres and ratings."
    ]
  },
  {
    id: 8,
    title: "GadgetHeaven - E-Commerce Platform",
    description: "Browse and purchase gadgets with cart, wishlist, and dynamic listing.",
    details: "GadgetHeaven enables users to browse gadgets by categories or details, and manage their wishlist and cart with ease.",
    tools: ["React", "Context API", "Tailwind CSS", "Firebase"],
    image: gadget,
    live_link: "https://gadgetheaven-b10-a8.netlify.app/",
    challenges: [
      "Implementing cart and wishlist features with dynamic updates.",
      "Ensuring a responsive layout across devices."
    ],
    improvements: [
      "Adding real-time stock availability.",
      "Integrating a recommendation system for gadgets."
    ]
  },
  {
    "id": 9,
    "title": "Pet Adoption Platform",
    "image": peddy,
    "live_link": "https://pet-adoption-3d21e.web.app/",
    "github": "https://github.com/imamhossenbu/PeddyCare-Client",
    "tools": [
      "React.js",
      "React Router",
      "Tailwind CSS",
      "TanStack Query",
      "React Hook Form",
      "React Query",
      "React-Quill",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Authentication",
      "JWT Tokens",
      "Stripe API (Payment Integration)",
      "Cloudinary (Image Upload)"
    ],
    "description": "A user-friendly web application that facilitates pet adoption by allowing users to browse, adopt, and contribute to pet adoption campaigns. The platform includes authentication, payment integration, and admin functionalities for better management.",
    "challenges": [
      "Implementing secure authentication using Firebase and JWT.",
      "Optimizing data fetching and caching with TanStack Query.",
      "Ensuring smooth and responsive UI across all devices.",
      "Handling secure payment transactions with Stripe API."
    ],
    "future_improvements": [
      "Adding AI-based pet recommendation system.",
      "Enhancing search and filter functionalities with advanced algorithms.",
      "Integrating real-time chat for adopters and pet shelters.",
      "Building a mobile app version for better accessibility."
    ]
  }
  ,
  {
    "id": 10,
    "title": "Service Review Application System",
    "image": honestView,
    "tools": [
      "React.js",
      "React Router",
      "Tailwind CSS",
      "TanStack Query",
      "React Hook Form",
      "React Query",
      "React-Quill",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Authentication",
      "JWT Tokens",
      "Stripe API (Payment Integration)",
      "Cloudinary (Image Upload)"
    ],
    description: "A full-stack service review platform where users can interact with services, post and manage reviews, and perform CRUD operations on services and reviews.",
    "live_link": "https://b10-assignment-11-593fd.web.app",
    "github": "https://github.com/imamhossenbu/HonestView",
    challenges: [
      "Implementing secure authentication with JWT and Firebase.",
      "Handling CRUD operations efficiently while maintaining database integrity.",
      "Optimizing UI responsiveness and animations using Framer Motion."
    ],
    improvements: [
      "Integrating an AI-based review sentiment analysis.",
      "Adding a subscription model for premium service providers.",
      "Implementing an admin dashboard for better service and user management."
    ]
  }
];



const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div className="text-center text-red-500">Project not found!</div>;
  }

  return (
    <div className="bg-gray-700">
      <div className="max-w-6xl mx-auto px-5 py-10 mt-20">
        {/* Header Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src={project.image} alt={project.title} className="w-full h-72 object-cover rounded-lg" />
          <div className="w-full mt-4">
            <h1 className="text-4xl font-bold text-gray-800">{project.title}</h1>
            <p className="text-lg text-gray-600 mt-2">{project.description}</p>
            <p className="text-gray-700 mt-4">{project.details}</p>
          </div>
        </div>

        {/* Tools Section */}
        <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tools & Technologies Used</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.tools.map((tool, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 text-gray-800 text-sm font-medium py-2 px-4 rounded-full shadow-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges and Future Improvements */}
        <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Challenges Faced</h3>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            {project.challenges && project.challenges.map((challenge, idx) => (
              <li key={idx}>{challenge}</li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6">Future Improvements</h3>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            {project.improvements && project.improvements.map((improvement, idx) => (
              <li key={idx}>{improvement}</li>
            ))}
          </ul>
        </div>

        {/* Links Section */}
        <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Project Links</h3>
          <div className="mt-4">
            {project.live_link && (
              <a
                href={project.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Live Project Link
              </a>
            )}
          </div>
          <div className="mt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub Repository Link
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};



export default ProjectDetails;
