import { Skills } from "./skills";
import Image from "next/image";
import Link from "next/link";

const Intro = () => (
  <>
    <div className='hero min-h-screen bg-base-200 place-items-start pt-20 md:place-items-center'>
      <div className='hero-content justify-start flex-col lg:flex-row-reverse'>
        <Image
          width={333}
          height={591}
          src='/assets/img/gav.jpeg'
          alt='Gavin Harris'
          className='w-32 md:w-80 max-w-sm rounded-lg shadow-2xl lg:mr-6'
        />
        <div className='lg:ml-6'>
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
          <div className='flex gap-3'>
            <Link
              className='link-primary'
              href='https://www.linkedin.com/in/gavinharris/'
            >
              LinkedIn
            </Link>
            <Link
              rel='me noreferrer'
              className='link-primary'
              href='https://aus.social/@gavlaa'
            >
              Mastodon
            </Link>
            <Link
              className='link-primary'
              href='https://www.github.com/gavinharris-dev'
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>

    <section className='mt-16 mb-8 md:mb-12'>
      <Skills />
    </section>
  </>
);

export default Intro;
