export default function Hero() {
  return (
    <section className='relative hero-bg flex flex-col justify-center items-center min-h-[120vh] overflow-hidden'>
      {/* Overlay */}
      <div className='absolute inset-0 bg-black/40' />

      {/* Content */}
      <div className='relative h-fit min-h-screen z-10 flex flex-col justify-end items-center gap-2 text-center px-4 sm:px-6 md:px-8'>
        {/* Badge */}
        <span className='flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-white shadow-lg text-sm sm:text-base'>
          <img className='w-4 h-4 sm:w-5 sm:h-5' src='/stars.png' alt='star' />
          Smart fitness starts here
        </span>

        {/* Heading */}
        <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight sm:leading-[3rem] md:leading-[4rem] lg:leading-[5rem] text-white drop-shadow-lg'>
          Your Global Fitness Companion
        </h1>

        {/* Subheading */}
        <p className='mt-4 text-base sm:text-lg text-gray-200 max-w-xl'>
          Discover and book top gyms and certified personal trainers worldwide.
        </p>

        {/* Search Card */}
        <div className='w-full max-w-4xl bg-white rounded-2xl lg:rounded-full shadow-xl p-2 flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0'>
          {/* Trainers */}
          <div className='flex items-center justify-between px-4 py-3 rounded-2xl lg:rounded-full border border-gray-300 bg-white text-black hover:shadow-sm cursor-pointer w-full sm:w-auto'>
            <span className='font-medium'>Trainers</span>
            <img className='w-4 h-4' src='/down.png' alt='drop-down-icon' />
          </div>
          {[
            {
              label: 'Location',
              message: 'City or address',
            },
            {
              label: 'Training Type',
              message: 'Type (e.g. Yoga)',
            },
            {
              label: 'Date',
              message: 'Select date',
            },
          ].map(({ label, message }) => (
            <div
              className='indent-2 flex flex-col justify-center items-start w-full sm:w-auto'
              key={Math.random() * 10000}
            >
              <h3 className='text-black font-mono text-base'>{label}</h3>
              <p className='text-gray-500 text-sm font-light'>{message}</p>
            </div>
          ))}
          {/* Search Button */}
          <button
            type='button'
            title='search'
            className='font-mono flex items-center justify-center px-6 py-3 rounded-2xl lg:rounded-full text-black bg-yellow-400 shadow-md w-full sm:w-auto'
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
