import { useNavigate } from "react-router-dom";
import donation from '../assets/donation.png'
import fitness from '../assets/fitness.png'
import eco from '../assets/eco.png'
import gadget from '../assets/gadget.png'
import movie from '../assets/movie.png'
import pat from '../assets/pat.png'
import g3 from '../assets/g3-architects.png'
import dream11 from '../assets/dream11.png'
import honestView from '../assets/honestView.png'
import peddy from '../assets/peddy.png'

function Projects() {
  const navigate = useNavigate();

  const projectData = [
    {
      "id": 1,
      "title": "Peddy - Pet Adoption Platform",
      "description": "Responsive platform for browsing and adopting pets across categories.",
      "details": "Peddy features dynamic pet listings with details such as name, breed, age, gender, and price. It allows users to filter pets by categories, view detailed information in a modal, and adopt pets through a countdown confirmation modal. The platform sorts pets based on price and is designed to be fully responsive, providing a great experience across devices.",
      "image": pat  // Add this line for the image
    },
    {
      "id": 2,
      "title": "Fitness - Health & Fitness Platform",
      "description": "Health platform offering workout programs, BMI calculator, and fitness plans.",
      "details": "The Fitness platform includes sections like workout programs, BMI calculator, habit formation tips, trainer profiles, and more. It offers various plans like Regular, Standard, and Premium, each designed to help users achieve fitness goals.",
      "image": fitness
    },
    {
      "id": 3,
      "title": "Donate for Various Causes in Bangladesh",
      "description": "Donate for flood victims, movements, and rebuilding lives in Bangladesh.",
      "details": "Donate now to support various causes in Bangladesh. Your contributions will provide crucial relief to those affected by disasters and movements.",
      "image": donation
    },
    {
      "id": 4,
      "title": "G3 Architects - Professional Architectural Services",
      "description": "Architectural firm providing innovative solutions for residential, commercial projects.",
      "details": "The G3 Architects website includes a homepage, about section, and contact page with easy navigation.",
      "image": g3
    },
    {
      "id": 5,
      "title": "Eco-Adventure Experiences - Explore Eco-Friendly Adventures",
      "description": "Explore eco-friendly travel adventures with user authentication and dynamic content.",
      "details": "The Eco-Adventure Experiences website provides an immersive platform for users to explore various eco-adventure activities.",
      "image": eco
    },
    {
      "id": 6,
      "title": "BPL Dream 11 Team Selector - Build Your Dream Cricket Team",
      "description": "Build your dream cricket team within a limited coin budget.",
      "details": "The BPL Dream 11 Team Selector allows users to build a team by selecting players within a coin-based budget.",
      "image": dream11
    },
    {
      "id": 7,
      "title": "Movieverse - Movie Portal",
      "description": "Explore, manage, and discover movies with CRUD operations and authentication.",
      "details": "Movieverse allows users to explore movies, view detailed information, and manage favorites with CRUD operations.",
      "image": movie
    },
    {
      "id": 8,
      "title": "GadgetHeaven - E-Commerce Platform",
      "description": "Browse and purchase gadgets with cart, wishlist, and dynamic listing.",
      "details": "GadgetHeaven enables users to browse gadgets by categories or details, and manage their wishlist and cart with ease.",
      "image": gadget
    },
    {
      "id": 9,
      "title": "PeddyCare - Pet Adoption",
      "description": "A web application that connects individuals with pets in need of loving homes, allowing users to browse, adopt, and support pet adoption campaigns effortlessly.",
      "details": "The Pet Adoption Platform provides an intuitive interface for users to explore available pets, submit adoption requests, and contribute to donation campaigns. With user authentication, pet listing filters, and a responsive design, this platform ensures a seamless adoption experience.",
      "image": peddy
    },
    {
      "id": 10,
      "title": "Service Review Application System",
      "description": "A full-stack platform where users can browse services, post reviews, and manage their interactions efficiently.",
      "details": "The Service Review Application System allows users to add, update, and delete services while providing a secure review management system. With features like authentication, service search, filtering, and dynamic UI enhancements, it ensures a seamless user experience.",
      "image": honestView
    }

  ];



  const handleDetailsClick = (id) => {
    navigate(`/projects/${id}`);
  };

  return (
    <section className="bg-gray-800 py-10 px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="relative bg-white rounded-lg shadow-md overflow-hidden group"
            >
              {/* Card Image or Placeholder */}
              <div className="h-48 bg-gray-300 ">
                <img className="object-cover" src={project.image} alt="" />
              </div>

              {/* Card Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>

              {/* Hover Details Button */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition duration-300 flex items-center justify-center">
                <button
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg text-lg font-medium transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
                  onClick={() => handleDetailsClick(project.id)}
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
