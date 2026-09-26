import Section from "../layout/Section";
import Container from "../layout/Container";
import SectionBadge from "../common/SectionBadge";
import Button from "../common/Button";
import PhotoDeck from "../about/PhotoDeck";

function About() {
  return (
    <Section className="bg-transparent">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">

          {/* Column 1: Reusable Image Deck */}
          <div className="w-full min-w-0 flex items-center justify-center px-2 sm:px-4">
            <PhotoDeck />
          </div>

          {/* Column 2: Text Content */}
          <div className="flex flex-col items-start text-left w-full min-w-0">
            <div className="-mb-2 sm:-mb-3">
              <SectionBadge>ABOUT</SectionBadge>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4 leading-tight tracking-tight">
              Designing Solutions, Building Experiences
            </h2>

            <p className="w-full lg:max-w-xl text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
              I am a 23-year-old Full-Stack Web Developer born in Lucena City, Quezon, focused on building responsive, scalable, and user-centered web applications. My passion for development began during my ICT studies, where I built my first web project.
            </p>

            <p className="w-full lg:max-w-xl text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              I graduated <span className="font-medium text-slate-900">Cum Laude</span> with a Bachelor of Science in Information Technology from Cavite State University – Imus Campus. I am passionate about continuous learning and creating reliable, efficient, and practical digital solutions for real-world needs.
            </p>

            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3">
              <div className="w-full sm:w-auto sm:min-w-[160px] text-center [&>a]:w-full [&>a]:justify-center [&>button]:w-full [&>button]:justify-center">
                <Button href="/about" variant="primary">
                  Get to Know Me
                </Button>
              </div>
              <div className="w-full sm:w-auto sm:min-w-[160px] text-center [&>a]:w-full [&>a]:justify-center [&>button]:w-full [&>button]:justify-center">
                <Button href="/projects" variant="outline">
                  View Projects
                </Button>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}

export default About;