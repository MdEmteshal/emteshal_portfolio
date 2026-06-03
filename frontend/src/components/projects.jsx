import testseries from "../assets/testseries.png";
import portfolioImage from "../../public/portfolio.png";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "India Test Series",
      image: testseries,
      domain: "indiatestseries.com",
      tech: "React • Node.js • MongoDB",
      description:
        "Online mock test platform with authentication, test management and result analysis.",
    },
    {
      id: 2,
      title: "Portfolio Website",
      image: portfolioImage,
      tech: "React • Tailwind CSS • Nodejs+Expressjs • MongoDB",
      description: "Personal portfolio website showcasing projects and skills.",
    },
    {
      id: 3,
      title: "SEO Dashboard",
      image: testseries,
      tech: "SEO • Analytics",
      description:
        "Dashboard for monitoring website performance and SEO metrics.",
    },
     {
      id: 4,
      title: "School Managements System",
      image: testseries,
      tech: "Full Stack ",
      description:
        "Dashboard for monitoring website performance and SEO metrics.",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950">
      {" "}
      <div className="max-w-7xl mx-auto px-6">
        {" "}
        <h2 className="text-4xl font-bold mb-10">Featured Projects</h2>
        ```
        <div
          className="
        flex
        gap-6
        overflow-x-auto
        scrollbar-hide
        snap-x
        snap-mandatory
        pb-4
      "
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="
            min-w-[350px]
            md:min-w-[380px]
            bg-slate-900
            rounded-3xl
            overflow-hidden
            border border-slate-800
            hover:border-blue-500
            hover:-translate-y-2
            transition-all
            duration-300
          "
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>

                <p className="text-blue-400 text-sm mb-3">{project.tech}</p>
                <p className="text-blue-400 text-sm mb-3">{project.domain}</p>

                <p className="text-slate-400 text-sm leading-6">
                  {project.description}
                </p>

                <button
                  className="
                mt-5
                bg-blue-600
                px-5
                py-2
                rounded-xl
                hover:bg-blue-700
              "
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
