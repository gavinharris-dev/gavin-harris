import Container from "./container";

const Footer = () => (
  <footer className='bg-accent-1 border-t border-accent-2'>
    <Container>
      <div className='py-10 flex flex-col lg:flex-row items-center print:hidden'>
        <h3 className='text-lg font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 flex-grow'>
          Hosted simply by <a href='https://vercel.com'>Vercel</a>.
        </h3>
        <span className='flex flex-row'>
          <h4 className='tracking-tighter font-light mr-2'>
            View the source on
          </h4>
          <a href='https://github.com/gavinharris-dev/gavin-harris'>
            <img
              src='/assets/img/GitHub-Mark/PNG/GitHub-Mark-32px.png'
              alt='GitHub Logo'
            />
          </a>
        </span>
      </div>
    </Container>
  </footer>
);

export default Footer;
