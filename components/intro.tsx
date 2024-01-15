import { Skills } from "./skills";
import Image from "next/image";

const Intro = () => (
  <>
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <Image
          width={333}
          height={591}
          src='/assets/img/gav.jpeg'
          alt='Gavin Harris'
          className='max-w-sm rounded-lg shadow-2xl'
        />
        <div>
          <h1 className='text-5xl font-bold'>Gavin Harris.</h1>
          <h4 className='py-6 text-lg'>
            Technical Lead and Software Developer at Evie Digital since its
            formation in 2019.
          </h4>
          <p className='py-6 text-md'>
            Gavin is a key member of the Evie Digital Technical Team who is
            responsible for taking projects from inception to production and
            leading the technical development of products while also training
            team members.
          </p>
        </div>
      </div>
    </div>

    <section className='mt-16 mb-8 md:mb-12'>
      <Skills className='mx-8' />
    </section>
  </>
);

export default Intro;
