import Image from 'next/image';
import Button from '../../core/Button';

const Hero = () => {
  return (
    <div className='md:h-[calc(100vh-108px)] flex justify-center flex-col items-center'>
      <div className='container md:flex md:justify-between items-center flex-col-reverse lg:flex-row justify-center space-y-12 lg:space-y-0'>
        <div className='block md:hidden'>
          <img
            src={'/images/hero/tablet-screen.png'}
            width={200}
            height={300}
            alt='tablet-screen'
            className=' w-full group-hover:scale-[1.1] group-hover:rotate-6 ease-out transition-all duration-300'
          />
        </div>
        <header className='text-center md:text-left'>
          <h1 className='text-6xl text-brand-dark leading-[64px] lg:leading-[72px]'>
            Turn Your <span className='font-bold italic'>Passion</span>{' '}
            <br></br> Into Influence - <br></br>
            <span className='font-bold italic'> And Income</span>
          </h1>

          <p className='md:max-w-[480px] mt-6 text-xl w-full'>
            We help aspiring and established influencers find their niche, grow
            their audience, and monetize their brand—without the guesswork.
          </p>

          <div className='mt-12'>
            <Button link='/contact'>Apply Now</Button>
          </div>
        </header>

        <div className='hidden md:block relative  h-full group w-[45%]'>
          <Image
            src={'/images/hero/cute-character.png'}
            width={200}
            height={300}
            alt='cute-character'
            className='absolute top-[-40px] left-[-55px] hidden xl:block group-hover:-translate-y-16 ease-out transition-all duration-300'
          />
          <Image
            src={'/images/hero/phone-screen.png'}
            width={200}
            height={300}
            alt='phone-screen'
            className='absolute left-[-140px] bottom-[25px] hidden xl:block group-hover:scale-[1.1] group-hover:-rotate-6 ease-out transition-all duration-300'
          />
          <img
            src={'/images/hero/tablet-screen.png'}
            width={200}
            height={300}
            alt='tablet-screen'
            className='lg:absolute w-full group-hover:scale-[1.1] group-hover:rotate-6 ease-out transition-all duration-300'
          />

          {/* After Image as Background */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
