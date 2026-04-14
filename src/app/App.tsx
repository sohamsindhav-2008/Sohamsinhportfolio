export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAF9]" style={{ fontFamily: 'Manrope, sans-serif' }}>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(0deg, #1A1A1A 0px, #1A1A1A 1px, transparent 1px, transparent 40px),
                           repeating-linear-gradient(90deg, #1A1A1A 0px, #1A1A1A 1px, transparent 1px, transparent 40px)`
        }} />

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
          <div className="inline-block px-4 py-2 border-2 border-[#1A1A1A] mb-8 animate-slide-down" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
            <p className="text-sm tracking-[0.2em] uppercase" style={{ fontFamily: 'Archivo, sans-serif' }}>IT Engineering Student</p>
          </div>

          <h1 className="mb-6 animate-slide-up" style={{
            fontFamily: 'Archivo, sans-serif',
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            opacity: 0,
            animationDelay: '0.4s',
            animationFillMode: 'forwards'
          }}>
            Sindhav Sohamsinh<br />Jashubhai
          </h1>

          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up" style={{
            opacity: 0,
            animationDelay: '0.6s',
            animationFillMode: 'forwards'
          }}>
            Focused on building practical projects and developing strong problem-solving skills in technology.
          </p>

          <div className="flex gap-4 justify-center flex-wrap animate-slide-up" style={{
            opacity: 0,
            animationDelay: '0.8s',
            animationFillMode: 'forwards'
          }}>
            <a href="#projects" className="px-8 py-4 bg-[#0F4C3A] text-white border-2 border-[#0F4C3A] hover:bg-[#0A3A2A] transition-all duration-300 hover:scale-105" style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 600 }}>
              View Projects
            </a>
            <a href="#contact" className="px-8 py-4 bg-transparent border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all duration-300" style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 600 }}>
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 border-t-4 border-[#1A1A1A]">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 pb-4 border-b-2 border-[#0F4C3A]" style={{
            fontFamily: 'Archivo, sans-serif',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700
          }}>
            About Me
          </h2>

          <div className="space-y-6 text-lg text-[#2A2A2A] leading-relaxed">
            <p>
              I am <strong style={{ fontWeight: 600 }}>Sindhav Sohamsinh Jashubhai</strong>, currently pursuing a Bachelor's degree in Information Technology from Dharmsinh Desai University.
            </p>
            <p>
              I am passionate about learning new technologies and building real-world projects. I aim to develop efficient solutions and grow as a skilled IT professional.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-12 pb-4 border-b-2 border-[#0F4C3A]" style={{
            fontFamily: 'Archivo, sans-serif',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700
          }}>
            Education
          </h2>

          <div className="space-y-6">
            <div className="border-4 border-[#1A1A1A] p-8 hover:border-[#0F4C3A] transition-all duration-300 hover:translate-x-2">
              <div className="flex justify-between items-start flex-wrap gap-4 mb-3">
                <h3 style={{ fontFamily: 'Archivo, sans-serif', fontSize: '1.5rem', fontWeight: 700 }}>
                  Bachelor of Engineering (Information Technology)
                </h3>
                <span className="px-3 py-1 bg-[#0F4C3A] text-white text-sm" style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 600 }}>
                  Currently Pursuing
                </span>
              </div>
              <p className="text-[#4A4A4A]">Dharmsinh Desai University</p>
            </div>

            <div className="border-4 border-[#E5E5E5] p-8 hover:border-[#1A1A1A] transition-all duration-300">
              <div className="flex justify-between items-start flex-wrap gap-4 mb-3">
                <h3 style={{ fontFamily: 'Archivo, sans-serif', fontSize: '1.5rem', fontWeight: 700 }}>
                  Higher Secondary (Std 12 - HSC Board)
                </h3>
                <span className="px-3 py-1 bg-[#E5E5E5] text-[#1A1A1A] text-sm" style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 600 }}>
                  Successfully Passed
                </span>
              </div>
            </div>

            <div className="border-4 border-[#E5E5E5] p-8 hover:border-[#1A1A1A] transition-all duration-300">
              <div className="flex justify-between items-start flex-wrap gap-4 mb-3">
                <h3 style={{ fontFamily: 'Archivo, sans-serif', fontSize: '1.5rem', fontWeight: 700 }}>
                  Secondary (Std 10 - SSC Board)
                </h3>
                <span className="px-3 py-1 bg-[#E5E5E5] text-[#1A1A1A] text-sm" style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 600 }}>
                  Successfully Passed
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-[#FAFAF9]">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-12 pb-4 border-b-2 border-[#0F4C3A]" style={{
            fontFamily: 'Archivo, sans-serif',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700
          }}>
            Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l-4 border-[#0F4C3A] pl-6">
              <h3 className="mb-4" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '1.25rem', fontWeight: 700 }}>
                Technical Skills
              </h3>
              <ul className="space-y-2 text-[#2A2A2A]">
                <li>• C++ Programming</li>
                <li>• Basic Programming Concepts</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#0F4C3A] pl-6">
              <h3 className="mb-4" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '1.25rem', fontWeight: 700 }}>
                Tools & Technologies
              </h3>
              <ul className="space-y-2 text-[#2A2A2A]">
                <li>• MS Office</li>
                <li>• Basic Development Tools</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#0F4C3A] pl-6">
              <h3 className="mb-4" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '1.25rem', fontWeight: 700 }}>
                Other Skills
              </h3>
              <ul className="space-y-2 text-[#2A2A2A]">
                <li>• Problem Solving</li>
                <li>• Team Collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-[#0F4C3A] text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-12 pb-4 border-b-2 border-white" style={{
            fontFamily: 'Archivo, sans-serif',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700
          }}>
            Projects
          </h2>

          <div className="border-4 border-white p-10 bg-[#0A3A2A] hover:bg-[#083528] transition-all duration-300">
            <h3 className="mb-4" style={{ fontFamily: 'Archivo, sans-serif', fontSize: '2rem', fontWeight: 700 }}>
              Automatic Solar Tracking System
            </h3>

            <p className="text-lg mb-6 text-white/90 leading-relaxed">
              A system designed to improve solar panel efficiency by automatically adjusting its direction based on sunlight.
            </p>

            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-3">
                <span className="text-[#7FD3B8] mt-1">▸</span>
                <span>Uses sensors to detect light intensity</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7FD3B8] mt-1">▸</span>
                <span>Adjusts panel direction automatically</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7FD3B8] mt-1">▸</span>
                <span>Helps improve energy output</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-12 pb-4 border-b-2 border-[#0F4C3A]" style={{
            fontFamily: 'Archivo, sans-serif',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700
          }}>
            Experience
          </h2>

          <div className="space-y-4 text-lg text-[#2A2A2A]">
            <p>• Worked on academic projects</p>
            <p>• Gained practical understanding through hands-on implementation</p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 px-6 bg-[#FAFAF9]">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-12 pb-4 border-b-2 border-[#0F4C3A]" style={{
            fontFamily: 'Archivo, sans-serif',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700
          }}>
            Achievements & Certifications
          </h2>

          <div className="space-y-4 text-lg text-[#2A2A2A]">
            <p>• Completed project on solar tracking system</p>
            <p>• Continuously improving technical skills</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-[#1A1A1A] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-12 pb-4 border-b-2 border-[#0F4C3A]" style={{
            fontFamily: 'Archivo, sans-serif',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700
          }}>
            Get In Touch
          </h2>

          <div className="space-y-6">
            <div className="border-2 border-white/20 p-8 hover:border-[#0F4C3A] transition-all duration-300">
              <p className="text-sm text-white/60 mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 600, letterSpacing: '0.1em' }}>
                EMAIL
              </p>
              <a href="mailto:sohamsindhav@gmail.com" className="text-2xl hover:text-[#7FD3B8] transition-colors" style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 600 }}>
                sohamsindhav@gmail.com
              </a>
            </div>

            <div className="border-2 border-white/20 p-8 hover:border-[#0F4C3A] transition-all duration-300">
              <p className="text-sm text-white/60 mb-2" style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 600, letterSpacing: '0.1em' }}>
                LINKEDIN
              </p>
              <a
                href="https://www.linkedin.com/in/sohamsinh-sindhav-1369ab389?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-[#7FD3B8] transition-colors break-all"
                style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 600 }}
              >
                linkedin.com/in/sohamsinh-sindhav-1369ab389
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#0F4C3A] text-white text-center">
        <p className="text-sm text-white/80">
          © 2026 Sindhav Sohamsinh Jashubhai. All rights reserved.
        </p>
      </footer>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-slide-down {
          animation: slide-down 0.8s ease-out;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}