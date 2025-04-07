import Image from 'next/image';
import Button from '../core/Button';

const Contact = () => {
  return (
    <div className='py-4 lg:py-[64px] '>
      <div className='container'>
        <div className='grid lg:grid-cols-2 gap-16'>
          <div>
            <header className='text-center md:text-left'>
              <h3 className='text-[#004E99] font-bold mb-3'>Contact</h3>

              <h1 className='text-brand-dark font-semibold text-4xl'>
                Get in touch{' '}
              </h1>

              <p className='mt-5 text-xl'>
                Reach out to us, and let’s discuss how we can help you grow
              </p>
            </header>

            <div className=' lg:hidden my-8 mx-auto flex justify-center'>
              <Image
                src='/images/contact.png'
                alt='Contact'
                width={576}
                height={800}
                className='rounded-xl'
              />
            </div>

            {/* Form */}
            <form className='mt-12 lg:pr-[48px]'>
              <div className='grid md:grid-cols-2 gap-8'>
                <div>
                  <label
                    className='text-[#344054] text-sm font-medium'
                    htmlFor='fname'
                  >
                    First name *
                  </label>
                  <input
                    id='fname'
                    required
                    className='w-full mt-1.5 border border-border-primary rounded-md px-3.5 py-2.5'
                    type='text'
                    placeholder='First Name'
                  />
                </div>

                <div>
                  <label
                    className='text-[#344054] text-sm font-medium'
                    htmlFor='lname'
                  >
                    Last name *
                  </label>
                  <input
                    id='lname'
                    required
                    className='w-full mt-1.5 border border-border-primary rounded-md px-3.5 py-2.5'
                    type='text'
                    placeholder='Last Name'
                  />
                </div>
              </div>

              <div className='mt-6'>
                <label
                  className='text-[#344054] text-sm font-medium'
                  htmlFor='email'
                >
                  Email *
                </label>
                <input
                  id='email'
                  required
                  className='w-full mt-1.5 border border-border-primary rounded-md px-3.5 py-2.5'
                  type='email'
                  placeholder='you@company.com'
                />
              </div>

              <div className='mt-6'>
                <label
                  className='text-[#344054] text-sm font-medium'
                  htmlFor='phone'
                >
                  Phone number *
                </label>
                <input
                  id='phone'
                  className='w-full mt-1.5 border border-border-primary rounded-md px-3.5 py-2.5'
                  type='phone'
                  required
                  placeholder='+1 (555) 000-0000'
                />
              </div>

              <div className='mt-6'>
                <label
                  className='text-[#344054] text-sm font-medium'
                  htmlFor='phone'
                >
                  Message
                </label>

                <textarea
                  placeholder='Leave us a message..'
                  rows={5}
                  className='w-full mt-1.5 border border-border-primary rounded-md px-3.5 py-2.5'
                ></textarea>
              </div>

              <div className='mt-8'>
                <Button buttonClass='w-full'>Send Message</Button>
              </div>
            </form>
          </div>

          <div className='hidden lg:flex justify-end'>
            <Image
              src='/images/contact.png'
              alt='Contact'
              width={576}
              height={800}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
