import { Skills } from "./skills";

const Intro = () => (
  <>
    <section className='flex-col lg:flex-row flex items-center md:justify-between mt-16 mb-8 md:mb-12'>
      <img
        src='https://www.gravatar.com/avatar/db0da3096de4012a8482db72d561a279'
        className='rounded-lg md:w-16 m-4 md:m-10 w-20'
        alt='Gavin Harris looking slick'
      />
      <h1 className='text-6xl font-bold tracking-tighter leading-tight'>
        Gavin Harris.
      </h1>
      <span>
        <h4 className='text-center md:text-left text-lg mt-5 md:pl-8'>
          Technical Lead and Software Architect at Evie Digital since its
          formation in 2019.
        </h4>
        <p className='text-center md:text-left text-md mt-5 md:pl-8'>
          Key member of the Evie Digital Technical Team; ofterntimes being
          tasked with taking a project from inception through Proof of Concept
          and into Production. Gavin then leads the technical development of the
          product, upskilling fellow team members on the journey.
        </p>
      </span>
    </section>

    <section className='mt-16 mb-8 md:mb-12'>
      <Skills className='mx-8' />
    </section>
  </>
);

export default Intro;
