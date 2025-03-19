import React from 'react';
import EducationCard from './EducationCard';

const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="flex items-center justify-center bg-emerald-400 pt-8 pb-16"
      role="region"
      aria-labelledby="education-heading"
    >
      <div className="container-standard mx-auto">
        <h2
          id="education-heading"
          className="text-4xl font-extrabold mb-12 text-center text-gray-800"
        >
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" aria-label="List of educational qualifications">
          <EducationCard
            logo="/assets/turing-logo.png"
            institution="Turing School of Software & Design"
            degree="Certificate in Software Engineering"
            description="An intensive, 1200 hours, seven-month program focused on modern front end development technologies and practices, emphasizing collaboration, problem-solving, and agile methodologies."
            dates="March 2024 - Jan 2025"
            highlights={[
              'Built multiple applications using React and Typescript.',
              'Developed skills in TypeScript, JavaScript, and modern CSS frameworks like Tailwind.',
              'Collaborated on agile teams to design and deploy functional web applications.',
              'Gained proficiency in testing tools like Cypress and Lighthouse.',
              'Focused on accessibility, performance, and best coding practices.',
            ]}
          />
          <EducationCard
            logo="/assets/tmcc-logo.webp"
            institution="Truckee Meadows Community College"
            degree="Associate of Applied Sciences - Welding"
            description="A two year degree program resulting in proficiency in the safe operation of four major welding processes,
            ability to identify and interpret technical drawings and print reading techniques, consistent and safe operation of
            welding equipment, power tools, and accessories in the preformance of welding and joinery."
            dates="August 2018 - May 2021"
            highlights={[
              'Learned horizantal, vertical, and overhead welding techniques as appropriate for SMAW, FCAW, MIG, and GTAW processes.',
              'Earned AWS Certifications for SMAW, FCAW, and MIG.',
              '900 hours spent in lab honing welding skills for the four processes mentioned.',
              'Graduated Summa Cum Laude.'
            ]}
          />
          {/* <EducationCard
            logo="/assets/cudenver-logo.png"
            institution="University of Colorado Denver"
            degree="Teaching Certificate – Urban Community Teacher Education"
            description="A comprehensive teacher preparation program focused on culturally responsive teaching practices in urban educational settings."
            highlights={[
              'Developed expertise in differentiated instruction for diverse classrooms.',
              'Implemented effective classroom management strategies.',
              'Focused on equity, inclusivity, and community engagement.',
              'Completed hands-on teaching experiences in urban schools.',
              'Learned to adapt curriculum to meet the needs of all learners.',
            ]}
          />
          <EducationCard
            logo="/assets/uwlax-logo.png"
            institution="University of Wisconsin-La Crosse"
            degree="Bachelor of Science in Music Performance"
            description="Focused on developing performance skills, music theory, and comprehensive knowledge of classical guitar, with additional studies in psychology and philosophy."
            highlights={[
              'Performed solo and ensemble recitals showcasing classical guitar repertoire.',
              'Studied music theory, aural skills, and performance techniques.',
              'Minored in Psychology and Philosophy, enriching understanding of human behavior and critical thinking.',
              'Participated in university music ensembles and solo recitals.',
            ]}
          />
          <EducationCard
            logo="/assets/umn-logo.png"
            institution="University of Minnesota"
            degree="Master of Music in Performance"
            description="Advanced studies in guitar performance, focusing on technique, interpretation, and professional recital preparation."
            highlights={[
              'Performed multiple graduate-level solo recitals.',
              'Studied advanced performance techniques and music interpretation.',
              'Worked closely with renowned faculty on guitar pedagogy.',
              'Participated in masterclasses and international competitions.',
            ]}
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Education;