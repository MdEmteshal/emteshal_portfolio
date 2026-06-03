import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { FaSearch, FaChartLine, FaGoogle, FaGlobe } from "react-icons/fa";

import { SiGoogleanalytics, SiGooglesearchconsole } from "react-icons/si";

import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14">My Skills</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* SEO Executive */}
          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-blue-500 transition">
            <h3 className="text-2xl font-semibold mb-8 text-blue-400">
              SEO Executive
            </h3>

            <div className="grid grid-cols-2 gap-5">
              <Skill icon={<FaSearch />} name="Keyword Research" />

              <Skill icon={<SiGoogleanalytics />} name="Google Analytics" />

              <Skill icon={<SiGooglesearchconsole />} name="Search Console" />

              <Skill icon={<FaGoogle />} name="On-Page SEO" />

              <Skill icon={<FaGlobe />} name="Technical SEO" />

              <Skill icon={<FaChartLine />} name="AEO & SEO Strategy" />
            </div>
          </div>
          {/* Frontend */}
          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-blue-500 transition">
            <h3 className="text-2xl font-semibold mb-8 text-blue-400">
              Frontend Development
            </h3>

            <div className="grid grid-cols-2 gap-5">
              <Skill icon={<FaReact />} name="React" />
              <Skill icon={<FaJs />} name="JavaScript" />
              <Skill icon={<SiTailwindcss />} name="Tailwind CSS" />
              <Skill icon={<FaHtml5 />} name="HTML5" />
              <Skill icon={<FaCss3Alt />} name="CSS3" />
            </div>
          </div>

          {/* Backend */}
          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-blue-500 transition">
            <h3 className="text-2xl font-semibold mb-8 text-blue-400">
              Backend & Database
            </h3>

            <div className="grid grid-cols-2 gap-5">
              <Skill icon={<FaNodeJs />} name="Node.js" />
              <Skill icon={<SiExpress />} name="Express.js" />
              <Skill icon={<SiMongodb />} name="MongoDB" />
              <Skill icon={<FaDatabase />} name="MySQL" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skill({ icon, name }) {
  return (
    <div className="flex items-center gap-3 bg-slate-800 p-4 rounded-xl hover:bg-slate-700 transition">
      <span className="text-2xl text-blue-400">{icon}</span>
      <span>{name}</span>
    </div>
  );
}
