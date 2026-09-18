// src/pages/AboutPage.jsx

import { useEffect } from "react";
import { Link } from "react-router-dom";
import SectionBadge from "../components/common/SectionBadge";
import Button from "../components/common/Button";
import gradPic from "/public/assets/gradpic.jpg";

function AboutPage() {
  useEffect(() => {
    document.title = "About | John Mark M. Frias - Web Developer & Designer";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Learn more about John Mark M. Frias, a Web Developer specializing in custom WordPress solutions, REST APIs, React, and Core Web Vitals performance."
      );
    }
  }, []);

  return (
    <main className="w-full bg-white text-slate-900 pt-28 pb-20 lg:pb-28">
      <div className="max-w-[1200px] mx-auto px-6 text-left">
        
        {/* Profile Intro Section */}
        <section aria-label="Profile Introduction" className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center mb-16">
          <div className="md:col-span-5 flex justify-center md:justify-start">
            <div className="w-full max-w-[320px] aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
              <img
                src={gradPic}
                alt="John Mark M. Frias"
                className="w-full h-full object-cover block"
                loading="eager"
              />
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col items-start">
            <SectionBadge>ABOUT ME</SectionBadge>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-2 tracking-tight">
              John Mark M. Frias
            </h1>

            <p className="text-sm font-semibold text-blue-600 mb-4">
              Web Developer &bull; Lucena City, Quezon / Cavite
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-3">
              I build fast, responsive, and easy-to-use websites and applications. With experience developing and migrating 20+ WordPress sites, I focus on clean code, strong SEO basics, and reliable performance.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              I graduated as Cum Laude with a degree in Information Technology. I enjoy turning client ideas into functional digital solutions through solo projects and team collaborations.
            </p>

            <div className="flex items-center gap-3">
              <Button href="/cv.pdf" variant="primary">
                Download CV
              </Button>
              <Link
                to="/skills"
                className="inline-flex items-center text-sm font-semibold text-slate-700 hover:text-blue-600 px-5 py-2.5 rounded-full border border-slate-300 hover:border-blue-600 transition-colors"
              >
                View Skills & Stack
              </Link>
            </div>
          </div>
        </section>

        {/* Experience & Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-slate-100 pt-12">
          {/* Experience */}
          <section aria-label="Work Experience">
            <h2 className="text-xl font-bold text-slate-900 mb-6 tracking-tight">
              Experience
            </h2>

            <div className="space-y-6">
              <div>
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-base font-bold text-slate-900">Web Developer</h3>
                  <span className="text-xs text-slate-400">Jan 2026 – Jul 2026</span>
                </div>
                <p className="text-xs text-blue-600 font-medium mb-2">Archicoders &bull; Imus, Cavite</p>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc list-outside ml-4 leading-relaxed">
                  <li>Built and migrated 20+ WordPress sites with custom post types and REST APIs.</li>
                  <li>Automated workflows with n8n across CRMs and web applications.</li>
                  <li>Applied technical SEO, semantic HTML, and Core Web Vitals speed optimization.</li>
                </ul>
              </div>

              <div>
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-base font-bold text-slate-900">Web Developer (Intern)</h3>
                  <span className="text-xs text-slate-400">Mar 2025 – Jun 2025</span>
                </div>
                <p className="text-xs text-blue-600 font-medium mb-2">Wellness PRO Inc. &bull; Pasig City</p>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-1.5 list-disc list-outside ml-4 leading-relaxed">
                  <li>Maintained company website built on WordPress with custom components.</li>
                  <li>Worked in agile sprints and collaborated using Figma and Canva.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section aria-label="Education">
            <h2 className="text-xl font-bold text-slate-900 mb-6 tracking-tight">
              Education
            </h2>

            <div className="space-y-6">
              <div>
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-base font-bold text-slate-900">BS Information Technology</h3>
                  <span className="text-xs text-slate-400">2021 – 2025</span>
                </div>
                <p className="text-xs text-slate-500 mb-2">Cavite State University - Imus Campus</p>
                <span className="inline-block text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded">
                  Cum Laude
                </span>
              </div>

              <div>
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-base font-bold text-slate-900">Information and Communication Strand</h3>
                  <span className="text-xs text-slate-400">2021 – 2025</span>
                </div>
                <p className="text-xs text-slate-500 mb-2">Ark Technological Institute</p>
                <span className="inline-block text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded">
                  With Honors
                </span>
              </div>
            </div>
          </section>
        </div>

      </div>
    </main>
  );
}

export default AboutPage;