type Feature = {
  id: number;
  url: string;
  title: string;
  message: string;
};

const features: Feature[] = [
  {
    id: 1,
    url: '/glob.png',
    title: 'Worldwide Access',
    message: 'Find gyms and trainers in 100+ cities',
  },
  {
    id: 2,
    url: '/debit2.png',
    title: 'No Membership Required',
    message: 'Pay-per-session. No contracts, ever.',
  },
  {
    id: 3,
    url: '/verified.png',
    title: 'Verified Trainers & Gyms',
    message: 'Curated professionals, rated by real users',
  },
  {
    id: 4,
    url: '/lightening.png',
    title: 'Instant Booking',
    message: 'Book in minutes, with real-time availability',
  },
];

export default function WhyLove() {
  return (
    <section className='px-8 py-16'>
      <div className=' text-gray-200 rounded-2xl flex flex-col lg:flex-row  items-center justify-center lg:justify-between'>
        {/* LEFT: Image card with decorative ribbons & glow */}
        <div className='mb-6 w-full lg:w-1/2 relative flex justify-center lg:justify-center'>
          <div className='relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-sm xl:max-w-xl'>
            {/* soft radial glow behind image */}
            <div className='absolute inset-0 pointer-events-none flex items-center justify-center'>
              <div className='w-72 h-72 rounded-full bg-yellow-400/10 blur-[54px] mix-blend-screen' />
            </div>

            {/* image (grayscale to match screenshot) */}
            <img
              src='/gym.png'
              alt='Athlete in gym'
              className='w-full h-full object-cover grayscale contrast-[0.9] block'
              loading='lazy'
            />

            {/* rounded inner shadow to mimic panel depth */}
            <div className='pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/60' />
          </div>
        </div>

        {/* RIGHT: Title + feature list */}
        <div className='max-w-[30rem] text-left  w-full lg:w-1/2'>
          <h3 className='max-w-[18rem] text-lg lg:text-2xl xl:text-3xl font-semibold text-white mb-3'>
            Why People Love Gymscanner
          </h3>
          <p className='text-gray-400 text-sm xl:text-base mb-8 max-w-[25rem]'>
            A smarter way to stay fit anywhere in the world
          </p>

          <ul role='list' className='space-y-4'>
            {features.map(({ id, url, title, message }) => (
              <li
                key={id}
                className='max-w-[30rem] flex items-start gap-4 p-4 rounded-xl bg-transparent hover:bg-white/2 transition transform hover:-translate-y-0.5 border border-transparent hover:border-gray-800'
                aria-labelledby={`feature-${id}`}
              >
                {/* icon badge */}
                <div className='flex-shrink-0 w-12 h-12 rounded-lg bg-[#0f0f10] ring-1 ring-yellow-800/20 flex items-center justify-center'>
                  <img src={url} alt={`${title} icon`} className='w-6 h-6' />
                </div>

                {/* text */}
                <div>
                  <h4 id={`feature-${id}`} className='text-white font-medium'>
                    {title}
                  </h4>
                  <p className='text-sm text-gray-400 mt-1 max-w-[20rem]'>{message}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
