// src/components/sections/CTA.jsx

import Section from "../layout/Section";
import Container from "../layout/Container";
import SectionBadge from "../common/SectionBadge";
import Button from "../common/Button";

const CV_PATH = "/assets/CV%20John%20Mark%20Frias.pdf";

function CTA() {
  return (
    <Section id="cta" aria-label="CTA Section" className="bg-white">
      <Container>
        
        {/* Banner Box */}
        <div className="bg-slate-900 rounded-3xl px-6 sm:px-12 lg:px-16 py-12 sm:py-16 lg:py-20 text-center text-white shadow-2xl shadow-blue-950/20 border border-slate-800">
          <div className="-mb-2 sm:-mb-3">
            <SectionBadge>CONTACT</SectionBadge>
          </div>
          
          <h2 
            id="cta-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight text-white"
          >
            Let's build something great together.
          </h2>
          
          <p className="text-sm sm:text-base text-slate-300 w-full lg:max-w-xl mx-auto mt-3 sm:mt-4 mb-8 sm:mb-10 leading-relaxed">
            Open to full-time roles, freelance projects, and everything in
            between.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full max-w-sm sm:max-w-none mx-auto">
            <div className="w-full sm:w-auto sm:min-w-[160px] text-center [&>a]:w-full [&>a]:justify-center [&>button]:w-full [&>button]:justify-center">
              <Button 
                href={CV_PATH} 
                variant="primary" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Preview CV
              </Button>
            </div>
            
            <div className="w-full sm:w-auto sm:min-w-[160px] text-center [&>a]:w-full [&>a]:justify-center [&>button]:w-full [&>button]:justify-center">
              <Button 
                href="/contact" 
                variant="outline" 
                className="!text-white !border-white/80 hover:!bg-white/10 hover:!border-white"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>

      </Container>
    </Section>
  );
}

export default CTA;