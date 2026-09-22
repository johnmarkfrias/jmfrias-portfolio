// src/pages/ContactPage.jsx

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import SectionBadge from "../components/common/SectionBadge";

function ContactPage() {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"

  const recipientEmail = "johnmarkm.frias@gmail.com";

  // Automatically read query parameters and scroll to form whenever a pre-filled subject is passed
  useEffect(() => {
    const subjectParam = searchParams.get("subject");
    if (subjectParam) {
      setFormData((prev) => ({ ...prev, subject: subjectParam }));

      const formElement = document.getElementById("contact-form-container");
      if (formElement) {
        setTimeout(() => {
          formElement.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Direct background submission via AJAX (No apps will pop up!)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: formData.fullName,
          Email: formData.email,
          _subject: `[Portfolio Inquiry] ${formData.subject || "New Message"}`,
          InquiryType: formData.subject,
          Message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          fullName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setStatus("error");
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | John Mark M. Frias - Web Developer</title>
        <meta
          name="description"
          content="Get in touch with John Mark M. Frias for web development, full-stack apps, UI/UX design, or collaboration inquiries."
        />
        <link rel="canonical" href="https://jmfrias.dev/contact" />
      </Helmet>

      <main className="w-full bg-white text-slate-900 overflow-x-hidden">
        <Section id="contact-page" aria-label="Contact Page" className="bg-white text-slate-900 pb-[80px] lg:pb-[120px]">
          <Container>
            
            {/* Header Block */}
            <header className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10 sm:mb-12 lg:mb-16 pb-8 border-b border-slate-100">
              <div className="lg:col-span-7 text-left flex flex-col items-start gap-1">
                <SectionBadge>Contact</SectionBadge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-slate-900 tracking-tight leading-[1.12] m-0">
                  Let's build something great together.
                </h1>
              </div>

              <div className="lg:col-span-5 lg:pb-1 text-left">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                  Whether you need full-stack web development, custom applications, UI/UX prototyping, or graphic design solutions, feel free to reach out directly or send a message below.
                </p>
              </div>
            </header>

            {/* Main 2-Column Body */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start text-left">
              
              {/* Left Column: Direct Info List with Clickable Phone & Location */}
              <div className="lg:col-span-5 space-y-7 sm:space-y-8 lg:pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs">
                    <HiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">Email</h3>
                    <a 
                      href={`mailto:${recipientEmail}`}
                      className="text-sm text-slate-600 hover:text-blue-600 transition-colors mt-0.5 block break-all font-medium"
                    >
                      {recipientEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs">
                    <HiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">Phone</h3>
                    <a 
                      href="tel:+639389381538"
                      className="text-sm text-slate-600 hover:text-blue-600 transition-colors mt-0.5 block font-medium"
                    >
                      +63 938 938 1538 (Smart)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs">
                    <HiLocationMarker className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">Location</h3>
                    <a 
                      href="https://maps.google.com/?q=Imus+City+Cavite+Philippines" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-slate-600 hover:text-blue-600 transition-colors mt-0.5 block font-medium"
                    >
                      Imus City, Cavite Philippines
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div id="contact-form-container" className="lg:col-span-7 scroll-mt-28">
                <form 
                  onSubmit={handleSubmit}
                  className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm space-y-6"
                >
                  <h3 className="text-2xl sm:text-[26px] font-extrabold text-slate-900 tracking-tight">
                    Send me a message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                    <div>
                      <label 
                        htmlFor="fullName" 
                        className="block text-xs font-semibold text-slate-700 mb-2"
                      >
                        Full Name <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-slate-50/70 border border-slate-200/90 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label 
                        htmlFor="email" 
                        className="block text-xs font-semibold text-slate-700 mb-2"
                      >
                        Email Address <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-slate-50/70 border border-slate-200/90 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject Dropdown */}
                  <div>
                    <label 
                      htmlFor="subject" 
                      className="block text-xs font-semibold text-slate-700 mb-2"
                    >
                      Subject / Inquiry Type <span className="text-blue-600">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-slate-50/70 border border-slate-200/90 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 focus:bg-white transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled>
                          Select inquiry type...
                        </option>
                        <option value="Job Opportunity (Hire Me)">Job Opportunity (Hire Me)</option>
                        <option value="Project Collaboration">Project Collaboration</option>
                        <option value="Part-Time Position">Part-Time Position</option>
                        <option value="Freelance Project">Freelance Project</option>
                        <option value="Full-Stack Development Inquiry">Full-Stack Development Inquiry</option>
                        <option value="API Integration Inquiry">API Integration Inquiry</option>
                        <option value="UI/UX Design Inquiry">UI/UX Design Inquiry</option>
                        <option value="Graphic Design Inquiry">Graphic Design Inquiry</option>
                        <option value="QA Testing Inquiry">QA Testing Inquiry</option>
                        <option value="WordPress Customization Inquiry">WordPress Customization Inquiry</option>
                        <option value="AI & Automation Inquiry">AI & Automation Inquiry</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-xs font-semibold text-slate-700 mb-2"
                    >
                      Message <span className="text-blue-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me a bit about your project, timeline, and goals..."
                      className="w-full bg-slate-50/70 border border-slate-200/90 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 focus:bg-white transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button & Status Notifications */}
                  <div className="pt-2 flex flex-col gap-4">
                    <div>
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-60 active:scale-95 transition-all shadow-xs cursor-pointer"
                      >
                        {status === "loading" ? "Submitting..." : "Submit"}
                      </button>
                    </div>

                    {status === "success" && (
                      <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium">
                        Thank you! Your message has been sent directly to my inbox. I'll get back to you soon.
                      </div>
                    )}
                    {status === "error" && (
                      <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm font-medium">
                        Oops! Something went wrong sending your message. Please try again or email me directly at {recipientEmail}.
                      </div>
                    )}
                  </div>
                </form>
              </div>

            </div>

          </Container>
        </Section>
      </main>
    </>
  );
}

export default ContactPage;