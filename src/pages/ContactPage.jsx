// src/pages/ContactPage.jsx

import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import SectionBadge from "../components/common/SectionBadge";

import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";

function ContactPage() {
  useEffect(() => {
    document.title = "Contact | John Mark M. Frias - Web Developer";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Get in touch with John Mark M. Frias for web development, full-stack apps, UI/UX design, or collaboration inquiries."
      );
    }
  }, []);

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
              <ContactInfo />
              <ContactForm />
            </div>

          </Container>
        </Section>
      </main>
    </>
  );
}

export default ContactPage;