'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Review = () => {
  return (
    <div className='container py-[48px] lg:py-[96px] md:w-[85%]'>
      <motion.div
        className='bg-brand-dark py-[64px] flex flex-col justify-center items-center rounded-2xl'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false, amount: 0.3 }} // Trigger when 30% in viewport
      >
        {/* Review Text */}
        <motion.h1
          className='text-brand-light text-2xl lg:text-4xl text-center w-full md:max-w-[1088px] p-10'
          variants={fadeInVariants}
        >
          I went from 3,000 followers to 18K in just 4 weeks! The team handled
          everything, from strategy to my first clothing sponsorships. I didn’t
          have to pay anything up front and now my earnings are consistent and
          growing!
        </motion.h1>

        {/* Reviewer Info */}
        <motion.div className='mt-8 text-center' variants={fadeInVariants}>
          <Image
            className='mx-auto'
            src='/images/reviewer.png'
            width={56}
            height={56}
            alt='Reviewer'
          />

          <motion.div
            className='text-brand-light mt-4'
            variants={fadeInVariants}
          >
            <h1 className='font-semibold'>Emilia M.</h1>
            <p className='mt-2 text-sm'>Anime Cosplayer</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Review;
