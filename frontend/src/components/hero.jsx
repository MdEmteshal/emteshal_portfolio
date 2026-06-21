export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-blue-400 mb-2">Hello, I'm</p>

          <h1 className="text-6xl font-bold">Md Emteshal</h1>

          <h2 className="text-3xl text-slate-400 mt-3">
            AI Engineer & Python Backend Developer
          </h2>

          <p className="mt-6 text-slate-400">
           AI Engineer and Python Backend Developer with experience in
            FastAPI, Python, MongoDB, REST APIs, LangChain, AI-powered
            applications, and scalable backend systems. Passionate about
            building intelligent solutions, automation workflows, and
            high-performance web applications.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-blue-600 px-6 py-3 rounded-xl">
              Hire Me
            </button>

            <a
              href="/resume.pdf"
              download
              className="border border-blue-600 px-6 py-3 rounded-xl download inline-block"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/profile.jpg"
            alt=""
            className="w-80 rounded-full border-4 border-blue-500"
          />
        </div>
      </div>
    </section>
  );
}
