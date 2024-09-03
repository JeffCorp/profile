import React from 'react';
import Card from './Card';
import WorkCard from './WorkCard';
import projects from '../projectsData';

function RightSection() {
  return (
    <div className="h-[100%] flex flex-col py-20 px-4 lg:px-0 lg:pr-10 xl:pr-20  gap-20 items-center">
      <section
        id="work"
        className="w-full flex flex-col gap-2 items-center group"
      >
        <h2 className="text-white mb-8 mr-auto">WORK EXPERIENCE</h2>
        <WorkCard
          stack="JAVASCRIPT | REACT.JS | NEXT JS | NODE JS | NEST JS | TAILWIND CSS"
          title="BTRS COOPERATION"
          date="Aug 2021 - date"
          position="SENIOR SOFTWARE ENGINEER"
          link=""
          description="Contributed to the development, maintenance, and enhancement of multiple websites, working closely with other back-end developers, designers, and product teams to address front-end issues. Collaborated with other senior developers to troubleshoot complex problems and implement periodic updates, ensuring system reliability. Assessed UX and UI designs for technical feasibility and improved website uptime by 15% while reducing downtime incidents by 25% through regular maintenance and optimization."
        />
        <WorkCard
          stack="JAVASCRIPT | REACT.JS | NODE JS | TAILWIND CSS"
          title="Top Football Trials UK"
          date="Nov 2021 - March 2022"
          position="FULL-STACK ENGINEER"
          link="https://topfootballtrials.co.uk/"
          description="At Top Football Trials UK, one of the fastest-growing football trials companies, we developed and launched a platform that showcases football talent to FA-licensed scouts and agents. Utilizing JavaScript, React.js, and NodeJs, I implemented back-end features to enhance functionality and scalability. I also handled complex business logic on the client side, ensuring alignment with user requirements and business needs. I collaborated with the team lead on technical issues and integration points, ensuring code quality and adherence to best practices. Engaged in Agile processes, including sprint planning and daily stand-ups, to drive efficient project delivery."
        />{' '}
        <WorkCard
          stack="JAVASCRIPT | REACT.JS | NEXT JS | NODE JS | NEST JS | TAILWIND CSS"
          title="JeffCorp"
          date="June 2021 - Nov 2022"
          position="FOUNDER"
          link=""
          description="Contributed to the development, maintenance, and enhancement of multiple websites, working closely with back-end developers, designers, and product teams to address front-end issues. Collaborated with senior developers to troubleshoot complex problems and implement periodic updates, ensuring system reliability. Assessed UX and UI designs for technical feasibility and improved website uptime by 15% while reducing downtime incidents by 25% through regular maintenance and optimization."
        />{' '}
      </section>
      <section
        id="projects"
        className="w-full flex flex-col gap-2 items-center group"
      >
        <h2 className="text-white mb-8 mr-auto">PROJECTS</h2>
        <Card
          stack={projects[0].stack}
          title={projects[0].title}
          link={projects[0].link}
          description={projects[0].description.intro}
        />
        <Card
          stack={projects[1].stack}
          title={projects[1].title}
          link={projects[1].link}
          description={projects[1].description.intro}
        />
        <Card
          stack={projects[2].stack}
          title={projects[2].title}
          link={projects[2].link}
          description={projects[2].description.intro}
        />
      </section>
    </div>
  );
}

export default RightSection;
