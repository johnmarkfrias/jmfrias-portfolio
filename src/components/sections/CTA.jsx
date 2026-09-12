// src/components/sections/CTA.jsx

import SectionBadge from "../common/SectionBadge";
import Button from "../common/Button";

function CTA() {
  return (
    <section 
      id="cta" 
      aria-labelledby="cta-heading"
      className="py-[60px] md:py-[80px] lg:py-[100px] xl:py-[120px] bg-white"
    >
      {/* 1440px Global Container Layout */}
      <div className="max-w-[1440px] mx-auto px-[4%] 2xl:px-8">
        
        {/* Banner Box */}
        <div className="bg-slate-900 rounded-3xl px-6 sm:px-12 lg:px-16 py-12 sm:py-16 lg:py-20 text-center text-white shadow-2xl shadow-blue-950/20 border border-slate-800">
          <SectionBadge>CONTACT</SectionBadge>
          
          <h2 
            id="cta-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold my-4 leading-tight tracking-tight text-white"
          >
            Let's Build Something Together
          </h2>
          
          <p className="text-sm sm:text-base text-slate-300 w-full lg:max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Open to full-time roles, freelance projects, and everything in
            between.
          </p>

          {/* Action Buttons: Full-width stacked sa mobile (<640px), compact inline sa tablet at desktop */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full max-w-sm sm:max-w-none mx-auto">
            <div className="w-full sm:w-auto sm:min-w-[160px] text-center [&>a]:w-full [&>a]:justify-center [&>button]:w-full [&>button]:justify-center">
              <Button href="/cv.pdf" variant="primary">
                Download CV
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

      </div>
    </section>
  );
}

export default CTA;