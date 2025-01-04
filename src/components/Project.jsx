import { useNavigate } from "react-router-dom";
import donation from '../assets/donation.png'
import eco from '../assets/eco.png'
import movie from '../assets/movie.png'


const Project = () => {
  const navigate = useNavigate();
  
  const projectData = [
    {
      "id": 3,
      "title": "Donate for Various Causes in Bangladesh",
      "description": "Donate for flood victims, movements, and rebuilding lives in Bangladesh.",
      "details": "Donate now to support various causes in Bangladesh. Your contributions will provide crucial relief to those affected by disasters and movements.",
      "image": donation 
    },
    {
      "id": 5,
      "title": "Eco-Adventure Experiences - Explore Eco-Friendly Adventures",
      "description": "Explore eco-friendly travel adventures with user authentication and dynamic content.",
      "details": "The Eco-Adventure Experiences website provides an immersive platform for users to explore various eco-adventure activities.",
      "image": eco
    },
    {
      "id": 7,
      "title": "Movieverse - Movie Portal",
      "description": "Explore, manage, and discover movies with CRUD operations and authentication.",
      "details": "Movieverse allows users to explore movies, view detailed information, and manage favorites with CRUD operations.",
      "image": movie
    },
  ];

  const handleDetailsClick = (id) => {
    navigate(`/projects/${id}`);
  };

  const handleShowAllProjects = () => {
    navigate('/projects'); // Navigate to the projects page
  };

  return (
    <section className="bg-gray-800 py-10 px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="relative bg-white rounded-lg shadow-md overflow-hidden group"
            >
              {/* Card Image or Placeholder */}
              <div className="h-48 bg-gray-300">
                <img className="object-cover w-full h-full" src={project.image} alt={project.title} />
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

        {/* Show All Projects Button */}
        <div className="mt-8 text-center">
          <button
            className="bg-green-500 text-white px-6 py-2 rounded-lg text-lg font-medium"
            onClick={handleShowAllProjects}
          >
            Show All Projects
          </button>
        </div>
      </div>
    </section>
  );
}

export default Project;
