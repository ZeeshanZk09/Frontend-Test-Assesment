export default function Work() {
  const work = [
    {
      id: 1,
      url: '/bulb.png',
      title: 'Search Anywhere',
      note: 'Enter your location, date and training type',
    },
    {
      id: 2,
      url: '/tools.png',
      title: 'Choose & compare',
      note: 'View top-rated gyms and trainers near you',
    },
    {
      id: 3,
      url: '/debit.png',
      title: 'Book Instantly',
      note: 'Reserve and pay securely — no commitment',
    },
  ];
  return (
    <section className='w-screen bg-[#060606] text-gray-200 py-16'>
      <div className='max-w-7xl mx-auto px-6'>
        <header className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-white'>
            How Gymscanner Works
          </h2>
          <p className='mt-3 text-sm md:text-base text-gray-400'>
            Find a trainer or gym in just a few clicks
          </p>
        </header>

        <div className='relative'>
          {/* thin top dividing line that items will overlap */}
          <div className='absolute left-0 right-0 top-1/2 transform -translate-y-1/2 border-gray-800'></div>

          <ul className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
            {work.map(({ id, url, title, note }) => (
              <li
                key={id}
                className='flex flex-col items-center text-center px-6 md:px-4'
                aria-labelledby={`step-${id}`}
              >
                {/* Icon with glow/rings */}
                <div className='icon-glow mb-6'>
                  <img src={url} alt={title} className='w-48 h-48' />
                </div>

                {/* The card text sits slightly below the dividing line */}
                <div className='mt-2 max-w-xs'>
                  <h4 id={`step-${id}`} className='text-white text-lg font-medium mb-1'>
                    {title}
                  </h4>
                  <p className='max-w-[14rem] text-sm text-gray-400'>{note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
