export default function Footer() {
  const links = ['Terms of Use', 'Privacy Policy', 'Contact'];
  const icons = [
    {
      id: 1,
      label: 'x',
      url: '/x.png',
    },
    {
      id: 2,
      label: 'linkedIn',
      url: '/linkedIn.png',
    },
    {
      id: 3,
      label: 'github',
      url: '/github.png',
    },
    {
      id: 4,
      label: 'chatgpt',
      url: '/chatgpt.png',
    },
  ];
  return (
    <footer className='min-h-[50vh] w-full overflow-hidden px-10 sm:px-20'>
      <div className='bg-[#171717] p-4 sm:p-8 rounded-2xl'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 box-border p-4 sm:p-8'>
          <h3 className='font-semibold text-lg sm:text-xl'>GymBoy</h3>
          <div className='flex flex-col gap-2'>
            <h3 className='text-lg font-bold'>UseFull links</h3>
            <ul className='list-none'>
              {links.map((l, index) => (
                <li key={index}>{l}</li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col gap-2'>
            <h3 className='text-lg font-bold'>UseFull links</h3>
            <ul className='list-none'>
              {links.map((l, index) => (
                <li key={index}>{l}</li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col gap-2'>
            <h3 className='text-lg font-bold'>UseFull links</h3>
            <ul className='list-none'>
              {links.map((l, index) => (
                <li key={index}>{l}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-start sm:justify-items-stretch items-end p-4 sm:p-8'>
          <p className='text-center sm:text-left'>&copy; Gymscanner {new Date().getFullYear()}</p>
          <ul className='flex gap-2 justify-center sm:justify-end'>
            {icons.map(({ id, label, url }) => (
              <li key={id} title={label}>
                <img className='w-6 h-6 sm:w-8 sm:h-8' src={url} alt={label} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
