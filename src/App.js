import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Camera, Code, BookOpen, Briefcase, Github, Linkedin, Mail, ExternalLink, Menu, X } from 'lucide-react';
import doodleImage from './back.png';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('landing');
  const [focusedElement, setFocusedElement] = useState(null);
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });
  const [isDragging, setIsDragging] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const containerRef = useRef(null);

  const handleSpotlightDrag = useCallback((e) => {
    if (!isDragging) return;

    const x =
      ((e.clientX || e.touches?.[0]?.clientX) / window.innerWidth) * 100;
    const y =
      ((e.clientY || e.touches?.[0]?.clientY) / window.innerHeight) * 100;

    setSpotlightPos({ x, y });
  }, [isDragging]);

  const handleMouseDown = (e) => {
    if (activeSection === 'landing') {
      setIsDragging(true);
      e.preventDefault(); 
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      const handleMove = (e) => handleSpotlightDrag(e);
      const handleUp = () => handleMouseUp();
      
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('touchmove', handleMove);
      window.addEventListener('mouseup', handleUp);
      window.addEventListener('touchend', handleUp);
      
      return () => {
        window.removeEventListener('mousemove', handleMove);
        window.removeEventListener('touchmove', handleMove);
        window.removeEventListener('mouseup', handleUp);
        window.removeEventListener('touchend', handleUp);
      };
    }
  }, [isDragging, handleSpotlightDrag]);

  const projects = [
    {
      title: "Super Resolution with Vision Transformers",
      tech: "PyTorch, OpenCV, Scikit-learn",
      focus: "Compared trained-from-scratch SWINIR vs RCAN for super-resolution on image datasets; introduced pixel-level ascription map to visualize pixel impact.",
      link: "https://github.com/roja26/SuperRes",
    },
    {
      title: "Understanding Toy Language Models",
      tech: "PyTorch Lightning, Python",
      focus: "Trained a transformer to recognize balanced/unbalanced brackets, revealing it uses counting over stack methods. Analyzed model's reasoning with Chain of Thought prompting to better the problem-solving approach.",
      link: "",
    },
    {
      title: "Emotion Detection and Intensity Prediction (SemEval-2025)",
      tech: "Python, PyTorch, HuggingFace Transformers",
      focus: "Designed and fine-tuned transformer architectures (RoBERTa, GPT-2, Flan-T5) with LoRA for multi-label emotion detection and emotion intensity prediction, securing a spot on the leaderboard.",
      link: "https://github.com/roja26/emotion-detection-semeval",
    },
    {
      title: "3D Car Racing Game",
      tech: "Three.js, Parcel, JavaScript, HTML, CSS",
      focus: "Created a web-based racing game with 3D graphics and multiple view gameplay, optimized for performance.",
      link: "https://github.com/roja26/3D-Car-Racing-Game-/tree/master",
    },
    {
      title: "Social Media Web App",
      tech: "MongoDB, Express, React, Node, Docker",
      focus: "Built a website which is a Reddit Clone. Has features such as logging/sign up, creating and commenting on posts, following users etc. Can be used by multiple people for community interaction.",
      link: "https://github.com/roja26/Greddiit",
    },
    {
      title: "PCA and LDA Training For Iris Recognition",
      tech: "OpenCV, Python, Scikit-learn",
      focus: "Replicated and extended an iris recognition study analyzing occlusion removal effects on PCA and LDA, and performed controlled preprocessing ablations to verify and extend the original conclusions.",
      link: "https://github.com/roja26/PCA-and-LDA-Training-For-Iris-Recognition",
    },
    {
      title: "SimpleRA Database Engine",
      tech: "C++",
      focus: "Designed and implemented a database engine with relational algebra–based query execution, supporting CRUD operations, matrix and table manipulation with paging, indexing strategies, and custom search algorithms.",
      link: "https://github.com/roja26/SimpleRA_Database_Engine",
    },
    {
      title: "xv6 Operating System Extensions (RISC-V)",
      tech: "C, RISC-V Assembly, Operating Systems, QEMU",
      focus: "Extended the xv6 Unix-like operating system on RISC-V by implementing new system calls, advanced CPU scheduling policies, and copy-on-write fork with a quantitative scheduling analysis.",
      link: "https://github.com/roja26/arxv6_code",
    },
    {
      title: "Power Analysis of Memory Hierarchies in RISC-V Systems using gem5",
      tech: "C, gem5 Simulator, RISC-V Architecture",
      focus: "Evaluated power-performance trade-offs in RISC-V memory hierarchies using gem5 and analyze the impact of cache parameters (size, associativity, block size) on power and performance.",
      link: "https://github.com/roja26/Power-Analysis-of-Memory-Hierarchies-in-RISC-V-Systems-using-gem5",
    },
    {
      title: "E-Commerce Database Management System",
      tech: "Python, SQLite, MySQL",
      focus: "Designed a normalized (3NF) relational database for an e-commerce system with 6 entities and 19 relations, implementing Python and SQL interfaces for order, inventory, and customer management.",
      link: "https://github.com/roja26/E-Commerce_Database",
    },
    {
      title: "Smart Bulb IoT Project",
      tech: "One M2M, Python, Flask, C++ Arduino code, HTML, CSS",
      focus: "Built a miniature model of a Smart Bulb with brightness and room occupancy detector. Also developed a website that dynamically updates the same information pictorially.",
      link: "https://github.com/roja26/Smart-Bulb",
    },
    {
      title: "Remote PID Motor Control System",
      tech: "C, C++, JavaScript, HTML, CSS",
      focus: "Built a remote lab platform for real-time hardware experiments with live video and graphical feedback and implemented a PID controller achieving near-zero steady-state error for precise DC motor position control.",
      link: "https://github.com/roja26/PID-Control-of-Motor",
    },
  ];

  const publications = [
    {
      title: "Fusion2Print: Deep Flash-Non-Flash Fusion for Contactless Fingerprint Matching",
      venue: "Under Review at ICPR 2026",
      year: "Jan 2026",
      link: "https://arxiv.org/abs/2601.02318"
    },
  ];

  const experiences = [
    {
      role: "Software Engineering Intern",
      org: "Uber, India",
      orgLink: "https://www.uber.com/in/en/careers/teams/engineering/",
      period: "May 2024 - Jul 2025",
      focus: ["Customer Experience ML Dashboard ", "LLM Copilot for Risk Platform"],
      desc: ["Developed a full-stack dashboard to visualize ML insights regarding customer experience, enabling businessstakeholders to make data-driven decisions.", "Built an LLM agent and supporting tools with a UI interface for it to act as a copilot for Uber's Risk Detection and Mitigation platform, improving internal investigation workflows."],
      tech: ["Python, Golang, SQL, ReactJS", "Python, LangGraph, Java, gRPC, ReactJS"]
    },
    {
      role: "Graduate Researcher",
      org: "CVIT (Centre for Visual Information Technology), IIIT Hyderabad",
      orgLink: "https://cvit.iiit.ac.in/",
      period: "Mar 2024 - Present",
      focus: ["Contactless Fingerprint Spoof Detection"],
      desc: ["Working on a project on contactless fingerprint spoof detection, involving an app and database to compare feature extraction from flash and non-flash images, and developing an algorithm to detect spoof images effectively."], 
      tech: ["OpenCV, Python, PyTorch, Verifinger SDK"],
    },
    {
      role: "Project Intern",
      org: "RCTS (Reddy Center for Technology and Society), IIIT Hyderabad",
      orgLink: "https://rcts.iiit.ac.in/",
      period: "Jan 2023 - Apr 2023",
      focus: ["ICR Summarization Tool"],
      desc: ["Developed an ML-based text summarizer and accompanying web interface for ICR (Intelligent Caller Response) Summarization."], 
      tech: ["Python, Flask, React, Express, MySQL, HTML, CSS, Javascript"],
    },
    {
      role: "Full-Stack Intern",
      org: "Evaluate Health",
      orgLink: "https://www.evaluatehealth.world/",
      period: "Mar 2023 - Jul 2023",
      focus: ["App Features"],
      desc: ["Implemented login/authentication, global docs, homepage for a medical consultation app."], 
      tech: ["Python, Flask, MySQL, Firebase, React Native"],
    },
    {
      role: "Teaching Assistant",
      org: "IIIT Hyderabad",
      period: "June 2023 - Sept 2024",
      focus: ["CS3.301 Operating Systems and Networks • MA2.101 Linear Algebra • CS7.404 Digital Image Processing"],
      desc: ["Worked as a teaching assistant for these courses involving creating assignments, conducting tutorials and labs and aiding course planning."], 
    }
  ];

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden" style={{
      background: 'radial-gradient(ellipse at top, #1a1a2e 0%, #0f0f0f 50%, #000000 100%)'
    }}>
      {/* Camera Viewfinder Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
        
        {/* Corner Frame Markers */}
        <div className="absolute top-4 left-4 w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-gray-500" />
        <div className="absolute top-4 right-4 w-6 h-6 md:w-8 md:h-8 border-t-2 border-r-2 border-gray-500" />
        <div className="absolute bottom-4 left-4 w-6 h-6 md:w-8 md:h-8 border-b-2 border-l-2 border-gray-500" />
        <div className="absolute bottom-4 right-4 w-6 h-6 md:w-8 md:h-8 border-b-2 border-r-2 border-gray-500" />
        
        {/* Draggable Center Focus Point */}
        {activeSection === 'landing' && (
          <div 
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-move z-50"
            style={{ 
              left: `${spotlightPos.x}%`, 
              top: `${spotlightPos.y}%`,
              pointerEvents: 'auto'
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          >
            <div className="relative w-16 h-16 md:w-24 md:h-24">
              <div className="absolute inset-0 border-2 border-white opacity-30 rounded-full" />
              <div className="absolute inset-2 border border-white opacity-40 rounded-full" />
              <div className="absolute top-1/2 left-0 right-0 h-px bg-white opacity-30" />
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white opacity-40" />
            </div>
          </div>
        )}
      </div>

      {/* Spotlight Effect with Hidden Image Reveal - Only when dragging */}
      {activeSection === 'landing' && isDragging && (
        <>
          {/* Black overlay with spotlight hole */}
          <div 
            className="fixed inset-0 pointer-events-none z-20"
            style={{
              background: `radial-gradient(circle 100px at ${spotlightPos.x}% ${spotlightPos.y}%, transparent 0%, transparent 30%, rgba(15,15,15,0.95) 100.5%, transparent 100%)`,
              transition: 'none'
            }}
          />
          
          {/* Hidden Doodle Image - Revealed by spotlight */}
          <div 
            className="fixed inset-0 pointer-events-none z-15"
            style={{
              clipPath: `circle(100px at ${spotlightPos.x}% ${spotlightPos.y}%)`,
              transition: 'none'
            }}
          >
            <div 
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage: `url(${doodleImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'contrast(1.2) brightness(1.1)'
              }}
            />
          </div>
        </>
      )}

      {/* Mobile & Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-30 px-6 md:px-8 py-4 md:py-6">
        <div className="flex justify-between items-center text-xs tracking-widest font-mono">
          {/* Logo/Brand */}
          <div className="flex items-center gap-2 text-gray-400">
            <Camera className="w-4 h-4" />
            <span>RS.SYS</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-4 lg:gap-8 text-gray-500">
            {[
              { id: 'landing', label: 'HOME' },
              { id: 'projects', label: 'PROJECTS' },
              { id: 'research', label: 'RESEARCH' },
              { id: 'experience', label: 'EXPERIENCE' }
            ].map(nav => (
              <button
                key={nav.id}
                onClick={() => setActiveSection(nav.id)}
                className={`transition-all duration-300 ${
                  activeSection === nav.id 
                    ? 'text-white' 
                    : 'hover:text-gray-300'
                }`}
              >
                {nav.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button and Location */}
          <div className="flex md:hidden items-center gap-3 text-gray-400">
            <span className="text-xs">BLR • IND</span>
            <button
              className="text-gray-400 hover:text-white transition-colors z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Location (desktop only) */}
          <div className="hidden md:block text-gray-400 font-mono text-xs">
            BLR • IND
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed top-16 left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-b border-gray-800 py-6 shadow-2xl">
            <div className="flex flex-col gap-4 px-6">
              {[
                { id: 'landing', label: 'HOME' },
                { id: 'projects', label: 'PROJECTS' },
                { id: 'research', label: 'RESEARCH' },
                { id: 'experience', label: 'EXPERIENCE' }
              ].map(nav => (
                <button
                  key={nav.id}
                  onClick={() => handleNavClick(nav.id)}
                  className={`text-left py-3 transition-all duration-300 text-sm tracking-widest ${
                    activeSection === nav.id 
                      ? 'text-white border-l-2 border-white pl-4' 
                      : 'text-gray-400 hover:text-gray-200 pl-4'
                  }`}
                >
                  {nav.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div 
        ref={containerRef}
        className="h-full overflow-y-auto scrollbar-hide relative"
        style={{ 
          scrollBehavior: 'smooth',
          userSelect: isDragging ? 'none' : 'auto',
          zIndex: 20
        }}
      >
        {/* Landing Section */}
        {activeSection === 'landing' && (
          <div 
            className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 pt-16 md:pt-0"
          >
            <div className="text-center space-y-6 md:space-y-8 max-w-3xl">
              <div 
                className="transition-all duration-1000"
                style={{
                  filter: 'blur(0px)',
                  animation: 'focusIn 1.5s ease-out'
                }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tight text-white mb-3 md:mb-4 drop-shadow-lg">
                  Roja Sahoo
                </h1>
                <div className="h-px w-24 md:w-32 bg-white/60 mx-auto mb-4 md:mb-6" />
                <p className="text-base sm:text-lg md:text-xl text-gray-200 font-light tracking-wide px-4">
                  Software Engineer and Computer Vision Researcher
                </p>
              </div>
              
              <div 
                className="space-y-3 md:space-y-4 text-gray-200 text-sm md:text-base leading-relaxed max-w-2xl mx-auto px-4"
                style={{
                  animation: 'focusIn 1.5s ease-out 0.5s both'
                }}
              >
                <p>
                  Hi, I'm Roja!
                  <br/><br/>
                  I'm passionate about mathematics, computer science, and anything that feels like a good puzzle. I'm currently pursuing my MS in 
                  Computer Science, specializing in computer vision and biometrics. Along the way, I've dabbled in the ins and outs of computer science 
                  engineering—building websites, video games, creating AI copilot agents, and training vision and language models from scratch. I love working at the 
                  intersection of ML, images, algorithms, and systems: exploring the uncertainty of research while also enjoying the very engineer-y 
                  satisfaction of making things work end-to-end. <br/><br/> When I'm not coding or experimenting, you'll probably find me eating chocolate or dancing 
                  my stress away!
                </p>
                <p className="text-xs text-gray-400 italic pt-2">
                  Drag focus point to 👀 what else interests me!
                </p>
              </div>

              <div 
                className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 md:gap-8 pt-6 md:pt-8 px-4"
                style={{
                  animation: 'focusIn 1.5s ease-out 1s both'
                }}
              >
                <a
                  href="https://github.com/roja26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 text-gray-300 hover:text-white transition-all duration-300"
                >
                  <Github className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                  <span className="text-xs tracking-widest uppercase">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/roja-sahoo-32075222a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 text-gray-300 hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                  <span className="text-xs tracking-widest uppercase">LinkedIn</span>
                </a>
                <a
                  href="mailto:rojasahoo260223@gmail.com"
                  className="group flex items-center justify-center gap-3 text-gray-300 hover:text-white transition-all duration-300"
                >
                  <Mail className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                  <span className="text-xs tracking-widest uppercase">Email</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <div className="min-h-screen px-4 sm:px-6 md:px-12 py-24 md:py-32">
            <div className="max-w-5xl mx-auto">
              <div className="mb-12 md:mb-16 space-y-2">
                <div className="flex items-center gap-2 md:gap-3 text-gray-300 text-xl md:text-3xl tracking-widest font-mono mb-4">
                  <Code className="w-6 h-6 md:w-8 md:h-8" />
                  <span className="text-lg md:text-3xl">PROJECT ARCHIVE</span>
                </div>
                <h2 className="text-xs md:text-sm font-light text-gray-600 tracking-tight italic">
                  "Things I've built that actually work (most of the time)"
                </h2>
              </div>

              <div className="space-y-4 md:space-y-6">
                {projects.map((project, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setFocusedElement(`project-${idx}`)}
                    onMouseLeave={() => setFocusedElement(null)}
                    className="group border border-gray-800 p-4 md:p-8 transition-all duration-500 hover:border-gray-600"
                    style={{
                      filter: focusedElement && focusedElement !== `project-${idx}` 
                        ? 'blur(2px)' 
                        : 'blur(0px)',
                      opacity: focusedElement && focusedElement !== `project-${idx}` 
                        ? 0.4 
                        : 1
                    }}
                  >
                    <div className="flex items-start justify-between mb-3 md:mb-4">
                      <h3 className="text-lg md:text-2xl font-light text-white group-hover:text-gray-300 transition-colors pr-4">
                        {project.title}
                      </h3>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 text-xs hover:text-white transition-colors duration-300 hover:border-white flex-shrink-0"
                        >
                          <Github className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                        </a>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                      {project.tech.split(', ').map((tech, techIdx) => (
                        <span 
                          key={techIdx}
                          className="text-xs font-mono text-gray-500 px-2 py-1 bg-gray-800/30 rounded"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                      {project.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Research Section */}
        {activeSection === 'research' && (
          <div className="min-h-screen px-4 sm:px-6 md:px-12 py-24 md:py-32">
            <div className="max-w-5xl mx-auto">
              <div className="mb-12 md:mb-16 space-y-2">
                <div className="flex items-center gap-2 md:gap-3 text-gray-300 text-xl md:text-3xl tracking-widest font-mono mb-4">
                  <BookOpen className="w-6 h-6 md:w-8 md:h-8" />
                  <span className="text-lg md:text-3xl">RESEARCH PUBLICATIONS</span>
                </div>
                <h2 className="text-xs md:text-sm font-light text-gray-600 tracking-tight italic">
                  "Papers that took longer to write than the code took to run"
                </h2>
              </div>

              <div 
                className="space-y-6 md:space-y-8 transition-all duration-500"
              >
                {publications.map((pub, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setFocusedElement(`pub-${idx}`)}
                    onMouseLeave={() => setFocusedElement(null)}
                    className="group border-l-2 border-gray-800 pl-4 md:pl-8 py-4 transition-all duration-500"
                    style={{
                      filter: focusedElement && focusedElement.startsWith('pub-') && focusedElement !== `pub-${idx}` 
                        ? 'blur(2px)' 
                        : 'blur(0px)',
                      opacity: focusedElement && focusedElement.startsWith('pub-') && focusedElement !== `pub-${idx}` 
                        ? 0.4 
                        : 1,
                      borderColor: focusedElement === `pub-${idx}` ? '#fff' : undefined
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-3">
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-light text-white mb-2 leading-snug">
                          {pub.title}
                        </h3>
                        <p className="text-gray-500 text-xs md:text-sm">
                          {pub.venue}
                        </p>
                      </div>
                      <div className="md:text-right md:ml-6">
                        <div className="text-gray-600 text-xs font-mono mb-1">{pub.year}</div>
                        <a 
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 text-xs hover:text-white transition-colors duration-300 border-b border-gray-700 hover:border-white"
                        >
                          View Paper →
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Research Interests Graph */}
              <div className="mt-8 pt-8 border-t border-gray-900 text-center transition-all duration-500"
                style={{
                  filter: focusedElement && focusedElement.startsWith('pub-') 
                    ? 'blur(2px)' 
                    : 'blur(0px)',
                  opacity: focusedElement && focusedElement.startsWith('pub-') 
                    ? 0.4 
                    : 1
                }}
              >
                <div className="relative h-64 md:h-80 flex items-center justify-center">
                  {/* SVG for all connection lines */}
                  <svg 
                    className="absolute top-0 left-0 w-full h-full pointer-events-none transition-opacity duration-500"
                    style={{
                      opacity: focusedElement === 'center' ? 1 : 0
                    }}
                  >
                    {[
                      'Computer Vision',
                      'Deep Learning',
                      'Image Processing',
                      'Model Interpretability',
                      'Explainable AI',
                      'Human-AI Alignment',
                      'Security & Trustworthy AI',
                      'Contactless Fingerprints',
                      'Multimodal Biometrics',
                      'Adversarial Robustness',
                    ].map((interest, idx) => {
                      const totalNodes = 10;
                      const angle = (idx * 360) / totalNodes - 90;
                      const radius = window.innerWidth < 768 ? 100 : 150;
                      const x = Math.cos((angle * Math.PI) / 180) * radius;
                      const y = Math.sin((angle * Math.PI) / 180) * radius;
                      
                      return (
                        <line
                          key={`line-${idx}`}
                          x1="50%"
                          y1="50%"
                          x2={`calc(50% + ${x}px)`}
                          y2={`calc(50% + ${y}px)`}
                          stroke="#ffffff"
                          strokeWidth="1"
                          opacity="0.4"
                          style={{
                            transition: 'all 0.5s ease'
                          }}
                        />
                      );
                    })}
                  </svg>

                  {/* Center node - Research Interests */}
                  <div 
                    className="absolute z-20"
                    onMouseEnter={() => setFocusedElement('center')}
                    onMouseLeave={() => setFocusedElement(null)}
                    onTouchStart={() => setFocusedElement('center')}
                  >
                    <div 
                      className="w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-gray-600 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center cursor-pointer transition-all duration-500"
                      style={{
                        borderColor: focusedElement === 'center' ? '#ffffff' : '#4b5563',
                        transform: focusedElement === 'center' ? 'scale(1.1)' : 'scale(1)',
                        boxShadow: focusedElement === 'center' ? '0 0 20px rgba(255,255,255,0.3)' : 'none'
                      }}
                    >
                      <span className="text-white text-xs md:text-sm font-light text-center leading-tight px-2">
                        Research<br/>Interests
                      </span>
                    </div>
                  </div>

                  {/* Interest nodes arranged in a circle */}
                  {[
                    'Computer Vision',
                    'Deep Learning',
                    'Image Processing',
                    'Model Interpretability',
                    'Explainable AI',
                    'Human-AI Alignment',
                    'Security & Trustworthy AI',
                    'Contactless Fingerprints',
                    'Multimodal Biometrics',
                    'Adversarial Robustness',
                  ].map((interest, idx) => {
                    const totalNodes = 10;
                    const angle = (idx * 360) / totalNodes - 90;
                    const radius = window.innerWidth < 768 ? 100 : 150;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;
                    
                    const isVisible = focusedElement === 'center';

                    return (
                      <div
                        key={interest}
                        className="absolute transition-all duration-500 pointer-events-none"
                        style={{
                          left: '50%',
                          top: '50%',
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${isVisible ? 1 : 0})`,
                          opacity: isVisible ? 1 : 0,
                          zIndex: 10
                        }}
                      >
                        <div 
                          className="px-2 py-1 md:px-3 md:py-1.5 rounded-full border bg-gray-900/90 backdrop-blur-sm whitespace-nowrap"
                          style={{
                            borderColor: '#ffffff',
                            boxShadow: '0 0 12px rgba(255,255,255,0.3)',
                            transition: 'all 0.5s ease'
                          }}
                        >
                          <span className="text-[8px] md:text-[10px] text-white font-mono">
                            {interest}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <div className="min-h-screen px-4 sm:px-6 md:px-12 py-24 md:py-32">
            <div className="max-w-5xl mx-auto">
              <div className="mb-12 md:mb-16 space-y-2">
                <div className="flex items-center gap-2 md:gap-3 text-gray-300 text-xl md:text-3xl tracking-widest font-mono mb-4">
                  <Briefcase className="w-6 h-6 md:w-8 md:h-8" />
                  <span className="text-lg md:text-3xl">WORK EXPERIENCE</span>
                </div>
                <h2 className="text-xs md:text-sm font-light text-gray-600 tracking-tight italic">
                  "Where I pretended to know what I was doing (and eventually did)"
                </h2>
              </div>

              <div className="space-y-12 md:space-y-16">
                {experiences.map((exp, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setFocusedElement(`exp-${idx}`)}
                    onMouseLeave={() => setFocusedElement(null)}
                    className="group transition-all duration-500"
                    style={{
                      filter: focusedElement && focusedElement !== `exp-${idx}` 
                        ? 'blur(2px)' 
                        : 'blur(0px)',
                      opacity: focusedElement && focusedElement !== `exp-${idx}` 
                        ? 0.4 
                        : 1
                    }}
                  >
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 md:mb-8 gap-2">
                      <div>
                        <h3 className="text-xl md:text-2xl font-light text-white mb-2 group-hover:text-gray-300 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base">
                          {exp.orgLink ? (
                            <a
                              href={exp.orgLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 hover:text-gray-300 transition-colors"
                            >
                              {exp.org}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : (
                            exp.org
                          )}
                        </p>
                      </div>
                      <div className="text-gray-500 text-xs md:text-sm font-mono">
                        {exp.period}
                      </div>
                    </div>

                    {/* Focus Items */}
                    <div className="space-y-4 md:space-y-6 pl-4 md:pl-6 border-l-2 border-gray-800 group-hover:border-gray-700 transition-colors">
                      {exp.focus.map((item, i) => (
                        <div key={i} className="space-y-2">
                          <p className="text-white text-sm md:text-base font-normal">
                            {item}
                          </p>
                          {exp.desc[i] && (
                            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                              {exp.desc[i]}
                            </p>
                          )}
                          {exp.tech && exp.tech[i] && (
                            <div className="flex flex-wrap gap-2 mt-3">
                              {exp.tech[i].split(', ').map((tech, techIdx) => (
                                <span 
                                  key={techIdx}
                                  className="text-xs font-mono text-gray-500 px-2 py-1 bg-gray-800/30 rounded"
                                >
                                  {tech.trim()}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes focusIn {
          from {
            filter: blur(8px);
            opacity: 0;
            transform: scale(1.05);
          }
          to {
            filter: blur(0px);
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;