// // export default function Education() {
// //   return (
// //     <section className="py-24">
// //       <div className="max-w-6xl mx-auto px-6">
// //         <h2 className="text-4xl font-bold mb-10">Education</h2>

// //         <div className="bg-slate-900 p-8 rounded-xl">
// //           <h3 className="font-bold text-xl">
// //             Bachelor of Computer Applications
// //           </h3>

// //           <p className="text-slate-400">2023 - 2026</p>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
export default function Education() {
  return (
    <section id="education" className="py-20 px-6  text-white">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-16">Education</h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-1 bg-cyan-400"></div>

          {/* B.Tech */}
          <div className="relative pl-16 mb-10">
            <div className="absolute left-0 w-8 h-8 bg-cyan-400 rounded-full border-4 border-[#0A192F]"></div>

            <div className="bg-[#112240] border border-blue-400/20 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white">
                Bachelor of Technology (B.Tech) – Information Technology
              </h3>

              <p className="text-blue-300 mt-2">MIT Muzaffarpur</p>

              <p className="text-gray-400 mt-1">2023 – 2027 (Present)</p>
            </div>
          </div>

          {/* Diploma */}
          <div className="relative pl-16 mb-10">
            <div className="absolute left-0 w-8 h-8 bg-cyan-400 rounded-full border-4 border-[#0A192F]"></div>

            <div className="bg-[#112240] border border-blue-400/20 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white">
                Diploma in Computer Science Engineering
              </h3>

              <p className="text-blue-300 mt-2">
                Jamia Millia Islamia, New Delhi
              </p>

              <p className="text-gray-400 mt-1">Overall Percentage: 72%</p>
            </div>
          </div>

          {/* 10th */}
          <div className="relative pl-16">
            <div className="absolute left-0 w-8 h-8 bg-cyan-400 rounded-full border-4 border-[#0A192F]"></div>

            <div className="bg-[#112240] border border-blue-400/20 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white">
                Matriculation (10th)
              </h3>

              <p className="text-blue-300 mt-2">Gandhi Janki High School</p>

              <p className="text-gray-400 mt-1">Overall Percentage: 70%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
