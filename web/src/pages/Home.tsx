import Topbar from "../components/Layout/Topbar";
import imageone from "../assets/stackedCubes.png";
import imagetwo from "../assets/startup-rocket-svgrepo-com.svg";
import imagethree from "../assets/bullseye-svgrepo-com.svg";
import imagefour from "../assets/gear-11-svgrepo-com.svg";
import imagefive from "../assets/robot-remote-control-svgrepo-com.svg";
import imagesix from "../assets/team-teamwork-users-svgrepo-com.svg";
import {
  setHomeDataId,
  setIsLoginModalOpen,
} from "../store/features/home/homeSlice";
import { useDispatch, useSelector } from "react-redux";
import "../styles/index.css";
import type { RootState } from "../store";
import { motion } from "framer-motion";
import Login from "../components/Modal/Login";
import Register from "../components/Modal/Register";

const Home = () => {
  const dispatch = useDispatch();
  const id = useSelector((state: RootState) => state.home.id);
  const isLoginModalOpen = useSelector(
    (state: RootState) => state.home.isLoginModalOpen
  );
  const setIsRegisterModalOpen = useSelector(
    (state: RootState) => state.home.isRegisterModalOpen
  );
  console.log("Login Modal State:", isLoginModalOpen);
  const aboutDataQuestions = [
    {
      id: 1,
      number: "01",
      question: "What is Automata?",
      answer:
        "Automata is a comprehensive Workflow Management System designed to streamline your business processes and boost team productivity. It provides a centralized platform where you can create, manage, and track automated workflows that handle repetitive tasks, approvals, and business logic without manual intervention.",
      icon: imageone,
    },
    {
      id: 2,
      number: "02",
      question: "Who is Automata for?",
      answer:
        "Automata is perfect for startups, small teams, and growing businesses looking to automate their internal workflows and operations. Whether you're a product team managing releases, an HR department handling onboarding, or operations teams coordinating cross-functional processes, Automata adapts to your unique workflow needs.",
      icon: imagetwo,
    },
    {
      id: 3,
      number: "03",
      question: "What problems does Automata solve?",
      answer:
        "Automata eliminates manual task tracking, reduces approval bottlenecks, and ensures nothing falls through the cracks. It solves common pain points like delayed approvals, missed deadlines, scattered communication, and the constant need to follow up on task status. By automating these processes, teams can focus on high-value work instead of administrative overhead.",
      icon: imagethree,
    },
    {
      id: 4,
      number: "04",
      question: "How does Automata work?",
      answer:
        "Automata uses intelligent workflow automation to route tasks, trigger approvals, and keep your team synchronized in real-time. You define your workflow logic using an intuitive interface, set up conditions and triggers, and Automata handles the rest—automatically assigning tasks, sending notifications, escalating when needed, and maintaining a complete audit trail of all activities.",
      icon: imagefour,
    },
    {
      id: 5,
      number: "05",
      question: "What can I automate with Automata?",
      answer:
        "You can automate approvals, task assignments, notifications, reports, and virtually any repeatable workflow process. Common use cases include employee onboarding, expense approvals, content review workflows, incident management, customer onboarding, procurement requests, code deployment pipelines, and any multi-step process that requires coordination between team members.",
      icon: imagefive,
    },
    {
      id: 6,
      number: "06",
      question: "Is Automata suitable for startups or teams?",
      answer:
        "Yes! Automata scales seamlessly with your team, from small startups with basic workflows to growing organizations with complex, multi-departmental processes. It's designed to be easy to set up initially while providing the flexibility and power to handle sophisticated automation needs as your business grows and your processes become more intricate.",
      icon: imagesix,
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
            <button
              className="px-8 py-3 text-white rounded-lg font-medium transition-all cursor-pointer border hover:text-purple-400 duration-300"
              onClick={() => dispatch(setIsLoginModalOpen(true))}
            >
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

      {/* Secondary CTA Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-blue-400 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ready to transform your workflows?
        </motion.h2>
        <motion.p
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join hundreds of teams already automating with Automata
        </motion.p>
        <motion.button
          className="px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-all"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Start Free Trial
        </motion.button>
      </section>

      <motion.section
        className="text max-w-7xl min-h-1/3 mx-auto flex"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="w-1/2 h-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="hero-gradient-text text-4xl font-semibold leading-relaxed mb-10">
            A Workflow Management System Built For You. ❤️
          </h1>

          {aboutDataQuestions.map((item, index) => (
            <motion.div
              key={item.id}
              className={`flex items-center p-4 gap-x-4 border-b cursor-pointer transition-all ${
                id === item.id
                  ? "bg-purple-600/20 border-purple-500 border-l-4 pl-3"
                  : "border-gray-400 hover:bg-white/5"
              }`}
              onClick={() => dispatch(setHomeDataId(item.id))}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              <p
                className={`max-w-lg transition-colors ${
                  id === item.id ? "text-purple-400" : "text-slate-400"
                }`}
              >
                {item.number}
              </p>
              <h1
                className={`text-xl transition-colors ${
                  id === item.id ? "text-white font-semibold" : "text-gray-300"
                }`}
              >
                {item.question}
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className={`size-4 ml-auto transition-all ${
                  id === item.id
                    ? "text-purple-400 rotate-90"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            key={id}
            className="flex flex-col items-center justify-center h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={aboutDataQuestions.find((item) => item.id === id)?.icon}
              style={{ filter: "invert(1)" }}
              className="w-50 h-auto"
              alt="First Image"
            />
            <p className="text-gray-100 mt-10 text-md text-left max-w-md leading-loose">
              {id
                ? aboutDataQuestions.find((item) => item.id === id)?.answer
                : "Click on a question to see the answer"}
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
      <footer></footer>
      {isLoginModalOpen && <Login />}
      {setIsRegisterModalOpen && <Register />}
    </div>
  );
};

export default Home;
