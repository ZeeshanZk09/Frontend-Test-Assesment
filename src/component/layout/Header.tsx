import { useState, type JSX } from 'react';

export default function Header(): JSX.Element {
  const [open, setOpen] = useState(false);
  console.log(open);

  // update these nav items to actual routes or replace <a> with next/link <Link href="...">
  const navItems = [
    { id: 'find', label: 'Find Trainer', href: '/search' },
    { id: 'how', label: 'How It Works', href: '#how-it-works' },
    { id: 'become', label: 'Become a Trainer', href: '/become-trainer' },
  ];

  return (
    <header className='absolute w-screen z-50 bg-transparent'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6'>
        <div className='flex items-center justify-between '>
          {/* Logo / Brand */}
          <div className='flex items-center'>
            <a
              href='/'
              className='text-xl md:text-2xl font-semibold text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded'
              aria-label='Gymscanner - Home'
            >
              Gymscanner
            </a>
          </div>

          {/* Desktop nav */}
          <nav
            aria-label='Primary'
            className='hidden px-8 py-4 md:flex md:items-center rounded-full bg-[#ffffff10] backdrop-blur-sm border border-[#ffffff2c] md:space-x-6'
          >
            <ul className='flex items-center space-x-8 text-sm text-gray-200'>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className='hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded px-2 py-1'
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right-side actions (desktop) */}
          <div className='hidden md:flex items-center gap-4'>
            <a
              href='/login'
              className='text-sm text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded px-2 py-1'
            >
              Log In
            </a>

            <a
              href='/signup'
              className='inline-flex items-center px-4 py-2 rounded-full bg-yellow-300 text-black text-sm font-medium shadow-sm hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400'
            >
              Sign Up
            </a>
          </div>

          {/* Mobile controls */}
          <div className='flex md:hidden items-center'>
            {/* Mobile CTA (optional) */}
            <a
              href='/signup'
              className='mr-3 inline-flex items-center px-3 py-1.5 rounded-full bg-yellow-300 text-black text-sm font-medium shadow-sm'
            >
              Sign Up
            </a>

            {/* Hamburger button */}
            <button
              type='button'
              aria-controls='primary-navigation'
              onClick={() => setOpen((s) => !s)}
              className='inline-flex items-center justify-center rounded p-2 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400'
            >
              <span className='sr-only'>{open ? 'Close menu' : 'Open menu'}</span>
              {/* Icon: simple hamburger / X */}
              <svg className='h-6 w-6' viewBox='0 0 24 24' fill='none' aria-hidden>
                {open ? (
                  <path
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 7h16M4 12h16M4 17h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (slide-down panel) */}
      <div
        id='primary-navigation'
        className={`md:hidden transition-[opacity,transform] duration-200 ease-in-out origin-top-right ${
          open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className='mx-4 mb-4 rounded-lg backdrop-blur-md border border-white/8 shadow-lg p-4'>
          <ul className='space-y-3'>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className='block rounded px-3 py-2 text-white hover:bg-white/3 focus:outline-none focus:ring-2 focus:ring-yellow-400'
                >
                  {item.label}
                </a>
              </li>
            ))}

            <li>
              <a
                href='/login'
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className='block rounded px-3 py-2 text-gray-200 hover:bg-white/3 focus:outline-none focus:ring-2 focus:ring-yellow-400'
              >
                Log In
              </a>
            </li>

            <li>
              <a
                href='/signup'
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className='inline-block w-full text-center rounded px-3 py-2 bg-yellow-300 text-black font-medium hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400'
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
