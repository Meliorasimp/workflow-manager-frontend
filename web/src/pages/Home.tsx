import Topbar from "../components/Layout/Topbar";
import "../styles/index.css";

const Home = () => {
  const aboutData = [
    {
      id: 1,
      number: "01",
      question: "What is Automata?",
    },
    {
      id: 2,
      number: "02",
      question: "Who is Automata for?",
    },
    {
      id: 3,
      number: "03",
      question: "What problems does Automata solve?",
    },
    {
      id: 4,
      number: "04",
      question: "How does Automata work?",
    },
    {
      id: 5,
      number: "05",
      question: "What can I automate with Automata?",
    },
    {
      id: 6,
      number: "06",
      question: "Is Automata suitable for startups or teams?",
    },
  ];
  return (
    <div className="min-h-[300vh] w-80vw mx-auto bg-[#0a0a0a] relative overflow-hidden">
      {/* Radial gradient background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left gradient */}
        <div className="absolute top-0 left-0 w-200 h-200 radial-gradient-blue blur-3xl" />

        {/* Center right gradient */}
        <div className="absolute top-1/3 right-0 w-200 h-200 radial-gradient-violet blur-3xl" />

        {/* Bottom left gradient */}
        <div className="absolute bottom-0 left-1/4 w-200 h-200 radial-gradient-cyan blur-3xl" />

        {/* White circular light below hero */}
        <div className="absolute top-125 left-1/2 -translate-x-1/2 w-200 h-200 rounded-full radial-gradient-white blur-[100px]" />
      </div>

      {/* Content */}
      <section className="relative z-10 min-h-screen">
        <Topbar />

        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
          <h1 className="text-6xl md:text-7xl font-bold hero-gradient-text mb-6">
            Run your startup operations on autopilot
          </h1>
          <p className="text-xl md:text-2xl hero-gradient-text mb-4 max-w-3xl mx-auto">
            Automate approvals, workflows, and internal processes—so your team
            spends less time chasing tasks and more time building.
          </p>
          <div className="flex items-center justify-center gap-x-8 text-purple-300">
            <div className="flex items-center gap-x-2 hover:text-purple-400 transition-colors">
              <span className="text-2xl">⚡</span> Automate
            </div>
            <div className="flex items-center gap-x-2 hover:text-purple-400 transition-colors">
              <span className="text-2xl">📊</span> Track
            </div>
            <div className="flex items-center gap-x-2 hover:text-purple-400 transition-colors">
              <span className="text-2xl">🚀</span> Scale
            </div>
          </div>
          <div className="flex gap-4 justify-center mt-4">
            <button className="px-8 py-3 text-white rounded-lg font-medium transition-all cursor-pointer border hover:text-purple-400 duration-300">
              Get Started
            </button>
            <button className="px-8 py-3 text-white rounded-lg font-medium border hover:text-purple-400 duration-300 transition-all cursor-pointer">
              Learn More
            </button>
          </div>
        </div>

        {/* Feature cards with glassmorphism */}
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Fast", desc: "Lightning-fast workflow execution" },
              { title: "Intuitive", desc: "Easy to use interface" },
              { title: "Powerful", desc: "Advanced automation capabilities" },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="text max-w-6xl min-h-1/3 mx-auto flex">
        <div className="w-1/2 h-full">
          <h1 className="hero-gradient-text text-4xl font-semibold leading-relaxed ">
            A Workflow Management System Built For You. ❤️
          </h1>

          {aboutData.map((item) => (
            <div
              key={item.id}
              className="flex items-center p-4 gap-x-4 border-gray-400 border-b"
            >
              <p className="text-slate-400 max-w-lg">{item.number}</p>
              <h1 className="text-gray-300 text-xl">{item.question}</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-4 ml-auto"
                color="white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          ))}
        </div>
        <div className="w-1/2"></div>
      </section>
    </div>
  );
};

export default Home;
