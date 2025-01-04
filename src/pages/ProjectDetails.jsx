import { useParams } from "react-router-dom";
import donation from '../assets/donation.png';
import fitness from '../assets/fitness.png';
import eco from '../assets/eco.png';
import gadget from '../assets/gadget.png';
import movie from '../assets/movie.png';
import pat from '../assets/pat.png';
import dream11 from '../assets/dream11.png';
import g3 from '../assets/g3-architects.png'

const projectData = [
  {
    id: 1,
    title: "Peddy - Pet Adoption Platform",
    description: "Responsive platform for browsing and adopting pets across categories.",
    details: "Peddy features dynamic pet listings with details such as name, breed, age, gender, and price. It allows users to filter pets by categories, view detailed information in a modal, and adopt pets through a countdown confirmation modal. The platform sorts pets based on price and is designed to be fully responsive, providing a great experience across devices.",
    tools: ["React", "Tailwind CSS", "Firebase", "Node.js"],
    image: pat
  },
  {
    id: 2,
    title: "Fitness - Health & Fitness Platform",
    description: "Health platform offering workout programs, BMI calculator, and fitness plans.",
    details: "The Fitness platform includes sections like workout programs, BMI calculator, habit formation tips, trainer profiles, and more. It offers various plans like Regular, Standard, and Premium, each designed to help users achieve fitness goals.",
    tools: ["React", "Bootstrap", "Chart.js", "Firebase"],
    image: fitness
  },
  {
    id: 3,
    title: "Donate for Various Causes in Bangladesh",
    description: "Donate for flood victims, movements, and rebuilding lives in Bangladesh.",
    details: "Donate now to support various causes in Bangladesh. Your contributions will provide crucial relief to those affected by disasters and movements.",
    tools: ["React", "Tailwind CSS", "MongoDB", "Express.js"],
    image: donation
  },
  {
    id: 4,
    title: "G3 Architects - Professional Architectural Services",
    description: "Architectural firm providing innovative solutions for residential, commercial projects.",
    details: "The G3 Architects website includes a homepage, about section, and contact page with easy navigation.",
    tools: ["React", "DaisyUI", "Node.js", "MongoDB"],
    image: g3 
  },
  {
    id: 5,
    title: "Eco-Adventure Experiences - Explore Eco-Friendly Adventures",
    description: "Explore eco-friendly travel adventures with user authentication and dynamic content.",
    details: "The Eco-Adventure Experiences website provides an immersive platform for users to explore various eco-adventure activities.",
    tools: ["React", "Tailwind CSS", "Firebase", "MongoDB"],
    image: eco
  },
  {
    id: 6,
    title: "BPL Dream 11 Team Selector - Build Your Dream Cricket Team",
    description: "Build your dream cricket team within a limited coin budget.",
    details: "The BPL Dream 11 Team Selector allows users to build a team by selecting players within a coin-based budget.",
    tools: ["React", "Material-UI", "Redux", "Node.js"],
    image: dream11
  },
  {
    id: 7,
    title: "Movieverse - Movie Portal",
    description: "Explore, manage, and discover movies with CRUD operations and authentication.",
    details: "Movieverse allows users to explore movies, view detailed information, and manage favorites with CRUD operations.",
    tools: ["React", "Bootstrap", "Firebase", "MongoDB"],
    image: movie
  },
  {
    id: 8,
    title: "GadgetHeaven - E-Commerce Platform",
    description: "Browse and purchase gadgets with cart, wishlist, and dynamic listing.",
    details: "GadgetHeaven enables users to browse gadgets by categories or details, and manage their wishlist and cart with ease.",
    tools: ["React", "Context API", "Tailwind CSS", "Firebase"],
    image: gadget
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
      <div className="max-w-6xl mx-auto  px-5 py-10 mt-20">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white p-6 rounded-lg shadow-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full md:w-1/2 rounded-lg"
          />
          <div className="flex flex-col w-full">
            <h1 className="text-4xl font-bold text-gray-800">{project.title}</h1>
            <p className="text-lg text-gray-600 mt-4">{project.description}</p>
            <p className="text-gray-700 mt-4">{project.details}</p>
          </div>
        </div>

        {/* Tools Section */}
        <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tools & Technologies Used</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
      </div>
    </div>
  );
};

export default ProjectDetails;
